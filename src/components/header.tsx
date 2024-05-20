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
  );
};
