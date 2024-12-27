import pg from 'pg';

export const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'YOUR DATABASE NAME HERE!',
  password: 'YOUR POSTGRES PASSWORD HERE!',
  port: 5432,
});