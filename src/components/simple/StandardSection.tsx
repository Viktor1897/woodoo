import { COPY, type Locale } from "@/data/simpleContent";
import { Heading, Section, SectionHeader } from "@/components/ui";
import styles from "./StandardSection.module.css";

interface StandardSectionProps {
  locale: Locale;
}

export function StandardSection({ locale }: StandardSectionProps) {
  const t = COPY[locale].standard;

  return (
    <Section id="standard" tone="dark" aria-labelledby="standard-heading">
      <SectionHeader
        index={t.index}
        label={t.label}
        title={t.title}
        titleId="standard-heading"
      />

      <div className={styles.layout}>
        <div className={styles.editorial}>
          <p className={styles.leadCopy}>{t.philosophy}</p>
          <p className={styles.secondaryCopy}>{t.philosophySecondary}</p>
        </div>

        <div className={styles.perksGrid}>
          {t.perks.map((perk) => (
            <div key={perk.num} className={styles.perkCell}>
              <span className={styles.perkNum}>{perk.num}</span>
              <Heading as="h3" size="title" className={styles.perkTitle}>
                {perk.title}
              </Heading>
              <p className={styles.perkDesc}>{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
