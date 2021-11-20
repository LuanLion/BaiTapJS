"use strict";
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./user")(sequelize, Sequelize.DataTypes);
db.Allcode = require("./allcode")(sequelize, Sequelize.DataTypes);
db.Detail = require("./detail")(sequelize, Sequelize.DataTypes);
db.Schedule = require("./schedule")(sequelize, Sequelize.DataTypes);
db.sequelize.sync().then(() => {
  console.log("yes re-sync");
});
// assosiation doctor with position
db.Allcode.hasMany(db.User, {
  foreignKey: "positionId",
  as: "positionData",
});
db.Allcode.hasMany(db.User, {
  foreignKey: "gender",
  as: "genderData",
});
db.User.belongsTo(db.Allcode, {
  foreignKey: "positionId",
  targetKey: "keyMap",
  as: "positionData",
});
db.User.belongsTo(db.Allcode, {
  foreignKey: "gender",
  targetKey: "keyMap",
  as: "genderData",
});
// assosiation doctor with detail

db.Detail.belongsTo(db.User, {
  foreignKey: "doctorId",
});
db.User.hasOne(db.Detail, {
  foreignKey: "doctorId",
});
// assosiation Allcode with schedule
db.Allcode.hasMany(db.Schedule, {
  foreignKey: "timeType",
  as: "timeTypeData",
});
db.Schedule.belongsTo(db.Allcode, {
  foreignKey: "timeType",
  targetKey: "keyMap",
  as: "timeTypeData",
});

module.exports = db;
