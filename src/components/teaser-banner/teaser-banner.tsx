import React from "react";
import styles from "./teaser-banner.module.css";
import { Dictionary } from "../../dictionaries/dictionaries";
import { ImageBg } from "../image/image";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";

export const TeaserBanner: React.FC<{
  welcome: Dictionary["home"]["welcome"];
}> = ({ welcome }) => {
  return (
    <Section>
      <ImageBg src="banner" />
      <div className={styles.content}>
        <div className={styles.smallBox}>
          <h1>{welcome.banner.headline}</h1>
          {welcome.banner.sublines.map((subline) => (
            <p key={subline}>{subline}</p>
          ))}
        </div>
        {welcome.title && welcome.text && (
          <BigBox>
            <h2>{welcome.title}</h2>
            <p>{welcome.text}</p>
          </BigBox>
        )}
      </div>
    </Section>
  );
};
