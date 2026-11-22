import type { ReactNode } from "react";
import { Heading } from "./Heading";
import styles from "./section-header.module.css";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  titleId?: string;
  lead?: string;
  action?: ReactNode;
};

export function SectionHeader({
  index,
  label,
  title,
  titleId,
  lead,
  action,
}: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.meta}>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.row}>
        <Heading id={titleId} as="h2" size="section">
          {title}
        </Heading>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
        {action ? <div className={styles.action}>{action}</div> : null}
      </div>
    </header>
  );
}
