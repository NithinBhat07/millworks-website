"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ enquiryType }: { enquiryType: "business" | "investor" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      message: String(data.get("message") || ""),
      enquiryType,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-sm border border-[var(--color-border)] bg-[var(--color-paper)] p-6 text-sm text-[var(--color-graphite)]">
        Thank you — your enquiry has been sent. Our team will respond shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Field label="Full name" name="name" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Company (optional)" name="company" autoComplete="organization" />
      <div>
        <label htmlFor={`${enquiryType}-message`} className="block text-sm font-medium text-[var(--color-ink)]">
          Message
        </label>
        <textarea
          id={`${enquiryType}-message`}
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-sm border border-[var(--color-border)] px-3 py-2 text-sm focus:border-[var(--color-accent)]"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-sm border border-[var(--color-error)]/30 bg-[var(--color-error)]/5 px-4 py-3 text-sm text-[var(--color-error)]">
          {errorMessage}
        </p>
      )}

      <p className="text-xs text-[var(--color-mist)]">
        By submitting this form you agree to be contacted about your enquiry. We do not share your details with
        third parties.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-graphite)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[var(--color-ink)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-sm border border-[var(--color-border)] px-3 py-2 text-sm focus:border-[var(--color-accent)]"
      />
    </div>
  );
}
