import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { markdown } from "../../dictionaries/markdown";
import { MDXComponents } from "mdx/types";
import styles from "./markdown-renderer.module.css";

export type TextKey = keyof typeof markdown;

export const RemoteMdxComponent: React.FC<{ textKey: string }> = ({
  textKey,
}) => {
  return (
    <MDXRemote
      source={markdown[textKey as TextKey]}
      components={{
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
      }}
    />
  );
};
