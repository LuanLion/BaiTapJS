"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Detail.init(
    {
      contentHTML: Sequelize.TEXT("long"),
      contentMarkdown: Sequelize.TEXT("long"),
      description: Sequelize.TEXT("long"),
      doctorId: Sequelize.INTEGER,
      specialtyId: Sequelize.INTEGER,
      clinicId: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Detail",
    }
  );
  return Detail;
};
