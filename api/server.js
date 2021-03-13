require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var nodemailer = require("nodemailer");

const app = express();
const apiPort = 5000;
const runningInDEV =
  JSON.stringify(process.env.ENVIRONMENT) !== JSON.stringify("prod");
runningInDEV && console.log("Running in development mode...");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

function sendEmail(user, pass, to, data) {
  const { name, email, subject, message } = data;
  const mail = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const mailOptions = {
    from: email,
    to,
    subject,
    text: `${message} \n\n- ${name}`,
  };

  mail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

app.post("/sendEmail", (req, res) => {
  res.send("POST request received.");
  if (runningInDEV) {
    sendEmail(
      process.env.EMAIL_API,
      process.env.EMAIL_API_PASS,
      process.env.EMAIL_API_DESTINATION,
      req.body.data
    );
  } else {
    sendEmail(EMAIL_API, EMAIL_API_PASS, EMAIL_API_DESTINATION, req.body.data);
  }
});

app.use((_req, res, _next) => {
  res.status(404).send("Sorry, cannot find that.");
});

app.use((err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: "500 Error" });
  } else {
    next(err);
  }
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
