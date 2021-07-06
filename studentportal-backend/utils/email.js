const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create a transporter

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    post: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //Define the email options
  const mailOptions = {
    from: 'Sahil Gupta <test@geeknote.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //   html:
  };

  //Actually send the email with nodemailer
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
