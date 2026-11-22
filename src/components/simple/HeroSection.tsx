import Image from "next/image";
import { COPY, type Locale } from "@/data/simpleContent";
import { ActionGroup, Badge, Button, ButtonLink, Container, Heading } from "@/components/ui";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  locale: Locale;
  onOpenBooking: () => void;
}

export function HeroSection({ locale, onOpenBooking }: HeroSectionProps) {
  const t = COPY[locale].hero;

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/assets/images/hero-barbershop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.scrim} />
      </div>

      <Container className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <Badge variant="dark" dot>
              {t.openNow}
            </Badge>
            <span className={styles.eyebrowText}>{t.eyebrow}</span>
          </div>

          <Heading as="h1" size="display" id="hero-heading" className={styles.headline}>
            {t.headline}
          </Heading>

          <p className={styles.subcopy}>{t.subcopy}</p>

          <ActionGroup className={styles.actions}>
            <Button onClick={onOpenBooking}>{t.primaryCta}</Button>
            <ButtonLink href="#services" variant="secondary" className={styles.secondaryCta}>
              {t.secondaryCta}
            </ButtonLink>
          </ActionGroup>
        </div>
      </Container>

      <div className={styles.trustBar}>
        <Container className={styles.trustGrid}>
          {t.trust.map((item) => (
            <div key={item.label} className={styles.trustItem}>
              <span className={styles.trustValue}>{item.value}</span>
              <span className={styles.trustLabel}>{item.label}</span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
