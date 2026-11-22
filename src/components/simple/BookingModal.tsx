"use client";

import { useEffect } from "react";
import { COPY, LOCATIONS, type Locale, type LocationId } from "@/data/simpleContent";
import { Badge, Button, ButtonLink, Heading } from "@/components/ui";
import styles from "./BookingModal.module.css";

export interface BookingContext {
  locationId?: LocationId;
  note?: string;
}

interface BookingModalProps {
  locale: Locale;
  context: BookingContext | null;
  onClose: () => void;
}

export function BookingModal({ locale, context, onClose }: BookingModalProps) {
  const t = COPY[locale].bookingModal;

  useEffect(() => {
    if (!context) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [context, onClose]);

  if (!context) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <Heading as="h2" size="title" id="booking-modal-title">
              {t.title}
            </Heading>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            aria-label={t.close}
          >
            ✕
          </Button>
        </div>

        {context.note ? (
          <div className={styles.contextStrip}>
            <span className={styles.contextLabel}>{t.selectedContext}:</span>
            <Badge variant="dark">{context.note}</Badge>
          </div>
        ) : null}

        <div className={styles.branchList}>
          {LOCATIONS.map((loc) => {
            const isHighlighted = context.locationId === loc.id;
            return (
              <div
                key={loc.id}
                className={styles.branchRow}
                data-highlighted={isHighlighted}
              >
                <div className={styles.branchInfo}>
                  <div className={styles.branchTitleRow}>
                    <span className={styles.branchName}>{loc.shortName}</span>
                    <span className={styles.branchRating}>
                      {loc.rating} ★ ({loc.reviewsCount[locale]})
                    </span>
                  </div>
                  <span className={styles.branchAddress}>
                    {loc.address}, {loc.city} · {loc.hours[locale]}
                  </span>
                </div>

                <div className={styles.branchActions}>
                  <ButtonLink
                    href={loc.booksyUrl}
                    target="_blank"
                    rel="noreferrer"
                    size="sm"
                  >
                    {t.openBooksy}
                  </ButtonLink>
                  <ButtonLink href={loc.phoneHref} variant="secondary" size="sm">
                    {t.callDirect}
                  </ButtonLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
