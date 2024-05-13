import { DataTypes } from 'sequelize';
import { connection } from '../bd/bd.js';
import { sequelize } from '../bd/database.js';


export const Produto = sequelize.define('produtos', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desconto: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        DefaultValue: true
    },
    categoria: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    data_cadastro: {
        type: DataTypes.DATE,
        allowNull: false
    }

});
