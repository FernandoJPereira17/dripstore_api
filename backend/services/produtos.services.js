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
        },
        
        create: async (req, res) => {
            const produto = req.body;
            const produtoDb = await Produto.create(produto);

            if(!produtoDb){
                return res.status(404).json({
                    message:`Produto id: ${id} não encontrado!`
            })
            }
            return res.status(201).json(produtoDb);
        },

        atualizarProduto: async (req, res) => {
            
            
            try {
                const id = req.params.id;
                const [rowsUpdated, [produtoDb]] = await Produto.update({
        
                    where: { id: id }
            });

                if(produtoDb){
                    return res.status(200).json(produtoDb);
                } else {
                    return res.status (404).json({message: `Produto id: ${id} atualizado com sucesso...`});
                }
        } catch (e) {
            return error;
        }
        }
}
