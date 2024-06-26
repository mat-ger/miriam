import React from "react";
import styles from "./teaser-nav.module.css";
import { Dictionary } from "../../dictionaries/dictionaries";
import Link from "next/link";
import Image from "next/image";
import { Section } from "../section/section";
import { basePath } from "../util";

export const TeaserNav: React.FC<{
  offersNav: Dictionary["home"]["offersNav"];
}> = ({ offersNav }) => {
  return (
    <Section>
      <div className={`${styles.bigBox} ${styles.greyBackground}`} id="offer">
        <h2>{offersNav.headline}</h2>
        <ul className={`${styles.offerNav} ${styles.bigBoxContent}`}>
          {offersNav.items.map((item) => (
            <Link key={item.title} href={`#${item.title}`}>
              <div className={styles.offerItemWrapper}>
                <Image
                  src={`${basePath}${item.image}`}
                  alt={item.imageAlt}
                  className={styles.offerNavImage}
                  width={164}
                  height={164}
                />
                <li>{item.title}</li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};
