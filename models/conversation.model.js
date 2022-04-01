import { Model,DataTypes } from "sequelize";
import  {database} from "../config/database.js";


export class ConversationModel extends Model {}

ConversationModel.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false,
    },
    from_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    to_id:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    uuid: {
        type: DataTypes.STRING(255),
        allowNull:true
    }



},{
    sequelize: database ,
    tableName: 'conversation',
    timestamps: false,
});
