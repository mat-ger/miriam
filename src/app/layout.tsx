import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.css";

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
      <body className={inter.className}>
        <header className={styles.header}>
          <nav role="navigation" className={styles.nav}>
            <div className={styles.menuToggle}>
              <input type="checkbox" className={styles.input} />
              <span />
              <span />
              <span />
              <ul className={styles.menu}>
                <li className={`${styles.textLogo} ${styles.spaces}`}>
                  <Link href="/">Miriam Gertz</Link>
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/conditions">Rahmenbedingungen</Link>
                </li>
                <li>
                  <Link href="/about">Über mich</Link>
                </li>
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
                <li className={styles.spaces}>+43 660 712 54 04</li>
              </ul>
            </div>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
