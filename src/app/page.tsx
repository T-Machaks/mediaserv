import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    title: "Advertising Campaigns",
    description:
      "End-to-end campaign strategy, creative, and media placement across print, digital, and outdoor.",
  },
  {
    title: "Publications",
    description:
      "Magazines, event guides, and promotional materials produced from concept to print-ready and digital editions.",
  },
  {
    title: "Brand & Marketing",
    description:
      "Brand identity, marketing strategy, and partnership packages tailored to your event or organisation.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-cyan text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24">
          <Image
            src="/logo.png"
            alt="Mediaserv"
            width={460}
            height={291}
            className="h-24 w-auto rounded bg-white/95 object-contain px-4 py-3"
            priority
          />
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">
            Advertising &amp; marketing that moves your brand forward.
          </h1>
          <p className="max-w-xl text-lg text-white/85">
            Mediaserv partners with events, publishers, and organisations to plan campaigns,
            produce publications, and build brand presence that gets results.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/publications"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy-dark transition hover:bg-white/90"
            >
              View Publications
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold text-brand-navy-dark">What we do</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-lg border border-black/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-navy">{service.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/[.02] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-navy-dark">
              Ready to work together?
            </h2>
            <p className="mt-1 text-foreground/70">
              Get in touch to discuss your next campaign or publication.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
