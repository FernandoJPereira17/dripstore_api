import express from 'express'
import cors from 'cors';
import { connection } from './bd/bd.js';
import { produtoRoute } from '../routes/produtos.routes.js';

const app = express()

app.use(cors());

const HOST = 'localhost'
const PORT = 5000

connection();

//Converte o valor recebido via body na requisição...
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({
        message:"Servidor Rodando...",
        status: 200
    })
})

produtoRoute(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})
