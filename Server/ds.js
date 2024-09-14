import pg from "pg";

import dotenv from 'dotenv';
dotenv.config();


// database connection


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Mavex",
    password:"harsha123",
    port: 5432,
  });
  
  db.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(err => {
    console.error('Database connection error:', err.stack);
  });

export default db;