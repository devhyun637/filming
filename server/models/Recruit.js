'use strict';

module.exports = function (sequelize, DataTypes) {
    const Recruit = sequelize.define("Recruit", {
        tittle:{
            field: "tittle",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        filmName:{
            field: "filmName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        tittle_id:{
            field: "tittle_id",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        period:{
            field: "period",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        field:{
            field: "field",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        pay:{
            field: "pay",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        manager:{
            field: "manager",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        deadline:{
            field: "deadline",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        discript:{
            field: "discript",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        }
    });
        
    return Recruit;
}