import type { ComponentPropsWithoutRef } from "react";
import styles from "./card.module.css";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  tone?: "default" | "muted" | "dark";
};

export function Card({ tone = "default", className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={[styles.card, className].filter(Boolean).join(" ")}
      data-tone={tone}
    />
  );
}
