import db from "../models/index";
require("dotenv").config();
import emailservice from "./emailservice";
import _ from "lodash";
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

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
let checkUserId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Detail.findOne({
        where: { doctorId: id },
        raw: true,
      });
      if (user) resolve(true);
      else resolve(false);
    } catch (e) {
      reject(e);
    }
  });
};
let saveInfoDoctor = (doctor) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (doctor.contentHTML == null || !doctor.description == null) {
        resolve({
          errcode: 1,
          message: "Fill in more information! Please",
        });
      }
      let check = await checkUserId(doctor.doctorId);
      if (check === true) {
        resolve({
          errcode: 1,
          message: "informantion doctor already exits",
        });
      } else {
        await db.Detail.create({
          contentHTML: doctor.contentHTML,
          contentMarkdown: doctor.contentMarkdown,
          description: doctor.description,
          doctorId: doctor.doctorId,
          priceId: doctor.priceId,
          provinceId: doctor.provinceId,
          paymentId: doctor.paymentId,
          addressClinic: doctor.addressClinic,
          nameClinic: doctor.nameClinic,
          count: doctor.count,
          expert: doctor.expert,
          effective: doctor.effective,
        });
        resolve({
          errcode: 0,
          message: "information doctor save success",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let getInfoDoctor = (idDoctor) => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctor = await db.User.findOne({
        where: { id: idDoctor },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: db.Detail,
            include: [
              {
                model: db.Allcode,
                as: "priceData",
                attributes: ["valueEn", "valueVi"],
              },
              {
                model: db.Allcode,
                as: "paymentData",
                attributes: ["valueEn", "valueVi"],
              },
              {
                model: db.Allcode,
                as: "provinceData",
                attributes: ["valueEn", "valueVi"],
              },
            ],
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
    }
  });
};
let saveScheduleDoctor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let schedule = data.arrSchedule;
      if (!schedule.doctorId || schedule.date || !schedule.timeType) {
        resolve({
          errcode: 1,
          message: "you may select before save",
        });
      }
      console.log("date: ", schedule[0].date);
      if (schedule && schedule.length > 0) {
        schedule = schedule.map((item) => {
          item.date = new Date(item.date).getTime();
          item.maxNumber = MAX_NUMBER_SCHEDULE;
          return item;
        });
      }

      let exsiting = await db.Schedule.findAll({
        where: { doctorId: +schedule[0].doctorId, date: schedule[0].date },
        attributes: ["timeType", "date", "doctorId", "maxNumber", "id"],
        raw: true,
      });

      if (exsiting && exsiting.length > 0) {
        console.log("success");
        exsiting = exsiting.map((item) => {
          item.date = new Date(item.date).getTime();
          return item;
        });
      }
      //compare different
      let different1 = _.differenceWith(schedule, exsiting, (a, b) => {
        return a.timeType === b.timeType && a.date === b.date;
      });

      if (different1 && different1.length > 0) {
        await db.Schedule.bulkCreate(different1);
      }
      let different2 = _.differenceWith(exsiting, schedule, (a, b) => {
        return a.timeType === b.timeType && a.date === b.date;
      });
      if (different2 && different2.length > 0) {
        different2.map(async (item) => {
          let user = await db.Schedule.findOne({
            where: { id: item.id },
          });
          if (user) {
            await user.destroy();
          }
        });
      }
      resolve({
        errcode: 0,
        message: "success",
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getAllschedule = (doctorId, date) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doctorId || !date) {
        resolve({
          errcode: 1,
          message: "fail",
        });
        console.log(`date ${date}, doctorId ${doctorId}`);
      } else {
        date = new Date(date).getTime();
        let data = await db.Schedule.findAll({
          where: {
            doctorId: doctorId,
            date: date,
          },
          attributes: {
            exclude: ["maxNumber"],
          },
          include: [
            {
              model: db.Allcode,
              as: "timeTypeData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: true,
          nest: true,
        });
        resolve({
          errcode: 0,
          data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let sentBookingemail = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // if (!data.useDate || !data.useName || !data.useEmail || !data.useTime) {
      //   resolve({
      //     errcode: 1,
      //     message: "fail",
      //   });
      // } else {
      console.log(data);
      await emailservice.sentBooking(data.userEmail);

      resolve({
        errcode: 0,
        data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getTOPdoctor: getTOPdoctor,
  getAlldoctor: getAlldoctor,
  saveInfoDoctor: saveInfoDoctor,
  getInfoDoctor: getInfoDoctor,
  saveScheduleDoctor: saveScheduleDoctor,
  getAllschedule: getAllschedule,
  sentBookingemail: sentBookingemail,
};
