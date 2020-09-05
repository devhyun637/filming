'use strict';

module.exports = function (sequelize, DataTypes) {
    const user_actor = sequelize.define("user_actor", {
        userId:{
            field: "userId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },
        actorId:{
            field: "actorId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "user_actor"
        });
    return user_actor;
}