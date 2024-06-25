import db from "../model/index.js";
const Perfil = db.perfil;
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
      initialPerfil();
      console.log('[INFO] Drop e resincroiniza o db...');
    })
    .catch((error) => {
      console.log(`[ERROR] Erro ao sincronizar o db: ${error}`);
  });

  export function initialPerfil() {
    Perfil.create({
      id: 1,
      nome: "usuario",
      codigo:"USER"
    });
  
    Perfil.create({
      id: 2,
      nome: "moderador",
      codigo:"MOD"
    });
  
    Perfil.create({
      id: 3,
      nome: "admin",
      codigo:"ADM"
    });
  }