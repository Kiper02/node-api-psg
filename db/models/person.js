import { DataTypes } from "sequelize";
import sequelize from "../db.js";


const Person = sequelize.define('Person', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    data: {type: DataTypes.JSON, allowNull: true}
}, {
    freezeTableName: true
})


export default Person