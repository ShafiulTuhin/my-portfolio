import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const { name, email, message } = body;

    if (!email) {
      return Response.json(
        { success: false, message: "Email missing" },
        { status: 400 },
      );
    }

    const me = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tuhin6488@gmail.com",
      subject: `New Message from ${name}`,
      html: `<p>${message}</p>`,
    });

    console.log("To me:", me);

    const reply = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting me!",
      html: `<p>Hello ${name}, I got your message.</p>`,
    });

    console.log("Auto reply:", reply);

    return Response.json({
      success: true,
      message: "Sent successfully",
    });
  } catch (error) {
    console.log("ERROR:", error);

    return Response.json(
      { success: false, message: "Failed" },
      { status: 500 },
    );
  }
}
