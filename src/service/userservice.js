const bcrypt = require("bcryptjs");
const { sync } = require("../models/user");
var User = require("../models/user");

const salt = bcrypt.genSaltSync(10);
let CRUDservice = require("./CRUDservice");
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await User.findOne({
          attributes: ["email", "roleId", "password"],
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
      let user = await User.findOne({
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
      let user;
      if (Iduser === "All") {
        user = await User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (Iduser && Iduser !== "All") {
        user = await User.findOne({
          where: { id: Iduser },
        });
      }
      resolve(user);
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
        await User.create({
          email: data.email,
          password: haspassword,
          firstName: data.firstname,
          lastName: data.lastname,
          address: data.address,
          gender: data.gender === "1" ? true : false,
          roleId: data.roleId,
          phonenumber: data.phonenumber,
          positionId: null,
          image: null,
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
module.exports = {
  handleUserLogin: handleUserLogin,
  getAlluser: getAlluser,
  createOneuser: createOneuser,
};
