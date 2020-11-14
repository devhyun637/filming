'use strict';
var models = require('../models');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        userId: {
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        salt: {
            field: "salt",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name: {
            field: "name",
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        },
        age: {
            field: "age",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            field: "gender",
            type: DataTypes.INTEGER,
            allowNull: true
        },
        address: {
            field: "address",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            field: "email",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        telNum: {
            field: "telNum",
            type: DataTypes.STRING(255),
            allowNull: false
        },//관심분야 추가 (중복허용 / 체크박스)
        role: {
            field: "role",
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "User"
        });
    User.associate = function(models){
        models.User.hasOne(models.UserInfo, {foreignKey: 'fk_userId'});
        models.User.hasOne(models.Company, {foreignKey: 'fk_userId'});
    };
    return User;
}