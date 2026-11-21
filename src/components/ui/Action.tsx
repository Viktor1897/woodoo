import type { ComponentPropsWithoutRef } from "react";
import styles from "./action.module.css";

type ActionProps = {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ActionProps & ComponentPropsWithoutRef<"button">) {
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
