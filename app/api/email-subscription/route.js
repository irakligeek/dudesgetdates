"use server";
import { Resend } from "resend";

export async function POST(request) {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  //   const data = await res.json();

  const { email } = await request.json();

  if (!email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const results = await resend.contacts.create({
        email: email,
        firstName: "",
        lastName: "",
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
      const data = {
        message: "Email subscription was successful",
      };
      return Response.json(data);
  } catch (error) {
    const errorData = {
      message: "Email subscription failed",
      error: error,
    };
    return Response.json(errorData, { status: 400 });
  }
  
}
