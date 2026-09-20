import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Mediaserv",
  description: "Get in touch with the Mediaserv team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-brand-navy-dark">Contact Us</h1>
      <p className="mt-2 max-w-xl text-foreground/70">
        Have a question about a campaign, publication, or partnership? Send us a message and
        we&apos;ll be in touch.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-brand-navy">Email</p>
            <p className="text-sm text-foreground/70">enquiries@mediaserv.co.zw</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-navy">Phone</p>
            <p className="text-sm text-foreground/70">+263 242 336668</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-navy">Address</p>
            <p className="text-sm text-foreground/70">Harare, Zimbabwe</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
