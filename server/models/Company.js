"use strict";

module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define(
    "Company",
    {
      companyImage: {
        field: "companyImage",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      introduce: {
        field: "introduce",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      companyName: {
        field: "companyName",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      companyAddress: {
        field: "companyAddress",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      site: {
        field: "site",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      filmography: {
        field: "filmography",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      fields: {
        //회사 분야
        field: "category",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      portfolio1: {
        field: "portfolio1",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      portfolio2: {
        field: "portfolio2",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
      portfolio3: {
        field: "portfolio3",
        type: DataTypes.STRING(255),
        unique: false,
        allowNull: true,
      },
    },
    {
      underscored: true,
      freezeTalbeName: true,
      tableName: "Company",
    }
  );
  return Company;
};
