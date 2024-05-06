import express from 'express'
const app = express()

    const HOST = 'localhost'
    const PORT = 5000

app.get('/', (req, res) => {
  res.send({
    message:"Servidor Rodando..."
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})
