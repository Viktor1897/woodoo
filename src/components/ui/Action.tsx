import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from "react";
import styles from "./action.module.css";

type ActionProps = {
  variant?: "primary" | "secondary" | "accent";
};

export function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ActionProps & ComponentPropsWithRef<"button">) {
  return (
    <button
      {...props}
      type={type}
      className={[styles.action, className].filter(Boolean).join(" ")}
      data-variant={variant}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ActionProps & ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <a
      {...props}
      className={[styles.action, className].filter(Boolean).join(" ")}
      data-variant={variant}
    />
  );
}
