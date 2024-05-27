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
        
        buscarPorAtivo: async (req, res) => {
            
            const ativo = req.params.ativo === 'true' ? true : false;
            const produto = await Produto.findAll({

                where: {
                    ativo: ativo
                }
            });

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
                const [rowsUpdated, [produtoDb]] = await Produto.update(req.body, {
        
                    where: { id: id }
            });

                if(produtoDb){
                    return res.status(200).json(produtoDb);
                } else {
                    return res.status (404).json({message: `Produto id: ${id} atualizado com sucesso...`});
                }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao Atualizar Produto", error: error.json });
        }
        },

        deleteProduct: async (req, res) => {
            try {
                const id = req.params.id;
                const deleted = await Produto.destroy({
        
                    where: { id: id }
            });

                if(deleted){
                    return res.status(204).json({ message: `Produto id: ${id} Deletado com sucesso!`});
                } else {
                    return res.status (404).json({ message: `Produto id: ${id} não encontrado...`});
                }
        } catch (error) {
            return res.status(500).json({ message: "Erro ao Deletar Produto", error: error.message });
        }
        }
}
