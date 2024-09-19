// import {Pool} from "pg";
// import pg from "pg";


// import dotenv from 'dotenv';
// dotenv.config();


// const poolconfig = {
//   max
// }


// // database connection


// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "Mavex",
//     password:"harsha123",
//     port: 5432,
//   });
  
//   db.connect()
//   .then(() => console.log('Database connected successfully'))
//   .catch(err => {
//     console.error('Database connection error:', err.stack);
//   });

// export default db;



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








// Create a new pool instance with the connection details
// const db = new Pool({
//   connectionString: "postgresql://e_commerce_database_lqsm_user:g4pa2YMq26Iuc00l7Q8yS5ew13JJZZAg@dpg-criol3u8ii6s73f7bu40-a/e_commerce_database_lqsm", // Fetch connection string from env
//   ssl: {
//     rejectUnauthorized: false, // Render requires SSL connection
//   },
// });

// // Test the database connection
// db.connect()
//   .then(client => {
//     console.log('Connected to PostgreSQL on Render');
//     client.release(); // Release the client back to the pool after connection
//   })
//   .catch(err => {
//     console.error('Database connection error:', err.stack);
//   });

export default db;
