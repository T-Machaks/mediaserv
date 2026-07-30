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
    title: "Zimbabwe Tobacco Today",
    issue: "2026 Second Quarter, Issue 60",
    description:
      "Magazine of the Zimbabwe Tobacco Association, covering industry news, market analysis, and featured advertisers.",
    pageCount: 32,
    accent: "#2e3192",
  },
];

export function getPublication(slug: string) {
  return publications.find((publication) => publication.slug === slug);
}

export function getPublicationPageSrc(slug: string, pageNumber: number) {
  const padded = String(pageNumber).padStart(2, "0");
  return `/publications/${slug}/page-${padded}.jpg`;
}
