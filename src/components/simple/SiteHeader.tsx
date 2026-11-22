"use client";

import { useState } from "react";
import { COPY, type Locale } from "@/data/simpleContent";
import { Button, Container } from "@/components/ui";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
  onOpenBooking: () => void;
}

export function SiteHeader({ locale, onLocaleChange, onOpenBooking }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = COPY[locale];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="#main-content" className={styles.skipLink}>
        {t.skipToContent}
      </a>
      <Container className={styles.inner}>
        <a href="#top" className={styles.wordmark} aria-label="SIMPLE Barbershop">
          SIMPLE<span className={styles.wordmarkMark} aria-hidden="true" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {t.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.controls}>
          <div className={styles.langSwitch} role="group" aria-label="Language">
            <button
              type="button"
              className={styles.langBtn}
              aria-pressed={locale === "pl"}
              data-active={locale === "pl"}
              onClick={() => onLocaleChange("pl")}
            >
              PL
            </button>
            <span className={styles.langSlash} aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={styles.langBtn}
              aria-pressed={locale === "en"}
              data-active={locale === "en"}
              onClick={() => onLocaleChange("en")}
            >
              EN
            </button>
          </div>

          <Button size="sm" onClick={onOpenBooking} className={styles.desktopCta}>
            {t.bookOnline}
          </Button>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? t.menuClose : t.menuOpen}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div id="mobile-nav" className={styles.mobileDrawer}>
          <Container className={styles.mobileInner}>
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              {t.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={styles.mobileLink}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
              className={styles.mobileCta}
            >
              {t.bookOnline}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
