"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(fullname: string, email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.USER_MAILER!, // e.g. "Noel <onboarding@resend.dev>"
      to: process.env.USER_TO!, // your inbox
      subject: `${fullname} sent you a message`,
      html: `
        <h1>Message from ${fullname}</h1>
        <p>Email: ${email}</p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Email service error, please try again later. 🤖" };
    }

    return {
      success: "Message sent successfully, I'll get back to you soon. 🤖",
    };
  } catch (err) {
    console.error(err);
    return {
      error: "Something went wrong with sending the email. 🤖",
    };
  }
}

export async function sendMessageServerAction(
  previousState: any,
  formData: FormData
) {
  // Validate inputs
  const fullname = (formData.get("fullname") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (fullname?.length <= 2) {
    return {
      fullnameError:
        "Wow, your name seems to be in stealth mode! 😄 How about unleashing the full version this time?",
    };
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      emailError:
        "Oops! Looks like your email just threw a curveball at my regex skills 😅. Let’s give it another shot—what do you say?",
    };
  }

  if (message?.length <= 10) {
    return {
      messageError: "That’s a bit brief! 😅 Let it flow—share the whole story!",
    };
  }

  // Try sending with Resend
  const response = await sendEmail(fullname, email, message);

  if (response.success) {
    return response;
  }
  return {
    error: response.error ?? "Something went wrong, please try again later. 🤖",
  };
}
