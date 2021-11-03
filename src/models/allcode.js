"use strict";
const { Model, Sequelize } = require("sequelize");
import db from "./index";

module.exports = (sequelize, Sequelize) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // db.Allcode.hasMany(models.User, {
      //   foreignKey: "positionId",
      //   as: "positionData",
      // });
      // db.Allcode.hasMany(models.User, {
      //   foreignKey: "gender",
      //   as: "genderData",
      // });
    }
  }
  Allcode.init(
    {
      keyMap: Sequelize.STRING,
      type: Sequelize.STRING,
      valueEn: Sequelize.STRING,
      valueVi: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );

  return Allcode;
};
