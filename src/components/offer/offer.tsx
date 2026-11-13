import type { PropsWithChildren } from "react";
import styles from "./offer.module.css";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";
import { ImageBg } from "../image/image";

export function Offer({ headline, image, children }: PropsWithChildren<{
  headline: string;
  image: string;
}>) {
  return (
    <Section id={headline}>
      <ImageBg src={image} alt="" />
      <div className={styles.content}>
        <div className={styles.smallBox}>
          <h2 className={styles.offerHeadline}>{headline}</h2>
        </div>
        <BigBox>{children}</BigBox>
      </div>
    </Section>
  );
}

export function OfferCategory({ headline, children }: PropsWithChildren<{
  headline: string;
}>) {
  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.categoryHeadline}>{headline}</h3>
      <div className={styles.richText}>{children}</div>
    </div>
  );
}