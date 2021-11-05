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
      let data = await userservice.getAlldoctor(id);
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
module.exports = {
  handleTOPdoctor: handleTOPdoctor,
  handlegetAlldoctor: handlegetAlldoctor,
};
