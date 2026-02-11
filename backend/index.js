import dotenv from 'dotenv';
dotenv.config();


const { startServer } = await import('./src/app.js');

startServer();