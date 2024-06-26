import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Header } from "../components/header/header";

const inter = Open_Sans({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Miriam Gertz - Psychotherapeutin in Ausbildung unter Supervision, Wien",
  description: "Systemische Psychotherapie in 1170 und 1130 Wien",
  robots: "index, follow",
  authors: { name: "Miriam Gertz" },
  keywords: [
    "Psychotherapie",
    "Systemische Therapie",
    "Wien",
    "1170",
    "1130",
    "Psychotherapeutin in Ausbildung unter Supervision",
    "Miriam Gertz",
    "Familientherapie",
    "Schwangerschaftsberatung",
    "Systemische Psychotherapie",
    "Systemische Paartherapie",
  ],
  appleWebApp: true,
  applicationName: "Miriam Gertz",
  openGraph: {
    title:
      "Miriam Gertz - Psychotherapeutin in Ausbildung unter Supervision, Wien",
    description: "Systemische Psychotherapie in 1170 und 1130 Wien",
    type: "website",
    locale: "de_AT",
    url: "https://www.gertz.at",
    images: [
      {
        url: "https://www.gertz.at/miriam-gertz_1024.jpg",
        width: 1024,
        height: 682,
        alt: "Miriam Gertz - Psychotherapeutin in Ausbildung unter Supervision, Wien",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Miriam Gertz",
  description: "Systemische Psychotherapie in 1170 und 1130 Wien",
  url: "https://www.gertz.at",
  image: "https://www.gertz.at/miriam-gertz_1024.jpg",
  telephone: "+43 670 3542978",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rosensteingasse 82/2",
    addressLocality: "Wien",
    postalCode: "1170",
    addressCountry: "AT",
  },
  medicalSpecialty: "Psychotherapy",
  areaServed: "Vienna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Header />

        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
