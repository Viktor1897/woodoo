import type { ComponentPropsWithoutRef } from "react";
import styles from "./card.module.css";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={[styles.card, className].filter(Boolean).join(" ")} />;
}
