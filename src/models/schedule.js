"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init(
    {
      cunrrentNumber: Sequelize.INTEGER,
      maxNumber: Sequelize.INTEGER,
      date: Sequelize.DATE,
      // allowNull defaults to true
      timeType: Sequelize.STRING,
      // allowNull defaults to true
      doctorId: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
