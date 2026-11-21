import type { ComponentPropsWithoutRef } from "react";
import styles from "./heading.module.css";

type HeadingProps = ComponentPropsWithoutRef<"h2"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display" | "section" | "title";
};

export function Heading({ as: Tag = "h2", size = "section", className, ...props }: HeadingProps) {
  return (
    <Tag
      {...props}
      className={[styles.heading, className].filter(Boolean).join(" ")}
      data-size={size}
    />
  );
}
