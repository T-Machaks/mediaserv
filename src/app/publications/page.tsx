import Link from "next/link";
import type { Metadata } from "next";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications | Mediaserv",
  description: "Browse Mediaserv publications as interactive flipbooks.",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-brand-navy-dark">Publications</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Browse our magazines and guides below. Each publication opens as an interactive
        flipbook — click or drag a corner to turn the page.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {publications.map((publication) => (
          <Link
            key={publication.slug}
            href={`/publications/${publication.slug}`}
            className="group overflow-hidden rounded-lg border border-black/5 shadow-sm transition hover:shadow-md"
          >
            <div
              className="flex h-40 flex-col justify-end p-5 text-white"
              style={{
                background: `linear-gradient(135deg, ${publication.accent}, #1b1b3a)`,
              }}
            >
              <p className="text-xs uppercase tracking-wide text-white/70">
                {publication.issue}
              </p>
              <h2 className="text-xl font-semibold">{publication.title}</h2>
            </div>
            <div className="flex items-center justify-between p-5">
              <p className="text-sm text-foreground/70">{publication.description}</p>
            </div>
            <div className="px-5 pb-5">
              <span className="text-sm font-semibold text-brand-navy group-hover:underline">
                Read flipbook →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
