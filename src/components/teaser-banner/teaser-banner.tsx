import React from "react";
import styles from "./teaser-banner.module.css";
import { ImageBg } from "../image/image";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";

export const TeaserBanner: React.FC<{
  image: string;
  headline: string;
  sublines: string[];
  title?: string;
  text?: string;
}> = ({ image, headline, sublines, title, text }) => {
  return (
    <Section>
      <ImageBg src={image} alt="" priority />
      <div className={styles.content}>
        <div className={styles.smallBox}>
          <h1>{headline}</h1>
          {sublines.map((subline) => (
            <p key={subline}>{subline}</p>
          ))}
        </div>
        {title && text && (
          <BigBox>
            <h2>{title}</h2>
            <p>{text}</p>
          </BigBox>
        )}
      </div>
    </Section>
  );
};
