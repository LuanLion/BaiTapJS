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
module.exports = {
  getTOPdoctor: getTOPdoctor,
};
