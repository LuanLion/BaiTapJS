"use strict";
const { Model } = require("sequelize");
import db from "../config/connectDB";

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Allcode, {
      //   foreignKey: "positionId",
      //   targetKey: "keyMap",
      //   as: "positionData",
      // });
      // User.belongsTo(models.Allcode, {
      //   foreignKey: "gender",
      //   targetKey: "keyMap",
      //   as: "genderData",
      // });
    }
  }
  User.init(
    {
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      address: Sequelize.STRING,
      gender: Sequelize.STRING,
      roleId: Sequelize.STRING,
      phonenumber: Sequelize.STRING,
      positionId: Sequelize.STRING,
      image: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
