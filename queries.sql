CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL
);

INSERT INTO items (title) VALUES ('Get Groceries');

ALTER TABLE items add column created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;