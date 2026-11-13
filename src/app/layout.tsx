import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Header } from "../components/header/header";
import { site } from "@/site";

const openSans = Open_Sans({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "700"],
});

const description = "Systemische Psychotherapie für Einzelpersonen, Paare und Familien sowie Schwangerschaftsberatung in 1160 Wien bei Miriam Gertz.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Miriam Gertz - Psychotherapeutin, Wien",
    template: "%s | Miriam Gertz",
  },
  description,
  robots: "index, follow",
  authors: { name: site.name },
  appleWebApp: true,
  applicationName: "Miriam Gertz",
  openGraph: {
    title: "Miriam Gertz - Psychotherapeutin, Wien",
    description,
    type: "website",
    locale: "de_AT",
    url: `${site.url}/`,
    images: [
      {
        url: `${site.url}/miriam-gertz_1024.jpg`,
        width: 682,
        height: 1024,
        alt: "Miriam Gertz - Psychotherapeutin, Wien",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${site.url}/#praxis`,
      name: `Praxis ${site.name}`,
      description: "Systemische Psychotherapie und Beratung in Wien",
      url: site.url,
      image: `${site.url}/praxis_1024.jpg`,
      telephone: site.telephone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        addressLocality: site.city,
        postalCode: site.postalCode,
        addressCountry: "AT",
      },
      founder: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.title,
      image: `${site.url}/miriam-gertz_1024.jpg`,
      url: `${site.url}/about`,
      worksFor: { "@id": `${site.url}/#praxis` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className={openSans.className}>
        <Header />

        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
