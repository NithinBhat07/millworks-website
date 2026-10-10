import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  enquiryType: "business" | "investor";
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const company = (body.company ?? "").trim();
  const enquiryType = body.enquiryType === "investor" ? "investor" : "business";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !toAddress) {
    // No email provider configured in this environment. Fail clearly rather than
    // pretending the enquiry was delivered.
    return NextResponse.json(
      {
        error:
          "The enquiry form is not yet connected to an email service in this environment. Please email us directly instead.",
      },
      { status: 503 },
    );
  }

  const recipient = enquiryType === "investor" ? process.env.INVESTOR_TO_EMAIL || toAddress : toAddress;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Millworks Website <enquiries@millworksindia.com>",
      to: [recipient],
      reply_to: email,
      subject: `[Website ${enquiryType === "investor" ? "Investor" : "Business"} Enquiry] ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nType: ${enquiryType}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send your enquiry. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
