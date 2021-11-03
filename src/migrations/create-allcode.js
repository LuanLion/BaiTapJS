"use strict";
import luandb from "../config/connectDB";
const { Sequelize } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Allcodes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      keyMap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valueEn: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
      valueVi: {
        type: Sequelize.STRING,
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
    luandb.sync();
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Allcodes");
  },
};
