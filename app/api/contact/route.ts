import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const recipientEmail = "noa.serodon@gmail.com"

    try {
      await resend.emails.send({
        from: "noreply@resend.dev",
        to: recipientEmail,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><em>Sent at: ${new Date().toISOString()}</em></p>
        `,
      })
    } catch (emailError) {
      console.error("Resend error:", emailError)
      // Continue even if email fails, return success to user
    }

    console.log("Contact Form Submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      sendTo: recipientEmail,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your message" }, { status: 500 })
  }
}
