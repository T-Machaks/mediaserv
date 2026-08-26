import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/5 bg-brand-navy-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="" width={198} height={198} className="h-9 w-9 object-contain" />
          <div>
            <p className="text-lg font-semibold">mediaserv</p>
            <p className="mt-1 text-sm text-white/60">Advertising &amp; Marketing</p>
          </div>
        </div>

        <nav className="flex gap-6 text-sm text-white/70">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/publications" className="hover:text-white">Publications</Link>
          <Link href="/contact" className="hover:text-white">Contact Us</Link>
        </nav>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        {`© ${year} Mediaserv Advertising & Marketing. All rights reserved.`}
      </div>
    </footer>
  );
}
