'use strict';

module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define("Interesting", {
        category:{
            field: "category",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        }
    });
        
    return Category;
}