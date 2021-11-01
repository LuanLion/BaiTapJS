"use strict";

const { Sequelize } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Schedules", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      cunrrentNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        // allowNull defaults to true
      },
      timeType: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
      doctorId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Schedules");
  },
};
