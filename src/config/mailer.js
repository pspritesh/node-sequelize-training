const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: process.env.MAILER_API_KEY
  }
}))

exports.sendMail = (to, from, subject, html) => {
  return transporter.sendMail({
    to: to,
    from: from,
    subject: subject,
    html: html
  })
}
