import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "SIMPLE Barbershop w Poznaniu — 3 lokalizacje (Bukowska, Marcelin, Katowicka). Ocena 5.0 z ponad 14 700 opinii. Czynne 7 dni w tygodniu 9:00–21:00. Umów wizytę online.";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplebarber.pl"),
  title: "SIMPLE Barbershop Poznań — Konkretne strzyżenie. Zero zbędnych słów.",
  description,
  keywords: [
    "barbershop Poznań",
    "fryzjer męski w Poznaniu",
    "strzyżenie męskie Poznań",
    "strzyżenie brody Poznań",
    "SIMPLE Barbershop",
  ],
  openGraph: {
    title: "SIMPLE Barbershop Poznań",
    siteName: "SIMPLE Barbershop",
    description,
    type: "website",
    url: "https://simplebarber.pl/",
    locale: "pl_PL",
    alternateLocale: ["en_US"],
    images: ["/assets/images/hero-barbershop.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/images/favicons/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/images/favicons/apple.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
