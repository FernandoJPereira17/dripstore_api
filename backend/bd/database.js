import { Sequelize } from "sequelize";
import 'dotenv/config.js';

const STRING_CONNECTION = `postgresql://${USER}:${PASS}@${HOST}/${DATABASE}?sslmode=require`;

const HOST = process.env.PGHOST;
const DATABASE = process.env.PGDATABASE;
const USER = process.env.PGUSER;
const PASS = process.env.PGPASSOWORD;



export const sequelize = new Sequelize ();
