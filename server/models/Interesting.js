'use strict';

module.exports = function (sequelize, DataTypes) {
    const Interesting = sequelize.define("Interesting", {
        interesting:{
            field: "interesting",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        }
    });
        
    return Interesting;
}