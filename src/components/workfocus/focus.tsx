import React from "react";
import styles from "./focus.module.css";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";

export const FocusModule: React.FC<{
  headline: string;
  items: string[];
  text: string;
}> = ({ headline, items, text }) => {
  return (
    <Section>
      <BigBox>
        <h2>{headline}</h2>
        <ul className={styles.workFocusLayout}>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>{text}</p>
      </BigBox>
    </Section>
  );
};
