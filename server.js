import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, pos, status, msg } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HR Team" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "HR Update - Job Application",
      text: msg,
      html: `<p>${msg.replace(/\n/g, "<br>")}</p>`,
    });

    res.json({ success: true, message: "Email Sent Successfully!" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
