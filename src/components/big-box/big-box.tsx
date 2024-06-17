import React, { PropsWithChildren } from "react";
import styles from "./big-box.module.css";

export const BigBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.bigBox}>
      <div className={styles.bigBoxContent}>{children}</div>
    </div>
  );
};
