// api/index.js
import express from 'express';
import router from './routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// Vercel exige isso: exportar o handler da API
export default app;