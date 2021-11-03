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
module.exports = {
  handleTOPdoctor: handleTOPdoctor,
};
