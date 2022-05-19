const nodemailer = require("nodemailer");
const NODEMAILER_USER = process.env.NODEMAILER_USER;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;
const NODEMAILER_PORT = process.env.NODEMAILER_PORT;
const NODEMAILER_HOST = process.env.NODEMAILER_HOST;

const transport = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD,
  },
});

module.exports = transport;
