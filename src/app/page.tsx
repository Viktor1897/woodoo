import type { Metadata } from "next";
import Image from "next/image";
import { LocationFinder } from "@/components/home/LocationFinder";
import { ServiceMenu } from "@/components/home/ServiceMenu";
import { SiteMenu } from "@/components/home/SiteMenu";
import { ButtonLink, Container, Grid, Heading, Section } from "@/components/ui";
import { academyCourses, academyUrl, bookingUrl, email, gallery, instagramUrl, locations, questions } from "@/content/home";
import styles from "./page.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const navigation = [
  { href: "#galeria", label: "Nasze cięcia" },
  { href: "#uslugi", label: "Usługi i ceny" },
  { href: "#lokalizacje", label: "Salony" },
  { href: "#akademia", label: "Akademia" },
  { href: "#kontakt", label: "Kontakt" },
];

function BookingAction() {
  return (
    <ButtonLink href={bookingUrl} variant="accent" className={styles.bookingAction}>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 3v4m10-4v4M3 10h18m-14 4h3m-3 3h5" />
      </svg>
      Zarezerwuj w Booksy
    </ButtonLink>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Przejdź do treści</a>
      <header className={styles.header} id="poczatek">
        <Container className={styles.headerInner}>
          <a className={styles.wordmark} href="#poczatek" aria-label="SIMPLE Barbershop – początek strony">
            <Image src="/assets/images/home/simple.svg" width={184} height={45} alt="SIMPLE Barbershop" />
          </a>
          <nav className={styles.desktopNav} aria-label="Nawigacja główna">
            {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className={styles.instagram} href={instagramUrl}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <div className={styles.mobileNav}>
            <SiteMenu links={navigation} />
          </div>
        </Container>
      </header>

      <main className={styles.home} id="main">
        <Section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroHeading}>
              <p className={styles.kicker}>Barbershop w Poznaniu</p>
              <Heading as="h1" size="display" id="hero-title">
                Strzyżemy<br />włosy i brody.
              </Heading>
            </div>
            <div className={styles.poster}>
              <span aria-hidden="true">SIMPLE</span>
              <Image src="/assets/images/home/barber.webp" alt="Czarno-biały portret barbera z brzytwą i nożyczkami" width={643} height={668} preload />
            </div>
            <div className={styles.heroBooking}>
              <p>Od krótkiego cieniowania po klasyczne cięcie. Wybierz jeden z trzech salonów SIMPLE i umów wizytę.</p>
              <BookingAction />
            </div>
          </div>
          <div className={styles.salonStrip}>
            <span className={styles.stripLabel}>Poznań</span>
            <ul>{locations.map(({ id, address }) => <li key={id}>{address.replace("ul. ", "")}</li>)}</ul>
            <span className={styles.hours}>Codziennie 9:00–21:00</span>
          </div>
        </Section>

        <Section id="galeria" className={styles.gallerySection} aria-labelledby="gallery-title">
          <div className={styles.galleryHeader}>
            <div>
              <p className={styles.kicker}>Nasze prace</p>
              <Heading id="gallery-title">Z fotela SIMPLE.</Heading>
            </div>
            <a className={styles.textLink} href={instagramUrl}>Więcej cięć na Instagramie</a>
          </div>
          <Grid className={styles.gallery}>
            {gallery.map(({ caption, alt, ...photo }) => (
              <figure key={photo.src}>
                <Image alt={alt} {...photo} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </Grid>
        </Section>

        <Section tone="inverse" id="uslugi" className={styles.serviceSection} aria-labelledby="services-title">
          <div className={styles.sectionLayout}>
            <div className={styles.intro}>
              <Heading id="services-title">Usługi i ceny</Heading>
              <p>Ceny orientacyjne. Aktualny cennik sprawdzisz w Booksy po wybraniu salonu i barbera.</p>
            </div>
            <ServiceMenu />
          </div>
        </Section>

        <Section id="lokalizacje" aria-labelledby="locations-title">
          <div className={styles.sectionHeader}>
            <Heading id="locations-title">Salony w Poznaniu</Heading>
            <p>Wybierz adres i sprawdź wolne terminy.</p>
          </div>
          <LocationFinder />
        </Section>

        <Section tone="muted" id="akademia" aria-labelledby="academy-title">
          <div className={styles.academyLayout}>
            <Image className={styles.academyPhoto} src="/assets/images/home/academy-training.webp" alt="Barber pokazuje kursantowi technikę strzyżenia na modelu" width={900} height={900} />
            <div className={styles.intro}>
              <p className={styles.kicker}>Szkolenia barberskie</p>
              <Heading id="academy-title">SIMPLE Academy</Heading>
              <dl className={styles.courses}>
                {academyCourses.map(({ name, description }) => (
                  <div key={name}><dt>{name}</dt><dd>{description}</dd></div>
                ))}
              </dl>
              <ButtonLink href={academyUrl} variant="secondary">Zobacz szkolenia</ButtonLink>
            </div>
          </div>
        </Section>

        <Section id="pierwsza-wizyta" aria-labelledby="visit-title">
          <div className={styles.sectionLayout}>
            <Heading id="visit-title">Pierwsza wizyta</Heading>
            <div className={styles.questions}>
              {questions.map(({ question, answer, href, link }) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}{href && <> <a href={href}>{link}</a>.</>}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="inverse" aria-labelledby="booking-title">
          <div className={styles.bookingInner}>
            <div>
              <Heading id="booking-title">Do zobaczenia w fotelu.</Heading>
              <p>Wybierz salon, barbera i termin wizyty.</p>
            </div>
            <BookingAction />
          </div>
        </Section>
      </main>

      <footer className={styles.footer} id="kontakt">
        <Container>
          <div className={styles.footerLayout}>
            <div>
              <Image src="/assets/images/home/simple.svg" width={148} height={36} alt="SIMPLE Barbershop" />
              <a href={instagramUrl}>Instagram</a>
            </div>
            <div>
              <Heading as="h2" size="title">Kontakt</Heading>
              <a href={`mailto:${email}`}>{email}</a>
              <ul>{locations.map(({ id, name, phone }) => (
                <li key={id}><a href={`tel:${phone.replaceAll(" ", "")}`}>{name} · {phone}</a></li>
              ))}</ul>
            </div>
            <nav aria-label="Na skróty">
              <Heading as="h2" size="title">Na skróty</Heading>
              <ul>
                <li><a href="#uslugi">Usługi i ceny</a></li>
                <li><a href="#lokalizacje">Salony</a></li>
                <li><a href="#akademia">Akademia</a></li>
                <li><a href="#pierwsza-wizyta">Pierwsza wizyta</a></li>
              </ul>
            </nav>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} SIMPLE Barbershop</p>
        </Container>
      </footer>
    </>
  );
}
