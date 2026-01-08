import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export async function POST(req: Request) {
    try {
        let { firstname, lastname, email, message } = await req.json();
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'New Contact Form Submission',
            text:
                `First Name: ${firstname}\n` + 
                `Last Name: ${lastname}\n` +
                `Email: ${email}\n` +
                `Message: ${message}`,
        });
        return NextResponse.json({ status: 'success' });
    } catch (error) {
        return NextResponse.json({ status: 'error', error: (error as Error).message });
    }
}