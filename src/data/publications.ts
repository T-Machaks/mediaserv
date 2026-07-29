export type Publication = {
  slug: string;
  title: string;
  issue: string;
  description: string;
  pageCount: number;
  accent: string;
};

export const publications: Publication[] = [
  {
    slug: "tobacco-today-q2-2026",
    title: "Tobacco Today",
    issue: "2026 Second Quarter, Issue 60",
    description:
      "Quarterly trade magazine covering industry news, market analysis, and featured advertisers.",
    pageCount: 8,
    accent: "#2e3192",
  },
  {
    slug: "minecon-2026-guide",
    title: "MineCon Event Guide",
    issue: "2026 Edition",
    description:
      "Official exhibitor and attendee guide for the MineCon conference and exhibition.",
    pageCount: 6,
    accent: "#29abe2",
  },
];

export function getPublication(slug: string) {
  return publications.find((publication) => publication.slug === slug);
}
