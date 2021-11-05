"use strict";

const { Sequelize } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Details", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      contentHTML: {
        type: Sequelize.TEXT("long"),
      },

      contentMarkdown: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        // allowNull defaults to true
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        // allowNull defaults to true
      },
      clinicId: {
        type: Sequelize.INTEGER,
        // allowNull defaults to true
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
    await queryInterface.dropTable("Details");
  },
};
