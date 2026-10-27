"use server";

import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const clean = (v: FormDataEntryValue | null, max = 2000) =>
  String(v ?? "").trim().slice(0, max);

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field
  if (clean(formData.get("company_website"))) {
    return { status: "success", message: "Thanks - we will be in touch." };
  }

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 200);
  const company = clean(formData.get("company"), 120);
  const budget = clean(formData.get("budget"), 60);
  const timeline = clean(formData.get("timeline"), 60);
  const message = clean(formData.get("message"), 5000);

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "Tell us a little more about the project.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing - submission not emailed:", { name, email, company, budget, timeline, message });
    return {
      status: "error",
      message: `The form is not connected yet. Please email ${CONTACT_EMAIL} directly.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Drova Labs <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Budget: ${budget || "-"}`,
        `Timeline: ${timeline || "-"}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) throw new Error(error.message);
    return { status: "success", message: "Thanks - we will reply within one business day." };
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      status: "error",
      message: `Something went wrong. Please email ${CONTACT_EMAIL} directly.`,
    };
  }
}
