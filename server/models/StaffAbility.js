'use strict';

module.exports = function (sequelize, DataTypes) {
    const StaffAbility = sequelize.define("StaffAbility", {
        abilityName:{
            field: "abilityName",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "StaffAbility"
        });
    return StaffAbility;
}