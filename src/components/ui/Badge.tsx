import type { ComponentPropsWithoutRef } from "react";
import styles from "./badge.module.css";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: "neutral" | "accent" | "dark" | "outline";
  dot?: boolean;
};

export function Badge({
  variant = "neutral",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={[styles.badge, className].filter(Boolean).join(" ")}
      data-variant={variant}
    >
      {dot ? <span className={styles.dot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
