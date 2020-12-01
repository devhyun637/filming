'use strict';

module.exports = function (sequelize, DataTypes) {
    const CompanyCategory = sequelize.define("Interesting", {
        companyId:{
            field: "companyId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        categoryId:{
            field: "categoryId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTalbeName: true,
        tableName: "CompanyCategory"
    });
        
    return CompanyCategory;
}