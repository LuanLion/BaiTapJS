const bcrypt = require("bcryptjs");
const { sync } = require("../models/user");
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);
let CRUDservice = require("./CRUDservice");
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: [
            "email",
            "roleId",
            "password",
            "firstName",
            "lastName",
            "id",
            "address",
            "phonenumber",
          ],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password); // true: false
          if (check) {
            userData.errcode = 0;
            userData.message = "Ok";
            delete user.password;
            userData.user = user;
          } else {
            userData.errcode = 4;
            userData.message = "Password error";
          }
        } else {
          userData.errcode = 3;
          userData.message = "User none or username error";
        }
      } else {
        userData.errcode = 2;
        userData.message = "Email error";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
        raw: true,
      });
      if (user) resolve(true);
      else resolve(false);
    } catch (e) {
      reject(e);
    }
  });
};
let getAlluser = (Iduser) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users;
      if (Iduser === "All") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (Iduser && Iduser !== "All") {
        users = await db.User.findOne({
          where: { id: Iduser },
        });
      }
      resolve({
        errcode: 0,
        message: "Al user success",
        users,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let createOneuser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errcode: 1,
          message: "email non-existent",
        });
      } else {
        let haspassword = await CRUDservice.hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: haspassword,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          gender: data.gender,
          roleId: data.roleId,
          phonenumber: data.phonenumber,
          positionId: data.positionId,
          image: data.image,
        });
        resolve({
          errcode: 0,
          message: "create user successful",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let deleteOneuser = (idData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: idData },
      });
      if (user) {
        await user.destroy();
        resolve({
          errcode: 0,
          message: "delete user success",
        });
      } else {
        resolve({
          errcode: 1,
          message: "delete user faild",
        });
      }
    } catch (e) {
      reject({
        errcode: 1,
        message: "connect data faild",
      });
    }
  });
};
let updateOneuser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errcode: 1,
          message: "email non-existent",
        });
      }
      if (user && check === false) {
        user.email = data.email;
        user.firstName = data.firstname;
        user.lastName = data.lastname;
        user.address = data.address;
        user.gander = data.gender;
        user.roleId = data.roleId;
        user.positionId = data.positionId;
        user.image = data.image;
        await user.save();

        resolve({
          errcode: 0,
          message: "Update user success",
        });
      } else {
        resolve({
          errcode: 1,
          message: "Update user faild",
        });
      }
    } catch (e) {
      reject({
        errcode: 1,
        message: "connect update faild",
      });
    }
  });
};
let getAllcode = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (type) {
        let res = {};
        let allcode = await db.Allcode.findAll({
          where: { type: type },
        });
        res.errcode = 0;
        res.data = allcode;
        resolve(res);
      } else {
        resolve({
          errcode: 1,
          message: "missing required ",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
  getAlluser: getAlluser,
  createOneuser: createOneuser,
  deleteOneuser: deleteOneuser,
  updateOneuser: updateOneuser,
  getAllcode: getAllcode,
};
