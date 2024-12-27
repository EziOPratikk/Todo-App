import pg from 'pg';

export const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todos',
  password: 'postgres123',
  port: 5432,
});