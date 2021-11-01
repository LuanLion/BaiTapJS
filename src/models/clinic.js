"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      name: Sequelize.STRING,
      address: Sequelize.STRING,
      description: Sequelize.STRING,
      image: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Clinic",
    }
  );
  return Clinic;
};
