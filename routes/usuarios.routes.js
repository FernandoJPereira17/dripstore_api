import express from 'express'
import { usuarioService } from '../backend/services/usuarios.services.js';

const routerUsuario = express.Router()

    routerUsuario
    .get('/', usuarioService.getAll)
    .get('/:id', usuarioService.getById)
    
export default routerUsuario;

// export const usuarioRoute = (app) =>{
    
//     const route = express.Router()

//     route.get('/', usuarioService.getAll);
//     route.get('/:id', usuarioService.getById);

//     app.use('/api/usuario', route);

// }
