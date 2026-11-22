"use client";

import { useEffect, useState } from "react";
import type { Locale, LocationId } from "@/data/simpleContent";
import { BarbersSection } from "./BarbersSection";
import { BookingModal, type BookingContext } from "./BookingModal";
import { HeroSection } from "./HeroSection";
import { LocationsSection } from "./LocationsSection";
import { OffersSection } from "./OffersSection";
import { ReviewsGallerySection } from "./ReviewsGallerySection";
import { ServicesSection } from "./ServicesSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StandardSection } from "./StandardSection";

export function SimpleSite() {
  const [locale, setLocale] = useState<Locale>("pl");
  const [bookingContext, setBookingContext] = useState<BookingContext | null>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const openGeneralBooking = () => setBookingContext({});
  const openLocationBooking = (locationId: LocationId) =>
    setBookingContext({ locationId });
  const openServiceBooking = (serviceName: string) =>
    setBookingContext({ note: serviceName });
  const openBarberBooking = (barberName: string, locationId: LocationId) =>
    setBookingContext({ locationId, note: barberName });
  const openOfferBooking = (offerTitle: string) =>
    setBookingContext({ note: offerTitle });

  return (
    <>
      <SiteHeader
        locale={locale}
        onLocaleChange={setLocale}
        onOpenBooking={openGeneralBooking}
      />

      <main id="main-content">
        <HeroSection locale={locale} onOpenBooking={openGeneralBooking} />
        <LocationsSection locale={locale} onBookLocation={openLocationBooking} />
        <ServicesSection locale={locale} onBookService={openServiceBooking} />
        <StandardSection locale={locale} />
        <BarbersSection locale={locale} onBookBarber={openBarberBooking} />
        <OffersSection locale={locale} onSelectOffer={openOfferBooking} />
        <ReviewsGallerySection locale={locale} />
      </main>

      <SiteFooter
        locale={locale}
        onLocaleChange={setLocale}
        onOpenBooking={openGeneralBooking}
      />

      <BookingModal
        locale={locale}
        context={bookingContext}
        onClose={() => setBookingContext(null)}
      />
    </>
  );
}
