const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        progress:{
            type: DataTypes.ENUM('todo', 'in-progress', 'completed'),
            defaultValue: 'todo',
            allowNull: false
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'task',
    }
);

module.exports = Task;