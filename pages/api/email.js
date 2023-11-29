import { render } from '@react-email/render'
import WelcomeTemplate from '../../emails/EmailTemplate'
import nodemailer from 'nodemailer'

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
  port: parseInt(process.env.SMTP_PORT || '2525'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'user',
    pass: process.env.SMTP_PASSWORD || 'password',
  },
}

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })
  const { email, subject, message } = req.body

  await transporter.sendMail({
    from: email,
    to: 'neptune.navo@gmail.com',
    subject,
    html: render(WelcomeTemplate(email, subject, message)),
  })
  return res.status(200).json({ message: 'Email sent successfully' })
}

export default async function handler(req, res) {
  await sendEmail(req, res)
}
