import { sequelize } from "./database.js";

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado com Sucesso...");
  } catch (error) {
    console.error("Conexão do DataBase inacessível:", error);
  }
};

//Sincroniza a aplicação com o banco usando o sequelize
sequelize.sync({ force: true })
    .then(() => {
      console.log('[INFO] Drop e resincroiniza o db...');
    })
    .catch((error) => {
      console.log(`[ERROR] Erro ao sincronizar o db: ${error}`);
  });
