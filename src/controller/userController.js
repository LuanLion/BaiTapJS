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

module.exports = {
  handleLoginApi: handleLoginApi,
};
