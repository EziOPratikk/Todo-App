
# TODO List Tracking App

A Todo List Recording APP built using Node, Express, EJS & PostgreSQL.

## Features

- **Add Items**: Users can add new items to the list.
- **Update Items**: Users can update existing items in the list.
- **Delete Items**: Users can remove items from the list.
- **Database Integration**: Items are stored in a PostgreSQL database.

## Steps

1. **Clone the Repository:**

   ```
   git clone https://github.com/EziOPratikk/Todo-App.git
   ```
2. **Install dependencies:**

    ```
    npm install
    ```
3. **Setup for Postgres Database:**

    i. Create a database using pgAdmin
    ii. Then create a table using pgAdmin. Use queries.sql file for references.
    iii. Head over to db/conn.js and type your database name and postgres password.

4. **Run the server:**

    ```
    nodemon index.js 
    ```

5. **Screenshots:**

  <img src='assets/screenshots/screenshot-1.png' style="display: block;"/>
  <img src='assets/screenshots/screenshot-2.png' style="display: block;"/>