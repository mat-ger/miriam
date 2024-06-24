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
  title: "Miriam Gertz - Psychotherapeutin, Wien",
  description:
    "Hier entsteht die Beschreibung für die Webseite von Miriam Gertz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        <Header />

        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
