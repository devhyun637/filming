'use strict';

module.exports = function (sequelize, DataTypes) {
    const UserImage = sequelize.define("UserImage", {
        userid:{
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        profileImage:{
            field: "profileImage",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "UserImage"
        });
    return UserImage;
}