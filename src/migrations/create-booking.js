"use strict";

const { Sequelize } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bookings", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      statusId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      patientId: {
        type: Sequelize.INTEGER,
        // allowNull defaults to true
      },
      date: {
        type: Sequelize.DATE,
        // allowNull defaults to true
      },
      timeType: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Bookings");
  },
};
