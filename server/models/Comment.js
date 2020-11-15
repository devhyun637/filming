'use strict';

module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define("Recruit", {
        userId:{
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        commentId:{
            field: "commentId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        comment:{
            field: "comment",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
    });
        
    return Comment;
}