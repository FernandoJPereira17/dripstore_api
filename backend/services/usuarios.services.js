import { Usuario } from '../model/usuario.model.js';

export const usuarioService = {

    create: async (req, res) => {
        const { nome, email, senha } = req.body;

        const usuario = await Usuario.findOne({
            where: {
                email: email
            }
        })

        if (usuario) {
            return res.status(404).json(`Usuário já cadastrado`);
        }

        try {
            //const passHash = await hash(senha, 8)
            const user = { nome: nome, email: email, senha }

            console.log('user:', user)
            const usuarioBD = await Usuario.create(user);

            return res.status(200).json(usuarioBD);
        } catch (error) {
            res.status(400).send({
                message: `Erro ao cadastrar o usuário`,
                error: error
            })
        }
    },
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
