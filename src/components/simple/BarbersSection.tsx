import Image from "next/image";
import { BARBERS, COPY, type Locale, type LocationId } from "@/data/simpleContent";
import {
  ActionGroup,
  Badge,
  Button,
  ButtonLink,
  Heading,
  Section,
  SectionHeader,
} from "@/components/ui";
import styles from "./BarbersSection.module.css";

interface BarbersSectionProps {
  locale: Locale;
  onBookBarber: (barberName: string, locationId: LocationId) => void;
}

export function BarbersSection({ locale, onBookBarber }: BarbersSectionProps) {
  const t = COPY[locale].barbers;

  return (
    <Section id="barbers" aria-labelledby="barbers-heading">
      <SectionHeader
        index={t.index}
        label={t.label}
        title={t.title}
        titleId="barbers-heading"
        lead={t.lead}
      />

      <div className={styles.barbersGrid}>
        {BARBERS.map((barber) => (
          <article key={barber.id} className={styles.barberCard}>
            <div className={styles.portraitWrap}>
              <Image
                src={barber.image}
                alt={`${barber.name} — ${barber.tier}, SIMPLE Barbershop`}
                fill
                sizes="(max-width: 608px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={styles.portrait}
              />
              <div className={styles.portraitBadges}>
                <Badge variant={barber.tier === "Premium Barber" ? "accent" : "dark"}>
                  {barber.tier}
                </Badge>
              </div>
            </div>

            <div className={styles.barberBody}>
              <div className={styles.barberTop}>
                <Heading as="h3" size="title">
                  {barber.name}
                </Heading>
                <span className={styles.locationTag}>{barber.locationLabel}</span>
              </div>

              <p className={styles.experience}>{barber.experience[locale]}</p>
              <p className={styles.specialty}>{barber.specialty[locale]}</p>

              <Button
                size="sm"
                variant="secondary"
                className={styles.bookBtn}
                onClick={() => onBookBarber(barber.name, barber.locationId)}
              >
                {t.bookBarber}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <aside id="academy" className={styles.academyBanner} aria-labelledby="academy-heading">
        <div className={styles.academyContent}>
          <Badge variant="accent">{t.academy.badge}</Badge>
          <Heading as="h3" size="section" id="academy-heading" className={styles.academyTitle}>
            {t.academy.title}
          </Heading>
          <p className={styles.academyDesc}>{t.academy.desc}</p>
          <ActionGroup>
            <ButtonLink href="mailto:simple.barber.info@gmail.com?subject=SIMPLE%20Academy">
              {t.academy.ctaPrimary}
            </ButtonLink>
            <ButtonLink
              href="tel:+48789659655"
              variant="secondary"
              className={styles.academySecondary}
            >
              {t.academy.ctaSecondary}
            </ButtonLink>
          </ActionGroup>
        </div>

        <div className={styles.academyMedia}>
          <Image
            src="/assets/images/gallery-interior.jpg"
            alt="SIMPLE Barbershop & Academy — Katowicka 55B, Poznań"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className={styles.academyImg}
          />
        </div>
      </aside>
    </Section>
  );
}
