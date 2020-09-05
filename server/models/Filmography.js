'use strict';

module.exports = function (sequelize, DataTypes) {
    const Filmography = sequelize.define("Filmography", {
        movieName:{
            field: "movieName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        year:{
            field: "year",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },
        nation:{
            field: "nation",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        movieName:{
            field: "movieName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        genre:{
            field: "genre",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        role:{//주연, 보조 등
            field: "role",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        roleName:{//연주 역, 경관1 역 등
            field: "roleName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        Image:{
            field: "Image",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        score:{//평점
            field: "score",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "Filmography"
        });
    return Filmography;
}