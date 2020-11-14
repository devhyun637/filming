'use strict';

module.exports = function (sequelize, DataTypes) {
    const UserInfo = sequelize.define("UserInfo", {
        englishName:{
            field: "englishName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        nickName:{
            field: "nickName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        introduce:{
            field: "introduce",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        height: {
            field: "height",
            type: DataTypes.INTEGER,
            allowNull: false
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
        filmography: {
            field: "filmography",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        SNS_facebook: {
            field: "SNS_facebook",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        SNS_instagram: {
            field: "SNS_instagram",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        SNS_twitter: {
            field: "SNS_twitter",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        SNS_youtube: {
            field: "SNS_youtube",
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