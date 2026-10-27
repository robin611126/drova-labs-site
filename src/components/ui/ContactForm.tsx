"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { status: "idle", message: "" };

const BUDGETS = ["Under $5k", "$5k - $15k", "$15k - $50k", "$50k+", "Not sure yet"];
const TIMELINES = ["ASAP", "2-4 weeks", "1-3 months", "Flexible"];

const field =
  "w-full rounded-sm border border-hairline bg-ink-raised/60 px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-sm border border-accent/50 bg-accent/10 p-10">
        <p className="eyebrow text-accent">Message sent</p>
        <p className="mt-4 text-[22px] tracking-tight">{state.message}</p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form id="contact-form" action={action} noValidate className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <Field label="Name" error={err.name}>
        <input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </Field>
      <Field label="Email" error={err.email}>
        <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
      </Field>
      <Field label="Company">
        <input id="contact-company" name="company" autoComplete="organization" placeholder="Optional" className={field} />
      </Field>
      <Field label="Budget">
        <select id="contact-budget" name="budget" defaultValue="" className={field}>
          <option value="" disabled>Select a range</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>
      <Field label="Timeline" className="sm:col-span-2">
        <div className="flex flex-wrap gap-2">
          {TIMELINES.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="timeline" value={t} className="peer sr-only" />
              <span className="inline-block rounded-full border border-hairline px-4 py-2 text-[13px] text-white/70 transition-colors peer-checked:border-accent peer-checked:bg-accent/15 peer-checked:text-white peer-focus-visible:border-accent hover:border-white/30">
                {t}
              </span>
            </label>
          ))}
        </div>
      </Field>
      <Field label="Project brief" error={err.message} className="sm:col-span-2">
        <textarea id="contact-message" name="message" required rows={5} placeholder="What are you launching, and when does it need to be live?" className={`${field} resize-y`} />
      </Field>

      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          id="contact-submit"
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-8 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        {state.status === "error" && (
          <p role="alert" className="text-[13px] text-red-400">{state.message}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="eyebrow">{label}</span>
      {children}
      {error && <span className="text-[12px] text-red-400">{error}</span>}
    </div>
  );
}
