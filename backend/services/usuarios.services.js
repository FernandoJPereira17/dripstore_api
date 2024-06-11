import { Usuario } from '../model/usuario.model.js';

export const usuarioService = {

    getAll: async (req, res)=>{
        const usuarios = await Usuario.findAll();
        return res.status(200).json(usuarios);
    },
    getById: async (req, res)=>{

        const id = req.params.id;
        const usuario = await Usuario.findByPk(id);

            if(!usuario){
                res.status(404).json({
                    
                    message: `Produto id: ${id} não encontrado...`
                    
                })
            }
    }
}
