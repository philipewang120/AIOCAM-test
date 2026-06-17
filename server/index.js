import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = [
  "https://aiocam-test.vercel.app",
];
const resend = new Resend(process.env.RESEND_API_KEY);

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
   

    await resend.emails.send({
      from: "AIOCAM Website <onboarding@resend.dev>",
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
    let emailContent = "";
    Object.keys(req.body).forEach(key => {
      emailContent += `${key}: ${req.body[key]}\n`;
    });

    await resend.emails.send({
      from: "AIOCAM Website <onboarding@resend.dev>",
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
