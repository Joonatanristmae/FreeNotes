import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

/**
 * Self-hosted fonts (next/font/local) — avoids Next.js 16 + Turbopack
 * Google Fonts build flakes: "queries have exactly one entry" /
 * Can't resolve '@vercel/turbopack-next/internal/font/google/font'.
 */
const display = localFont({
  src: "./fonts/fraunces-latin.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

const body = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  variable: "--font-body",
  weight: "200 900",
  display: "swap",
});

const slab = localFont({
  src: "./fonts/roboto-slab.woff2",
  variable: "--font-slab",
  weight: "400 600",
  display: "swap",
});

const ptSerif = localFont({
  src: [
    {
      path: "./fonts/pt-serif-400-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/pt-serif-700-latin.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pt-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Student notebook advertising`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${slab.variable} ${ptSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
