import React from "react";
import { Dictionary } from "../../dictionaries/dictionaries";
import styles from "./focus.module.css";
import { Section } from "../section/section";
import { BigBox } from "../big-box/big-box";

export const FocusModule: React.FC<{
  workFocus: Dictionary["home"]["workFocus"];
}> = ({ workFocus }) => {
  return (
    <Section>
      <BigBox>
        <h2>{workFocus.headline}</h2>
        <ul className={styles.workFocusLayout}>
          {workFocus.items &&
            workFocus.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>{workFocus.text}</p>
      </BigBox>
    </Section>
  );
};
