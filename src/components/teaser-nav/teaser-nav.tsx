import React from "react";
import styles from "./teaser-nav.module.css";
import Link from "next/link";
import { ResponsiveImage } from "@/components/image/responsive-image";
import { Section } from "../section/section";

export const TeaserNav: React.FC<{
  headline: string;
  items: { title: string; image: string; imageAlt: string }[];
}> = ({ headline, items }) => {
  return (
    <Section>
      <div className={`${styles.bigBox} ${styles.greyBackground}`} id="offer">
        <h2>{headline}</h2>
        <ul className={`${styles.offerNav} ${styles.bigBoxContent}`}>
          {items.map((item) => (
            <li key={item.title}>
              <Link href={`#${item.title}`}>
                <div className={styles.offerItemWrapper}>
                  <ResponsiveImage
                    src={item.image}
                    alt={item.imageAlt}
                    className={styles.offerNavImage}
                    width={164}
                    height={164}
                    sizes="164px"
                  />
                  <span>{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
