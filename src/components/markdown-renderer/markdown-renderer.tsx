import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { markdown } from "../../dictionaries/markdown";
import { MDXComponents } from "mdx/types";
import styles from "./markdown-renderer.module.css";

export type TextKey = keyof typeof markdown;

const normalizeTextKey = (textKey: string): TextKey => {
  return textKey.trim().replace(/^#sym:/, "") as TextKey;
};

export const RemoteMdxComponent: React.FC<{
  textKey: string;
  tableClassName?: string;
}> = ({ textKey, tableClassName }) => {
  const normalizedTextKey = normalizeTextKey(textKey);

  return (
    <div className={styles.container}>
      <MDXRemote
        source={markdown[normalizedTextKey] ?? ""}
        components={
          {
            em: (props) => (
              <em
                {...props}
                style={{
                  padding: "0 12px",
                  WebkitBoxDecorationBreak: "clone",
                }}
              />
            ),
            blockquote: (props) => (
              <blockquote
                style={{
                  fontWeight: "bold",
                  color: "var(--headline-blue)",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                {...props}
              />
            ),
            p: (props) => (
              <p {...props} style={{ textAlign: "justify", hyphens: "auto" }} />
            ),
            ul: (props) => (
              <ul
                style={{
                  listStyle: "inside",
                  padding: "0 64px",
                }}
                {...props}
              />
            ),
            h3: (props) => <h3 {...props} className={styles.h3} />,
            table: (props) => (
              <table
                {...props}
                className={[styles.table, tableClassName, props.className]
                  .filter(Boolean)
                  .join(" ")}
              />
            ),
          } as MDXComponents
        }
      />
    </div>
  );
};
