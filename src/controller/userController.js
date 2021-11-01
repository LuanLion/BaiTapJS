import { sync } from "../models/user";
import userservice from "../service/userservice";
var User = require("../models/user");

let handleLoginApi = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errcode: 1,
      message: "username and password error",
      user: userData.user,
    });
  }
  let userData = await userservice.handleUserLogin(email, password);
  console.log(userData);
  return res.status(200).json({
    errcode: userData.errcode,
    message: userData.message,
    user: userData.user,
  });
};
let handlegetAlluser = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errcode: 1,
      message: "id error",
    });
  } else {
    let users = await userservice.getAlluser(id);
    return res.status(200).json({
      errcode: 0,
      message: "true",
      users,
    });
  }
};
let handlecreateOneuser = async (req, res) => {
  let data = req.body;

  if (!data) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  } else {
    let users = await userservice.createOneuser(data);
    return res.status(200).json(users);
  }
};

let handledeleteOneuser = async (req, res) => {
  let userId = req.query.id;
  if (!userId) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
  let deleteuser = await userservice.deleteOneuser(userId);
  return res.status(200).json({
    deleteuser,
  });
};
let handleupdateOneuser = async (req, res) => {
  let newuser = req.body;
  if (!newuser) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
  let updateuser = await userservice.updateOneuser(newuser);
  return res.status(200).json(updateuser);
};
let handlegetAllcode = async (req, res) => {
  try {
    let data = await userservice.getAllcode(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
module.exports = {
  handleLoginApi: handleLoginApi,
  handlegetAlluser: handlegetAlluser,
  handlecreateOneuser: handlecreateOneuser,
  //
  handledeleteOneuser: handledeleteOneuser,
  handleupdateOneuser: handleupdateOneuser,
  handlegetAllcode: handlegetAllcode,
};
