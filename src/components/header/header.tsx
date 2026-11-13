"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/site";
import styles from "./header.module.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav role="navigation" className={styles.nav}>
        <div className={styles.menuToggle}>
          <button type="button" className={styles.toggle} aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
          <ul id="main-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} onClick={() => setOpen(false)}>
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
              <a href={`tel:${site.telephoneHref}`}>{site.telephone}</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
