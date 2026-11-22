"use client";

import { useState } from "react";
import { COPY, SERVICES, type Locale, type ServiceCategory } from "@/data/simpleContent";
import { Button, Section, SectionHeader } from "@/components/ui";
import styles from "./ServicesSection.module.css";

interface ServicesSectionProps {
  locale: Locale;
  onBookService: (serviceName: string) => void;
}

export function ServicesSection({ locale, onBookService }: ServicesSectionProps) {
  const [category, setCategory] = useState<ServiceCategory>("all");
  const [expandedId, setExpandedId] = useState<string | null>("haircut");
  const t = COPY[locale].services;

  const filtered =
    category === "all" ? SERVICES : SERVICES.filter((s) => s.category === category);

  const toggleRow = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="services" tone="muted" aria-labelledby="services-heading">
      <SectionHeader
        index={t.index}
        label={t.label}
        title={t.title}
        titleId="services-heading"
        lead={t.lead}
      />

      <div className={styles.tabs} role="tablist" aria-label={t.label}>
        {t.tabs.map((tab) => {
          const isActive = category === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-active={isActive}
              className={styles.tab}
              onClick={() => setCategory(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className={styles.matrix} role="region" aria-live="polite">
        <div className={styles.matrixHeader} aria-hidden="true">
          <span>{t.colService}</span>
          <span className={styles.colRight}>{t.colBarber}</span>
          <span className={styles.colRight}>{t.colTop}</span>
          <span className={styles.colRight}>{t.colPremium}</span>
        </div>

        <ul className={styles.rows}>
          {filtered.map((service) => {
            const isOpen = expandedId === service.id;
            const detailsId = `service-details-${service.id}`;
            return (
              <li key={service.id} className={styles.rowItem} data-open={isOpen}>
                <button
                  type="button"
                  className={styles.rowTrigger}
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => toggleRow(service.id)}
                >
                  <span className={styles.serviceMain}>
                    <span className={styles.expandIcon} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span className={styles.serviceMeta}>
                      <span className={styles.serviceName}>{service.name[locale]}</span>
                      <span className={styles.serviceDuration}>{service.duration[locale]}</span>
                    </span>
                  </span>

                  {service.prices.kind === "tiered" ? (
                    <span className={styles.tieredPrices}>
                      <span className={styles.priceCell}>
                        <span className={styles.mobileTierLabel}>{t.colBarber}</span>
                        <span className={styles.priceValue}>{service.prices.barber} PLN</span>
                      </span>
                      <span className={styles.priceCell}>
                        <span className={styles.mobileTierLabel}>{t.colTop}</span>
                        <span className={styles.priceValue}>{service.prices.top} PLN</span>
                      </span>
                      <span className={styles.priceCell}>
                        <span className={styles.mobileTierLabel}>{t.colPremium}</span>
                        <span className={styles.priceValue}>{service.prices.premium} PLN</span>
                      </span>
                    </span>
                  ) : (
                    <span className={styles.flatPriceWrap}>
                      <span className={styles.flatLabel}>{t.fixedPrice}</span>
                      <span className={styles.priceValue}>{service.prices.price} PLN</span>
                    </span>
                  )}
                </button>

                {isOpen ? (
                  <div id={detailsId} className={styles.detailsPanel}>
                    <p className={styles.description}>{service.description[locale]}</p>
                    <Button
                      size="sm"
                      onClick={() => onBookService(service.name[locale])}
                    >
                      {t.bookService}
                    </Button>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>

      <p className={styles.tierFootnote}>{t.tierNote}</p>
    </Section>
  );
}
