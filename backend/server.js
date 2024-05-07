import express from 'express'
import { connection } from './bd/bd.js';

const app = express()

const HOST = 'localhost'
const PORT = 5000

connection();

app.get('/', (req, res) => {
    res.send({
        message:"Servidor Rodando..."
    })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})
