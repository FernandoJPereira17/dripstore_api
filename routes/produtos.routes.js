import express from 'express'
import { produtoService } from '../backend/services/produtos.services.js';

export const produtoRoute = (app) => {

    const route = express.Router()

    route.get('/', produtoService.getALL);
    route.get('/:id', produtoService.getById)
    route.post('/', produtoService.create)
    route.put('/', produtoService.atualizarProduto)

    app.use('/api/produto', route);
    // app.use('/api/produto/:id', route);
    

}
