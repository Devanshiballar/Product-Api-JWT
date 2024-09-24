const nodemailer = require("nodemailer");

const trasporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "devanshiballar1611@gmail.com",
    pass: "hlzh hytt ejvd qnsm",
  },
});

console.log(trasporter);
async function sendEmail(options) {

const mailOptions = {
            from: process.env.SMPT_MAIL,
            to: options.email,
            subject: options.subject,
            text: options.message,
        };
  await trasporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent mail");
    }
  });
}
module.exports = sendEmail;
