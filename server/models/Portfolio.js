'use strict';

module.exports = function (sequelize, DataTypes) {
    const Portfolio = sequelize.define("Portfolio", {
        
        userId:{//유저 ID
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        Portfolio:{//포트폴리오
            field: "Portfolio",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "Portfolio"
        });
    return Portfolio;
}