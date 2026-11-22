import type { ComponentPropsWithoutRef } from "react";
import styles from "./action.module.css";

type ActionProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
};

export function Button({
  variant = "primary",
  size = "default",
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
      data-size={size}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ActionProps & ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <a
      {...props}
      className={[styles.action, className].filter(Boolean).join(" ")}
      data-variant={variant}
      data-size={size}
    />
  );
}
