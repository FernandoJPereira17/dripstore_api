import { Produto } from '../model/produto.model.js';
import winston from 'winston';

export const produtoService = {

        getALL: async (req, res) => {
            
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos);

        },
        getById: async (req, res) => {
            
            const id = req.params.id;
            const produto = await Produto.findByPk(id);

            if(!produto){
                res.status(404).json({

                    message: `Produto id: ${id} não encontrado...`
                
                })
            }

            return res.status(200).json(produto);
        }
}
