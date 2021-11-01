"use strict";
const { Model, Sequelize } = require("sequelize");
import luandb from "../config/connectDB";
module.exports = (sequelize, Sequelize) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
        instanceof: false,
      });
      this.hasMany(models.User, {
        foreignKey: "gender",
        as: "genderData",
        instanceof: false,
      });
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
