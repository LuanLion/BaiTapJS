import nodemailer from "nodemailer";

let sentBooking = async (sentEmail) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "luanb1809370@student.ctu.edu.vn", // generated ethereal user
        pass: "0208031020002001", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <luanb1809370@student.ctu.edu.vn>', // sender address
      to: sentEmail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world? toi ten luan b1809370</b>", // html body
    });
    console.log("info: ", info);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sentBooking: sentBooking,
};
