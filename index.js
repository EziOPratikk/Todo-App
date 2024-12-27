import express from 'express';
import bodyParser from 'body-parser';

import { db } from './db/conn.js';

const app = express();
const PORT = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let items = [];

const date = new Date();

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};

const formattedDate = date.toLocaleDateString('en-US', options);

app.get('/', async (_, res) => {
  try {
    const result = await db.query('SELECT * FROM items');

    items = [];

    result.rows.forEach((row) => {
      items.push(row);
    });

    res.render('index.ejs', {
      listTitle: formattedDate,
      listItems: result.rows,
    });
  } catch (error) {
    res.send('Error occurred while fetching the list: ' + error.message);
  }
});

app.post('/add', async (req, res) => {
  const item = req.body.newItem;

  try {
    await db.query('INSERT INTO items (title) VALUES ($1)', [item]);
  } catch (_) {
    res.send('Error occurred while adding item into the list.');
  }

  res.redirect('/');
});

app.post('/edit', async (req, res) => {
  const itemId = req.body.updatedItemId;
  const itemTitle = req.body.updatedItemTitle;

  try {
    await db.query('UPDATE items SET title = ($1) WHERE id = ($2)', [
      itemTitle,
      itemId,
    ]);

    res.redirect('/');
  } catch (_) {
    res.send('Error occurred while updating the item.');
  }
});

app.post('/delete', async (req, res) => {
  const itemId = req.body.deleteItemId;

  try {
    await db.query('DELETE FROM items WHERE id = $1', [itemId]);

    res.redirect('/');
  } catch (_) {
    res.send('An error occurred while deleting the item.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});