require("dotenv").config();
const express = require("express");
// Boddy parser to see body of the text input from the contact form
const bodyParser = require("body-parser");
// Use node mailer so can send email's
const nodemailer = require("nodemailer");
const app = express();
// Port server is on
const port = 3000;
// Get email to send to
const EMAIL_SEND = process.env.EMAIL_SEND;
// Get one time password for gmail to send email
const PASS = process.env.GMAIL_PASSWORD;

app.get("/", (req, res) => {});

app.get("/contact", (req, res) => {
  res.send("Contact");
});
// Test for git

app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/contact", urlencodedParser, function (req, res) {
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.message);
  const main = async () => {
    const transporter = nodemailer.createTransport({
      // host: "https://outlook.office365.com/EWS/Exchange.asmx",
      // port: 443,
      // secure: false, // true for 465, false for other ports
      service: "gmail",
      auth: {
        user: "ykosiner@gmail.com", // generated ethereal user
        pass: PASS, // generated ethereal password
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Yoni Kosiner" <ykosiner@gmail.com>', // sender address
      to: EMAIL_SEND, // list of receivers
      subject: `Contact from life cover in trust from: ${req.body.name}`, // Subject line
      text: `
Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Message: ${req.body.message}`,
    });

    console.log("Message sent: %s", info.messageId);
  };
  main();
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
