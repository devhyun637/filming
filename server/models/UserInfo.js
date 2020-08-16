'use strict';

module.exports = function (sequelize, DataTypes) {
    const UserInfo = sequelize.define("UserInfo", {
        introduce:{
            field: "introduce",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        size: {//어떻게 정하지(우선 s,m,l로 1 2 3)
            field: "size",
            type: DataTypes.INTEGER,
            allowNull: true
        },
        biography:{
            field: "biography",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        filmography:{
            field: "filmography",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        ability:{
            field: "ability",
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