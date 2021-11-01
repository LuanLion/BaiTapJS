"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init(
    {
      patienId: Sequelize.INTEGER,
      doctocId: Sequelize.INTEGER,
      desciption: Sequelize.TEXT,
      files: Sequelize.TEXT,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
