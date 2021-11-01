import doctorservice from "../service/doctorservice";

let handleTOPdoctor = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let doctor = await doctorservice.getTOPdoctor(+limit);
    return res.status(200).json(doctor);
  } catch (e) {
    return res.status(200).json({
      errcode: 1,
      message: "request connection failed",
    });
  }
};
module.exports = {
  handleTOPdoctor: handleTOPdoctor,
};
