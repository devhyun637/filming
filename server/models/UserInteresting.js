'use strict';

module.exports = function (sequelize, DataTypes) {
    const UserInteresting = sequelize.define("UserInteresting", {
        userId:{
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        interId:{
            field: "interId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        }
    });
        
    return UserInteresting;
}