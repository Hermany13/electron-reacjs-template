import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection';

class UsersModel extends Model {
  public id!: number;
  public username!: number;
  public name!: string;
  public password: string;
}

UsersModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false
  }
},
  {
    tableName: 'users',
    sequelize: sequelize
  }
);

sequelize.sync();

export default UsersModel;