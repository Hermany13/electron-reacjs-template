// Import libs
import { Sequelize } from "sequelize";
import { resolve } from 'path';
import * as sqlite3 from 'sqlite3';

// create sequelize instance
const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: resolve(__dirname, 'database.sqlite')
});

export default sequelize;