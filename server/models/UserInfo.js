'use strict';

module.exports = function (sequelize, DataTypes) {
    const UserInfo = sequelize.define("UserInfo", {
        introduce:{
            field: "introduce",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        height: {
            field: "height",
            type: DataTypes.INTEGER,
            allowNull: true
        },
        weight: {
            field: "weight",
            type: DataTypes.INTEGER,
            allowNull: true
        },
        biography:{
            field: "biography",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        ppt:{
            field: "ppt",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        portfolio: {
            field: "portfolio",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        SNS: {
            field: "SNS",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "UserInfo"
        });
    return UserInfo;
}