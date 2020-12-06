'use strict';

module.exports = function (sequelize, DataTypes) {
    const Recruit = sequelize.define("Recruit", {
        //구인 게시글 제목
        tittle:{
            field: "tittle",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //작품명
        filmName:{
            field: "filmName",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //게시글 id
        tittle_id:{
            field: "tittle_id",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        //제작 기간(촬영횟수)
        period:{
            field: "period",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //장르(ex 멜로, 음악영화, 단편영화 등)
        field:{
            field: "field",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //수당
        pay:{
            field: "pay",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //담당자
        manager:{
            field: "manager",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //모집 마감기한
        deadline:{
            field: "deadline",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        },
        //모집글 설명
        discript:{
            field: "discript",
            type: DataTypes.STRING(255),
            unique: false,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTalbeName: true,
        tableName: "Recruit"
    });
        
    return Recruit;
}