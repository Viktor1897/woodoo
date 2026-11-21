import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description =
  "Profesjonalny salon dla mężczyzn. Strzyżenie męskie, strzyżenie brody. Niskie ceny. Darmowy parking dla klientów. Umów się na wizytę już teraz!";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplebarber.pl"),
  title: "SIMPLE - NAJLEPSZY BARBERSHOP W POZNANIU",
  description,
  keywords: ["barbershop Poznań", "fryzjer męski w Poznaniu", "strzyżenie męskie", "strzyżenie brody"],
  openGraph: {
    title: "Najlepszy fryzjer męski w Poznaniu",
    siteName: "Najlepszy Barbershop w Poznaniu",
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
