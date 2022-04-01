import {Model, DataTypes } from 'sequelize';
import { database } from '../config/database.js';

export class UserModel extends Model { }

UserModel.init ( {

    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.INTEGER
    },
    socket_id:{
        type:  DataTypes.STRING

    },
    online: {
        type: DataTypes.BOOLEAN
    }



}, {
    sequelize: database,
    tableName: 'users',
    timestamps: false,

});