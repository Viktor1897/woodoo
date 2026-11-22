"use client";

import { useState } from "react";
import { COPY, LOCATIONS, type Locale, type LocationId } from "@/data/simpleContent";
import { Badge, Button, ButtonLink, Card, Heading, Section, SectionHeader } from "@/components/ui";
import styles from "./LocationsSection.module.css";

interface LocationsSectionProps {
  locale: Locale;
  onBookLocation: (locationId: LocationId) => void;
}

export function LocationsSection({ locale, onBookLocation }: LocationsSectionProps) {
  const [view, setView] = useState<"list" | "map">("list");
  const [activeId, setActiveId] = useState<LocationId>("bukowska");
  const t = COPY[locale].locations;

  const activeLocation = LOCATIONS.find((loc) => loc.id === activeId) ?? LOCATIONS[0];

  return (
    <Section id="locations" aria-labelledby="locations-heading">
      <SectionHeader
        index={t.index}
        label={t.label}
        title={t.title}
        titleId="locations-heading"
        lead={t.lead}
        action={
          <div className={styles.viewToggle} role="group" aria-label="View mode">
            <button
              type="button"
              className={styles.toggleBtn}
              aria-pressed={view === "list"}
              data-active={view === "list"}
              onClick={() => setView("list")}
            >
              {t.listView}
            </button>
            <button
              type="button"
              className={styles.toggleBtn}
              aria-pressed={view === "map"}
              data-active={view === "map"}
              onClick={() => setView("map")}
            >
              {t.mapView}
            </button>
          </div>
        }
      />

      {view === "list" ? (
        <div className={styles.listGrid}>
          {LOCATIONS.map((loc, idx) => (
            <Card key={loc.id} className={styles.locationCard}>
              <div className={styles.cardTop}>
                <span className={styles.branchIndex}>0{idx + 1}</span>
                {loc.hasAcademy ? (
                  <Badge variant="dark">{t.academyTag}</Badge>
                ) : (
                  <Badge variant="outline">{loc.district[locale]}</Badge>
                )}
              </div>

              <div className={styles.cardHeader}>
                <Heading as="h3" size="title">
                  {loc.name[locale]}
                </Heading>
                <div className={styles.ratingRow}>
                  <span className={styles.ratingScore}>{loc.rating} ★</span>
                  <span className={styles.ratingCount}>({loc.reviewsCount[locale]})</span>
                </div>
              </div>

              <dl className={styles.metaList}>
                <div className={styles.metaRow}>
                  <dt className={styles.metaKey}>{loc.address}</dt>
                  <dd className={styles.metaVal}>{loc.city}</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.metaKey}>{t.hoursLabel}</dt>
                  <dd className={styles.metaVal}>{loc.hours[locale]}</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.metaKey}>{t.phoneLabel}</dt>
                  <dd className={styles.metaVal}>
                    <a href={loc.phoneHref} className={styles.phoneLink}>
                      {loc.phone}
                    </a>
                  </dd>
                </div>
              </dl>

              <p className={styles.parkingNote}>{loc.parking[locale]}</p>

              <div className={styles.cardActions}>
                <Button onClick={() => onBookLocation(loc.id)} className={styles.bookBtn}>
                  {t.bookAtLocation}
                </Button>
                <ButtonLink
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  {t.directions}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className={styles.mapLayout}>
          <div className={styles.mapCanvas}>
            <div className={styles.mapTopBar}>
              <span className={styles.mapTitle}>{t.mapLegendTitle}</span>
              <span className={styles.mapHint}>{t.mapLegendHint}</span>
            </div>

            <div className={styles.svgWrap}>
              <svg
                viewBox="0 0 800 460"
                className={styles.poznanSvg}
                role="img"
                aria-label="Poznań map with 3 SIMPLE Barbershop locations"
              >
                {/* Subtle architectural grid */}
                <g stroke="#D3D1C9" strokeWidth="1" opacity="0.7">
                  <line x1="0" y1="92" x2="800" y2="92" />
                  <line x1="0" y1="184" x2="800" y2="184" />
                  <line x1="0" y1="276" x2="800" y2="276" />
                  <line x1="0" y1="368" x2="800" y2="368" />
                  <line x1="160" y1="0" x2="160" y2="460" />
                  <line x1="320" y1="0" x2="320" y2="460" />
                  <line x1="480" y1="0" x2="480" y2="460" />
                  <line x1="640" y1="0" x2="640" y2="460" />
                </g>

                {/* Warta River architectural ribbon */}
                <path
                  d="M 520 0 C 505 110, 485 160, 495 240 C 505 320, 470 390, 460 460"
                  fill="none"
                  stroke="#C4CEC9"
                  strokeWidth="22"
                />

                {/* Major Poznań roads */}
                <path
                  d="M 60 225 L 380 218 L 530 232 L 740 255"
                  fill="none"
                  stroke="#B8B6AE"
                  strokeWidth="3"
                />
                <path
                  d="M 110 310 L 380 218 L 495 140"
                  fill="none"
                  stroke="#B8B6AE"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* City Center reference */}
                <circle cx="430" cy="222" r="5" fill="#5E635F" />
                <text
                  x="442"
                  y="214"
                  fill="#5E635F"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0.12em"
                >
                  CENTRUM / STARE MIASTO
                </text>
                <text
                  x="512"
                  y="78"
                  fill="#5E635F"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="0.14em"
                >
                  WARTA
                </text>
              </svg>

              {LOCATIONS.map((loc, idx) => {
                const isSelected = loc.id === activeLocation.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    className={styles.mapPin}
                    data-active={isSelected}
                    style={{
                      left: `${loc.mapCoords.x}%`,
                      top: `${loc.mapCoords.y}%`,
                    }}
                    onClick={() => setActiveId(loc.id)}
                    aria-pressed={isSelected}
                  >
                    <span className={styles.pinNumber}>0{idx + 1}</span>
                    <span className={styles.pinLabel}>{loc.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <Card tone="dark" className={styles.mapDetailCard}>
            <div className={styles.cardTop}>
              <Badge variant="accent">{activeLocation.rating} ★</Badge>
              <span className={styles.darkMuted}>{activeLocation.reviewsCount[locale]}</span>
            </div>

            <Heading as="h3" size="title">
              {activeLocation.name[locale]}
            </Heading>

            <p className={styles.darkAddress}>
              {activeLocation.address}, {activeLocation.city}
            </p>

            <dl className={styles.darkMetaList}>
              <div className={styles.darkMetaRow}>
                <dt>{t.hoursLabel}</dt>
                <dd>{activeLocation.hours[locale]}</dd>
              </div>
              <div className={styles.darkMetaRow}>
                <dt>{t.phoneLabel}</dt>
                <dd>
                  <a href={activeLocation.phoneHref} className={styles.darkPhoneLink}>
                    {activeLocation.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <p className={styles.darkParking}>{activeLocation.parking[locale]}</p>

            <div className={styles.mapDetailActions}>
              <Button onClick={() => onBookLocation(activeLocation.id)}>
                {t.bookAtLocation}
              </Button>
              <ButtonLink
                href={activeLocation.mapsUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className={styles.darkSecondaryBtn}
              >
                {t.directions}
              </ButtonLink>
            </div>
          </Card>
        </div>
      )}
    </Section>
  );
}
