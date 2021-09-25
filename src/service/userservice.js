const bcrypt = require("bcryptjs");
var User = require("../models/user");

const salt = bcrypt.genSaltSync(10);
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
module.exports = {
  handleUserLogin: handleUserLogin,
};
