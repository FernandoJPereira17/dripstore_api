import { DataTypes } from 'sequelize';
import { connection } from '../bd/bd.js';
import { sequelize } from '../bd/database.js';

export const Usuario = sequelize.define ('usuarios', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_cadastro: {
        //field: 'createdAt', --opcional...
        type: DataTypes.DATE,
        allowNull: false
    },
    data_atualizacao: {
        //field: 'createdAt', --opcional...
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true, // Add this line to enable the default timestamp columns
    createdAt: 'data_cadastro', // Map 'createdAt' to 'data_cadastro'
    updatedAt: false // Disable 'updatedAt' column if you don't need it
},
{
    timestamps: true, // Add this line to enable the default timestamp columns
    createdAt: 'data_atualizacao', // Map 'createdAt' to 'data_cadastro'
    updatedAt: false // Disable 'updatedAt' column if you don't need it
}
);

