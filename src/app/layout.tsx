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
    images: [{ url: ogImageUrl, width: 500, height: 500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediaserv | Advertising & Marketing",
    description:
      "Mediaserv is an advertising and marketing agency delivering publications, campaigns, and brand experiences.",
    images: [ogImageUrl],
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
