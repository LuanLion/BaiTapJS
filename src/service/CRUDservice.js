const bcrypt = require("bcryptjs");
var User = require("../models/user");
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let haspassword = await hashUserPassword(data.password);
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
      resolve("create succeful");
    } catch (e) {
      reject(e);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (e) {
      reject(e);
    }
  });
};
let getfinall = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};
let editCRUD = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve("?????");
      }
    } catch (e) {
      reject(e);
    }
  });
};
let edited_userById = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({
        where: { id: data.id },
      });
      if (user) {
        user.firstName = data.firstname;
        user.lastName = data.lastname;
        user.address = data.address;
        user.gander = data.gender;
        user.roleId = data.roleId;
        await user.save();
        let alluser = await User.findAll();
        resolve(alluser);
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};
let delete_CRUDbyId = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({
        where: { id: data.id },
      });
      if (user) {
        await user.destroy();
        let alluser = await User.findAll();
        resolve(alluser);
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getfinall: getfinall,
  editCRUD: editCRUD,
  edited_userById: edited_userById,
  delete_CRUDbyId: delete_CRUDbyId,
};
