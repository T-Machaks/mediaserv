import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublication, publications } from "@/data/publications";
import Flipbook from "@/components/Flipbook";

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = getPublication(slug);

  if (!publication) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/publications" className="text-sm font-medium text-brand-navy hover:underline">
        ← Back to publications
      </Link>

      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs uppercase tracking-wide text-foreground/50">{publication.issue}</p>
        <h1 className="text-3xl font-bold text-brand-navy-dark">{publication.title}</h1>
        <p className="mt-1 max-w-2xl text-foreground/70">{publication.description}</p>
      </div>

      <div className="mt-10">
        <Flipbook publication={publication} />
      </div>
    </div>
  );
}
