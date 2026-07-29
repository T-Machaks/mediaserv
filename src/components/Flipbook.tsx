"use client";

import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import type { Publication } from "@/data/publications";

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; dark?: boolean }>(
  function Page({ children, dark }, ref) {
    return (
      <div
        ref={ref}
        className={`flex h-full w-full items-center justify-center border border-black/10 p-8 text-center ${
          dark ? "bg-brand-navy-dark text-white" : "bg-white text-brand-navy-dark"
        }`}
      >
        {children}
      </div>
    );
  }
);

export default function Flipbook({ publication }: { publication: Publication }) {
  const innerPages = Array.from({ length: publication.pageCount }, (_, index) => index + 1);

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
      <Page dark>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">{publication.issue}</p>
          <h2 className="mt-2 text-2xl font-bold">{publication.title}</h2>
        </div>
      </Page>

      {innerPages.map((pageNumber) => (
        <Page key={pageNumber}>
          <div>
            <p className="text-sm text-foreground/50">{publication.title}</p>
            <p className="mt-4 text-4xl font-bold text-brand-navy">{pageNumber}</p>
            <p className="mt-4 text-sm text-foreground/60">Page content coming soon.</p>
          </div>
        </Page>
      ))}

      <Page dark>
        <div>
          <p className="text-lg font-semibold">mediaserv</p>
          <p className="mt-1 text-sm text-white/60">Advertising &amp; Marketing</p>
        </div>
      </Page>
    </HTMLFlipBook>
  );
}
