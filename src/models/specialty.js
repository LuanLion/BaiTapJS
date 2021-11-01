"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Specialty.init(
    {
      name: Sequelize.STRING,
      image: Sequelize.STRING,
      description: Sequelize.TEXT,
    },
    {
      sequelize,
      modelName: "Specialty",
    }
  );
  return Specialty;
};
