"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <Image src="/logo.jpg" alt="Mediaserv" width={140} height={45} priority className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-brand-navy" : "text-foreground/70 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-brand-navy-dark" />
            <span className="h-0.5 w-5 bg-brand-navy-dark" />
            <span className="h-0.5 w-5 bg-brand-navy-dark" />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-black/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
