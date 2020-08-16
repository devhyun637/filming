'use strict';

module.exports = function (sequelize, DataTypes) {
    const Company = sequelize.define("Company", {
        companyImage:{
            field: "companyImage",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        intro:{
            field: "intro",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        companyName:{
            field: "companyName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        companyAddress:{
            field: "companyAddress",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        site:{
            field: "site",
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
        category:{//회사 분야
            field: "category",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        portfolio:{
            field: "portfolio",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "Company"
        });
    return Company;
}