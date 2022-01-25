import doctorservice from "../service/doctorservice";

let handleTOPdoctor = async (req, res) => {
  try {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    let data = await doctorservice.getTOPdoctor(+limit);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
let handlegetAlldoctor = async (req, res) => {
  try {
    let id = req.query.id;
    if (!id) {
      return res.status(200).json({
        errcode: 1,
        message: "id error",
      });
    } else {
      let data = await doctorservice.getAlldoctor(id);
      return res.status(200).json(data);
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
let handleSaveInfodoctor = async (req, res) => {
  try {
    let doctor = req.body;
    if (!doctor) {
      return res.status(200).json({
        errcode: 1,
        message: "id error",
      });
    } else {
      let data = await doctorservice.saveInfoDoctor(doctor);
      return res.status(200).json(data);
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
let handlegetInfodoctor = async (req, res) => {
  try {
    let doctor = req.query.id;
    if (!doctor) {
      return res.status(200).json({
        errcode: 1,
        message: "id error",
      });
    } else {
      let data = await doctorservice.getInfoDoctor(doctor);
      return res.status(200).json(data);
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
let handlesaveScheduledoctor = async (req, res) => {
  try {
    let doctor = req.body;
    if (!doctor) {
      return res.status(200).json({
        errcode: 1,
        message: "id error",
      });
    } else {
      let data = await doctorservice.saveScheduleDoctor(doctor);
      return res.status(200).json(data);
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
let handlegetAllschedule = async (req, res) => {
  try {
    let doctorId = req.query.doctorId;
    let date = req.query.date;
    if (!doctorId || !date) {
      return res.status(200).json({
        errcode: 1,
        message: "id error",
      });
    } else {
      let data = await doctorservice.getAllschedule(doctorId, date);
      return res.status(200).json(data);
    }
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
let handlesentBooking = async (req, res) => {
  try {
    let data = await doctorservice.sentBookingemail(req.body);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
module.exports = {
  handleTOPdoctor: handleTOPdoctor,
  handlegetAlldoctor: handlegetAlldoctor,
  handleSaveInfodoctor: handleSaveInfodoctor,
  handlegetInfodoctor: handlegetInfodoctor,
  handlesaveScheduledoctor: handlesaveScheduledoctor,
  handlegetAllschedule: handlegetAllschedule,
  handlesentBooking: handlesentBooking,
};
