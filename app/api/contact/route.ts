import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "send.one.com",
      port: 587, // 587 for STARTTLS (use 465 with secure: true if needed)
      secure: false, // false for STARTTLS (587), true for SSL (465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fields = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Inquiry Type: ${data.formType}`,
    ];
    
    // Only add these fields if they exist and are relevant for the selected form type
    if (data.formType !== "General" && data.company) fields.push(`Company: ${data.company}`);
    if (data.formType === "Licensing" && data.purpose) fields.push(`Purpose: ${data.purpose}`);
    if (data.formType === "Licensing" && data.licenseType) fields.push(`License Type: ${data.licenseType}`);
    if (data.formType === "Custom Photography" && data.budget) fields.push(`Budget: ${data.budget}`);
    if (data.formType === "Custom Photography" && data.projectDescription) fields.push(`Project Description: ${data.projectDescription}`);
    if (data.message) fields.push(`Message: ${data.message}`);
    
    // Create the final email text
    const emailText = fields.join("\n");
    
    const mailOptions = {
      from: `"${data.name}" <jakob@jakobdahlin.com>`,
      to: "jakob@jakobdahlin.com",
      subject: `New Inquiry: ${data.formType}`,
      text: emailText, // Use the dynamically generated text
      replyTo: data.email,
    };
    

    // Send email and wait for completion
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info);

    return NextResponse.json({ success: true, message: "Email sent!" }); // ✅ Corrected success response

  } catch (error) {
    console.error("Error sending email:", error);
  
    // Ensure error is treated as an object with a message
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
  
    return NextResponse.json(
      { success: false, message: "Error sending email", error: errorMessage },
      { status: 500 }
    );
  }
}
