'use strict';

module.exports = function (sequelize, DataTypes) {
    const ActorAbility = sequelize.define("ActorAbility", {
        abilityName:{
            field: "abilityName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "ActorAbility"
        });
    return ActorAbility;
}