import { sequelize } from "./database.js";


export const connection = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Conectado com Sucesso...');
      } catch (error) {
        console.error('Conexão do DataBase inacessível:', error);
      }
}
