"use strict";

const { Sequelize } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Histories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      patienId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      doctocId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      desciption: {
        type: Sequelize.TEXT,
      },
      files: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Histories");
  },
};
