"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-black/5 bg-black/[.02] p-6 text-brand-navy-dark">
        <p className="font-semibold">Thanks for reaching out.</p>
        <p className="mt-1 text-sm text-foreground/70">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground/80">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-md border border-black/10 px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-fit rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-dark"
      >
        Send Message
      </button>
    </form>
  );
}
