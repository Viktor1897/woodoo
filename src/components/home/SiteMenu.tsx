"use client";

import { Button } from "@/components/ui";
import styles from "./home.module.css";

type MenuLink = { href: string; label: string };

export function SiteMenu({ links }: { links: MenuLink[] }) {
  return (
    <>
      <Button variant="secondary" className={styles.menuToggle} popoverTarget="home-menu">
        Menu <span className={styles.menuIcon} aria-hidden="true" />
      </Button>
      <nav className={styles.siteMenu} id="home-menu" popover="auto" aria-label="Nawigacja główna">
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={(event) => event.currentTarget.closest("nav")?.hidePopover()}>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
