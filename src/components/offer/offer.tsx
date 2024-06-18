import React from "react";
import { Dictionary } from "../../dictionaries/dictionaries";
import styles from "./offer.module.css";
import Image from "next/image";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";
import { basePath } from "../util";

export const Offers: React.FC<{ offers: Dictionary["home"]["offers"] }> = ({
  offers,
}) => {
  return offers.map((offer) => (
    <Section key={offer.name} id={offer.banner.headline}>
      <Image
        src={`${basePath}${offer.banner.image}`}
        alt="psychotherapie Bild"
        fill
        className={styles.imageContainer}
        quality={100}
      />

      <div className={styles.content}>
        <div className={styles.smallBox}>
          <h1>{offer.banner.headline}</h1>
          {offer.banner.sublines.map((subline) => (
            <p key={subline}>{subline}</p>
          ))}
        </div>
        <BigBox>
          {offer.categories.map((category) => (
            <div key={category.headline} className={styles.categoryContainer}>
              <h2>{category.headline}</h2>
              {category.text &&
                category.text.map((item) => <p key={item}>{item}</p>)}
            </div>
          ))}
        </BigBox>
      </div>
    </Section>
  ));
};
