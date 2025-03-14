import { NextRequest, NextResponse } from "next/server";
import { MailDataRequired, MailService } from "@sendgrid/mail";
import { createAssessment } from "@/services/recaptcha";
export const POST = async (req: NextRequest) => {
  try {
    
    const body = await req.json();
    const score = await createAssessment(body.token);
    if(!score || score < 0.5) return NextResponse.json({success: false, message: "Error submitting application" });
    const sgMail = new MailService();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg: MailDataRequired = {
      to: process.env.MAIL_TO!,
      from: process.env.MAIL_FROM!,
      subject: "New Guess",
      html: `
        <img src="${process.env.PUBLIC_HOST}/logo.png" alt="Bluehouse Logo" width="140" height="40" class="object-contain" />
        <h1>New Guess</h1>
        <p><strong>User guessed:</strong> ${body.guess}</p>
        `
    };
    sgMail.send(msg);
    return NextResponse.json({success: true, message: "Thank you for applying! We will get back to you soon." });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({success: false, message: "Error submitting application" });
  }
}