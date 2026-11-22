import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "SIMPLE Barbershop – strzyżenie włosów i brody w Poznaniu";
const description =
  "Zobacz cięcia barberów SIMPLE, poznaj usługi i wybierz jeden z trzech salonów w Poznaniu. Zarezerwuj wizytę w Booksy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplebarber.pl"),
  title,
  description,
  keywords: ["barbershop Poznań", "fryzjer męski w Poznaniu", "strzyżenie męskie", "strzyżenie brody"],
  openGraph: {
    title,
    siteName: "SIMPLE Barbershop",
    description,
    type: "website",
    url: "https://simplebarber.pl/",
    locale: "pl_PL",
    alternateLocale: ["en_US"],
    images: ["/assets/images/IMG_6503.jpg"],
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
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
