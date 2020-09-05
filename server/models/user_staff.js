'use strict';

module.exports = function (sequelize, DataTypes) {
    const user_staff = sequelize.define("user_staff", {
        userId:{
            field: "userId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },
        staffId:{
            field: "staffId",
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "user_staff"
        });
    return user_staff;
}