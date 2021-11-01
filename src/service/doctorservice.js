const { decodeBase64 } = require("bcryptjs");
import db from "../models/index";

let getTOPdoctor = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dotor = await db.User;
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getTOPdoctor: getTOPdoctor,
};
