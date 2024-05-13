import express from 'express'
import { connection } from './bd/bd.js';
import { produtoRoute } from '../routes/produtos.routes.js';

const app = express()

const HOST = 'localhost'
const PORT = 5000

connection();

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
