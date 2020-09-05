'use strict';

module.exports = function (sequelize, DataTypes) {
    const user_filmo = sequelize.define("user_filmo", {
        userId:{
            field: "movieName",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },
        filmoId:{
            field: "filmoId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "user_filmo"
        });
    return user_filmo;
}