"use client";

import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav role="navigation" className={styles.nav}>
        <div className={styles.menuToggle}>
          <input type="checkbox" className={styles.input} />
          <span />
          <span />
          <span />
          <ul className={styles.menu}>
            <li className={`${styles.textLogo} ${styles.spaces}`}>
              <Link href="/">Miriam Gertz, MSc</Link>
            </li>
            <li>
              <Link href="/#offer">Angebote</Link>
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
            <li className={styles.spaces}>
              <a href="tel:+436703542978">+43 670 3542978</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
