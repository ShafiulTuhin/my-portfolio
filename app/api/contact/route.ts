import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is missing in environment variables");
}

const resend = new Resend(apiKey);

type ContactBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request): Promise<Response> {
  try {
    const body: ContactBody = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const cleanEmail = email.trim();

    if (!cleanEmail.includes("@")) {
      return Response.json(
        { success: false, message: "Invalid email" },
        { status: 400 },
      );
    }

    // 1. EMAIL TO YOU
    const me = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tuhin6488@gmail.com",
      replyTo: cleanEmail,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${cleanEmail}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("EMAIL TO ME:", me);

    // 2. AUTO REPLY (⚠️ WILL ONLY WORK IN PRODUCTION MODE WITH VERIFIED DOMAIN)
    // const reply = await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: cleanEmail,
    //   subject: "Thanks for contacting me!",
    //   html: `
    //     <h2>Message Received ✅</h2>
    //     <p>Hello ${name},</p>
    //     <p>I received your message successfully.</p>
    //     <p>I will get back to you soon.</p>
    //     <br />
    //     <p>— Md Shafiul Azam</p>
    //   `,
    // });

    // console.log("AUTO REPLY:", reply);

    return Response.json(
      { success: true, message: "Sent successfully" },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("FULL ERROR:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
