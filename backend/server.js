import express from 'express'
import cors from 'cors';
import { connection } from './bd/bd.js';
import { produtoRoute } from '../routes/produtos.routes.js';

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
};
//cors
app.use(cors(corsOptions))

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
