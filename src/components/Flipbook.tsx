"use client";

import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import type { Publication } from "@/data/publications";
import { getPublicationPageSrc } from "@/data/publications";

const Page = forwardRef<HTMLDivElement, { src: string; alt: string }>(function Page(
  { src, alt },
  ref
) {
  return (
    <div ref={ref} className="h-full w-full bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-contain" loading="lazy" />
    </div>
  );
});

export default function Flipbook({ publication }: { publication: Publication }) {
  const pageNumbers = Array.from({ length: publication.pageCount }, (_, index) => index + 1);

  return (
    <HTMLFlipBook
      width={360}
      height={500}
      size="stretch"
      minWidth={280}
      maxWidth={520}
      minHeight={400}
      maxHeight={720}
      startPage={0}
      drawShadow
      flippingTime={600}
      usePortrait
      startZIndex={0}
      autoSize
      maxShadowOpacity={0.5}
      showCover
      mobileScrollSupport
      clickEventForward
      useMouseEvents
      swipeDistance={30}
      showPageCorners
      disableFlipByClick={false}
      className="mx-auto"
      style={{}}
    >
      {pageNumbers.map((pageNumber) => (
        <Page
          key={pageNumber}
          src={getPublicationPageSrc(publication.slug, pageNumber)}
          alt={`${publication.title} — page ${pageNumber}`}
        />
      ))}
    </HTMLFlipBook>
  );
}
