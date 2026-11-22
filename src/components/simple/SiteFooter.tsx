import { COPY, LOCATIONS, type Locale } from "@/data/simpleContent";
import { Button, Container } from "@/components/ui";
import styles from "./SiteFooter.module.css";

interface SiteFooterProps {
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
  onOpenBooking: () => void;
}

export function SiteFooter({ locale, onLocaleChange, onOpenBooking }: SiteFooterProps) {
  const t = COPY[locale].footer;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wordmarkRow}>
          <p className={styles.wordmark} aria-hidden="true">
            SIMPLE<span className={styles.dot} />
          </p>
          <div className={styles.topAction}>
            <p className={styles.tagline}>{t.tagline}</p>
            <Button onClick={onOpenBooking}>{t.finalCta}</Button>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.locationsCol}>
            <h2 className={styles.colHeading}>{t.locationsHeading}</h2>
            <ul className={styles.locationList}>
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className={styles.locationItem}>
                  <span className={styles.locName}>{loc.shortName}</span>
                  <span className={styles.locAddr}>
                    {loc.address}, {loc.city}
                  </span>
                  <a href={loc.phoneHref} className={styles.locPhone}>
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCol}>
            <h2 className={styles.colHeading}>{t.hoursHeading}</h2>
            <p className={styles.hoursValue}>{t.hoursValue}</p>
            <a href="mailto:simple.barber.info@gmail.com" className={styles.emailLink}>
              simple.barber.info@gmail.com
            </a>

            <div className={styles.langRow}>
              <button
                type="button"
                className={styles.langBtn}
                data-active={locale === "pl"}
                aria-pressed={locale === "pl"}
                onClick={() => onLocaleChange("pl")}
              >
                Polski (PL)
              </button>
              <button
                type="button"
                className={styles.langBtn}
                data-active={locale === "en"}
                aria-pressed={locale === "en"}
                onClick={() => onLocaleChange("en")}
              >
                English (EN)
              </button>
            </div>
          </div>

          <div className={styles.socialCol}>
            <h2 className={styles.colHeading}>{t.socialsHeading}</h2>
            <ul className={styles.socialList}>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://booksy.com/pl-pl/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  Booksy ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  Facebook ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} SIMPLE Barbershop Poznań. {t.rights}</span>
          <span>Bukowska · Marcelin · Katowicka</span>
        </div>
      </Container>
    </footer>
  );
}
