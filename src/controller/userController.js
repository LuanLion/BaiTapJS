import userservice from "../service/userservice";
var User = require("../models/user");
let handleLogin = async (req, res) => {
  let email = req.query.email;
  let password = req.query.password;

  if (!email || !password) {
    return res.status(500).json({
      errcode: 1,
      message: "missing inputs parmeter",
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
  handleLogin: handleLogin,
};
