import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://aiocam-website.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONTACT
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: "diobebelle@gmail.com",
      subject: "New Contact Message - AIOCAM Website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.json({ status: "success" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error" });
  }
});

// VOLUNTEER
app.post("/volunteer", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    let emailContent = "";
    Object.keys(req.body).forEach(key => {
      emailContent += `${key}: ${req.body[key]}\n`;
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "diobebelle@gmail.com",
      subject: "New Volunteer Sign Up - AIOCAM Website",
      text: emailContent
    });

    res.json({ status: "success" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});