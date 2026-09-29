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
  {
    slug: "adma-magazine-2026",
    title: "ADMA Magazine",
    issue: "2026 Edition",
    description:
      "Magazine of the Automotive and Diesel Merchants Association, covering industry news, market analysis, and featured advertisers.",
    pageCount: 86,
    accent: "#2e3192",
  },
  {
    slug: "tobacco-year-planner-tsa-2026-27",
    title: "Tobacco Year Planner — TSA Edition",
    issue: "2026/27 Season",
    description:
      "Wall-chart year planner for the tobacco growing season, TSA-branded edition.",
    pageCount: 1,
    accent: "#2e3192",
  },
  {
    slug: "tobacco-year-planner-cp-chemical-2026-27",
    title: "Tobacco Year Planner — CP Chemical Edition",
    issue: "2026/27 Season",
    description:
      "Wall-chart year planner for the tobacco growing season, CP Chemical-branded edition.",
    pageCount: 1,
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
