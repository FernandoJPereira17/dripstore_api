import { sequelize } from "../bd/database.js";
import { Produto } from "./produto.model.js";
import { Usuario } from "./usuario.model.js";


// sequelize.authenticate().then(()=>{
//     console.log('[INFO] Connection has...');
// }).catch(error)=>{
//     console.error('[ERROR] Unable to...')
// });

    const db = {};

    // const Produto = produtoModel(sequelize);
    // const Usuario = usuarioModel(sequelize);
    // const Perfil = perfilModel(sequelize);

    db.produto = Produto
    db.usuario = Usuario
    // db.perfil = Perfil

    // db.perfil.belongsToMany(db, )


export default db;
