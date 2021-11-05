import db from "../models/index";

let getTOPdoctor = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctor = await db.User.findAll({
        limit: limitInput,
        where: { roleId: "R2" },
        order: [["id", "DESC"]],
        attributes: {
          exclude: ["password"],
        },

        include: [
          {
            model: db.Allcode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errcode: 0,
        doctor,
      });
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};
let getAlldoctor = (idDoctor) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctor;
      if (idDoctor === "All") {
        doctor = await db.User.findAll({
          where: { roleId: "R2" },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      if (idDoctor && idDoctor !== "All") {
        doctor = await db.User.findOne({
          where: { id: idDoctor },
        });
      }
      resolve({
        errcode: 0,
        message: "information doctor success",
        doctor,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getTOPdoctor: getTOPdoctor,
  getAlldoctor: getAlldoctor,
};
