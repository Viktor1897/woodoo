import type { ComponentPropsWithoutRef } from "react";
import styles from "./layout.module.css";

type LayoutProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: LayoutProps) {
  return (
    <div {...props} className={[styles.container, className].filter(Boolean).join(" ")} />
  );
}

export function Grid({ className, ...props }: LayoutProps) {
  return <div {...props} className={[styles.grid, className].filter(Boolean).join(" ")} />;
}

export function ActionGroup({ className, ...props }: LayoutProps) {
  return <div {...props} className={[styles.actions, className].filter(Boolean).join(" ")} />;
}

export function Section({
  tone = "default",
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section"> & { tone?: "default" | "muted" }) {
  return (
    <section
      {...props}
      className={[styles.section, className].filter(Boolean).join(" ")}
      data-tone={tone}
    >
      <Container>{children}</Container>
    </section>
  );
}
