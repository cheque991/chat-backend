import { Model,DataTypes } from "sequelize";
import  {database} from "../config/database.js";


export class MessageModel extends Model {}

MessageModel.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        comment: "null",
        autoIncrement:true
    },
    conversation_uuid: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    msg: {
        type: DataTypes.STRING(255),
        allowNull:true
    },
    created_at: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
},{
    sequelize: database ,
    tableName: 'messages',
    timestamps: false,
});
