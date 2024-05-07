
import { Sequelize } from "sequelize";

const sequelize = new Sequelize ('postgresql://dripstore_db_owner:YJevD5IGE2Qr@ep-ancient-mouse-a5cwwz70.us-east-2.aws.neon.tech/dripstore_db?sslmode=require')

export const connection = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Conectado com Sucesso...');
      } catch (error) {
        console.error('Conexão do DataBase inacessível:', error);
      }
}
