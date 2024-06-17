import React, { PropsWithChildren } from "react";
import styles from "./section.module.css";

export const Section: React.FC<PropsWithChildren & { id?: string }> = ({
  children,
  id,
}) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};
