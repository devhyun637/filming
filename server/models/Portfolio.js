'use strict';

module.exports = function (sequelize, DataTypes) {
    const Portfolio = sequelize.define("Portfolio", {
        
        userId:{//유저 ID
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: true
        },
        portfolio:{//포트폴리오
            field: "portfolio",
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