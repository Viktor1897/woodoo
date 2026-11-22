import { COPY, OFFERS, type Locale } from "@/data/simpleContent";
import { Badge, Button, Card, Heading, Section, SectionHeader } from "@/components/ui";
import styles from "./OffersSection.module.css";

interface OffersSectionProps {
  locale: Locale;
  onSelectOffer: (offerTitle: string) => void;
}

export function OffersSection({ locale, onSelectOffer }: OffersSectionProps) {
  const t = COPY[locale].offers;

  return (
    <Section id="offers" tone="muted" aria-labelledby="offers-heading">
      <SectionHeader
        index={t.index}
        label={t.label}
        title={t.title}
        titleId="offers-heading"
        lead={t.lead}
      />

      <div className={styles.grid}>
        {OFFERS.map((offer) => (
          <Card key={offer.id} className={styles.offerCard}>
            <div className={styles.cardTop}>
              <span className={styles.code}>{offer.code}</span>
              <Badge variant="outline">{offer.tag[locale]}</Badge>
            </div>

            <div className={styles.body}>
              <Heading as="h3" size="title">
                {offer.title[locale]}
              </Heading>
              <p className={styles.priceNote}>{offer.priceNote[locale]}</p>
              <p className={styles.desc}>{offer.description[locale]}</p>
            </div>

            <Button
              variant="secondary"
              size="sm"
              className={styles.cta}
              onClick={() => onSelectOffer(offer.title[locale])}
            >
              {offer.cta[locale]}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
