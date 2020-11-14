'use strict';

module.exports = function (sequelize, DataTypes) {
    const Recruit = sequelize.define("Recruit", {
        tittle:{
            field: "tittle",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        tittle:{
            field: "tittle",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        tittle_id:{
            field: "tittle_id",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
    });
        
    return Recruit;
}