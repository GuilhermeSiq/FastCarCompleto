import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import agendamentoController from './controller/agendamentoController.js';
import usuarioController from './controller/usuarioController.js';

const server = express();

server.use(cors());
server.use(express.json());
server.use(agendamentoController);
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));