import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { Options } from 'nodemailer/lib/mailer';
import ContactEmail from '@/emails/contactMail';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailProps {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: SendEmailProps) {
  const emailHtml = render(ContactEmail({ name, email, message }));

  const mailOptions:Options = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: `Nova mensagem de contato de ${name}`,
    html: await emailHtml,
    text: message,
  };

  return await transporter.sendMail(mailOptions);
}
