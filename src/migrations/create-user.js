"use strict";
import luandb from "../config/connectDB";
const { Sequelize } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: Sequelize.STRING,
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
      address: Sequelize.STRING,
      gender: Sequelize.STRING,
      roleId: Sequelize.STRING,
      phonenumber: Sequelize.STRING,
      positionId: Sequelize.STRING,
      image: Sequelize.STRING,
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
    await queryInterface.dropTable("Users");
  },
};
