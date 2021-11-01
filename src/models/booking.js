"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      statusId: Sequelize.STRING,
      doctorId: Sequelize.INTEGER,
      patientId: Sequelize.INTEGER,
      date: Sequelize.DATE,
      timeType: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
