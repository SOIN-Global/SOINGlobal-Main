import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY) || '';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, telegram, subject, message } = body;

    const data = await resend.emails.send({
      from: "Soin Contact <onboarding@resend.dev>", // Change if using your own domain
      to: "support@soinglobal.com", // Destination email
      subject: "New Contact Form Submission",
      html: `
        <div>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telegram:</strong> ${telegram}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error });
  }
}
//test
