import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { publications, getPublicationPageSrc } from "@/data/publications";

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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publications.map((publication) => (
          <Link
            key={publication.slug}
            href={`/publications/${publication.slug}`}
            className="group overflow-hidden rounded-lg border border-black/5 shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-72 w-full overflow-hidden bg-black/5">
              <Image
                src={getPublicationPageSrc(publication.slug, 1)}
                alt={`${publication.title} cover`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide" style={{ color: publication.accent }}>
                {publication.issue}
              </p>
              <h2 className="text-xl font-semibold text-brand-navy-dark">{publication.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{publication.description}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-navy group-hover:underline">
                Read flipbook →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
