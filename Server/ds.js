
import pg from 'pg'; // Use Pool for connection pooling
const { Pool } = pg;


import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file


const poolCongig = {
  max:5,
  min:2,
  IdleDeadline: 600000,
}

const DataBase = process.env.PG_DATABASE;
const UserName = process.env.PG_USER;
const Password = process.env.PG_PASSWORD;
const Host = process.env.PG_HOST;
const Port = process.env.PG_PORT;

poolCongig.connectionString = `postgres://${UserName}:${Password}@${Host}:${Port}/${DataBase}`;

const db = new Pool(poolCongig)


db.connect()
  .then(client => {
    console.log('Database connected successfully');
    client.release(); // Release the client back to the pool after connection
  })
  .catch(err => {
    console.error('Database connection error:', err.stack);
  });


export default db;
