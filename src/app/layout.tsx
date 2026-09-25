import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mediaserv.co.zw";
const ogImageUrl = `${siteUrl}/logo-square.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mediaserv | Advertising & Marketing",
  description:
    "Mediaserv is an advertising and marketing agency delivering publications, campaigns, and brand experiences.",
  openGraph: {
    title: "Mediaserv | Advertising & Marketing",
    description:
      "Mediaserv is an advertising and marketing agency delivering publications, campaigns, and brand experiences.",
    url: siteUrl,
    siteName: "Mediaserv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaserv | Advertising & Marketing",
    description:
      "Mediaserv is an advertising and marketing agency delivering publications, campaigns, and brand experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/*
        Rendered directly (not via the `metadata` export) because this
        project's build pipeline was regenerating a stale file-convention
        og:image route pointing at localhost even with the source file
        deleted. React 19 hoists meta/title/link tags rendered anywhere
        in the tree into <head>, bypassing that broken resolution path.
      */}
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta name="twitter:image" content={ogImageUrl} />
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
