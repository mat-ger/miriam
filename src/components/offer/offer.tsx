import React from "react";
import { Dictionary } from "../../dictionaries/dictionaries";
import styles from "./offer.module.css";
import Image from "next/image";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";
import { basePath } from "../util";
import { RemoteMdxComponent } from "../markdown-renderer/markdown-renderer";
import { ImageBg } from "../image/image";

export const Offers: React.FC<{ offers: Dictionary["home"]["offers"] }> = ({
  offers,
}) => {
  return offers.map((offer) => (
    <>
      <Section key={offer.name} id={offer.banner.headline}>
        <ImageBg
          src={`${basePath}${offer.banner.image}`}
          alt="psychotherapie Bild"
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
                  category.text.map((item) => (
                    <RemoteMdxComponent textKey={item} key={item} />
                  ))}
              </div>
            ))}
          </BigBox>
        </div>
      </Section>
    </>
  ));
};
