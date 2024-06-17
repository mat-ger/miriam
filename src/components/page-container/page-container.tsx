import React, { PropsWithChildren } from "react";
import styles from "./page-container.module.css";

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
