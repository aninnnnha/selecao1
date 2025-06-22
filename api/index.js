import express from 'express';
import router from './routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configure o CORS conforme seu front-end, aqui está aberto para todos (prod ajuste!)
app.use(cors());

// Permite receber JSON no corpo das requisições
app.use(express.json());

// Use as rotas definidas
app.use(router);

// Exporta o app para o Vercel rodar como função serverless
export default app;
