import type { Metadata } from "next";
import Image from "next/image";
import { LocationFinder } from "@/components/home/LocationFinder";
import { ServiceMenu } from "@/components/home/ServiceMenu";
import { SiteMenu } from "@/components/home/SiteMenu";
import { ActionGroup, ButtonLink, Container, Grid, Heading, Section } from "@/components/ui";
import { academyCourses, academyUrl, bookingUrl, email, gallery, instagramUrl, locations, questions } from "@/content/home";
import styles from "./page.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const navigation = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#lokalizacje", label: "Salony" },
  { href: "#galeria", label: "Galeria" },
  { href: "#akademia", label: "Akademia" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Przejdź do treści</a>
      <header className={styles.header} id="poczatek">
        <Container className={styles.headerInner}>
          <a className={styles.wordmark} href="#poczatek" aria-label="SIMPLE Barbershop – początek strony">
            <span>SIMPLE</span>
            <small>BARBERSHOP</small>
          </a>
          <ActionGroup>
            <ButtonLink className={styles.headerBooking} href={bookingUrl}>Zarezerwuj</ButtonLink>
            <SiteMenu links={[...navigation, { href: bookingUrl, label: "Zarezerwuj w Booksy" }]} />
          </ActionGroup>
        </Container>
      </header>

      <main className={styles.home} id="main">
        <Section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroFrame}>
            <div className={styles.heroIntro}>
              <p className={styles.eyebrow} data-motion="enter">Barbershop w Poznaniu</p>
              <Heading as="h1" size="display" id="hero-title" data-motion="enter">
                SIMPLE
              </Heading>
              <p className={styles.heroTagline} data-motion="enter">
                Dobre cięcie. <span className={styles.heroAccent}>Po prostu.</span>
              </p>
              <ActionGroup className={styles.heroActions} data-motion="enter">
                <ButtonLink href="#lokalizacje" variant="accent">Wybierz salon</ButtonLink>
                <ButtonLink href="#uslugi" variant="secondary">Zobacz usługi</ButtonLink>
              </ActionGroup>
            </div>
          </div>
        </Section>

        <Section className={styles.bookingBandSection} aria-labelledby="choose-salon-title">
          <div className={styles.bookingBand}>
            <div className={styles.bookingBandContent} data-motion="reveal">
              <Heading id="choose-salon-title">Wybierz salon i zarezerwuj</Heading>
              <p>Strzyżenie męskie i pielęgnacja brody w trzech poznańskich salonach.</p>
              <ActionGroup>
                <ButtonLink href={bookingUrl}>Zarezerwuj w Booksy</ButtonLink>
              </ActionGroup>
            </div>
            <div className={styles.bookingBandMedia}>
              <Image
                src="/assets/images/home/studio.webp"
                alt="Fotele barberskie we wnętrzu salonu SIMPLE"
                width={610}
                height={395}
              />
            </div>
          </div>
        </Section>

        <Section tone="inverse" className={styles.featureSection} id="uslugi" aria-labelledby="services-title">
          <div className={styles.sectionIntro} data-motion="reveal">
            <Heading size="display" id="services-title">Usługi i cennik</Heading>
            <p>Przykładowe ceny. Aktualny cennik i dostępność sprawdzisz w Booksy po wyborze salonu.</p>
          </div>
          <ServiceMenu />
        </Section>

        <Section className={styles.featureSection} id="lokalizacje" aria-labelledby="locations-title">
          <div className={styles.sectionIntro} data-motion="reveal">
            <Heading size="display" id="locations-title">Salony SIMPLE</Heading>
            <p>Znajdź dogodny adres w Poznaniu i zarezerwuj wizytę w wybranym salonie.</p>
          </div>
          <LocationFinder />
        </Section>

        <Section tone="muted" id="galeria" aria-labelledby="gallery-title">
          <div className={styles.sectionIntro} data-motion="reveal">
            <Heading id="gallery-title">Z fotela barbera</Heading>
          </div>
          <Grid className={styles.gallery}>
            {gallery.map(({ alt, ...photo }) => (
              <div key={photo.src} className={styles.galleryPhoto} data-motion="reveal">
                <Image alt={alt} {...photo} />
              </div>
            ))}
          </Grid>
          <div className={styles.galleryAction}>
            <ButtonLink href={instagramUrl} variant="secondary">Więcej na Instagramie</ButtonLink>
          </div>
        </Section>

        <Section id="akademia" aria-labelledby="academy-title">
          <div className={styles.academyLayout}>
            <figure className={styles.academyMedia}>
              <Image
                src="/assets/images/home/academy-training.webp"
                alt="Barber pokazuje kursantowi technikę strzyżenia na modelu"
                width={900}
                height={900}
              />
              <figcaption>Praktyka w SIMPLE Academy w Poznaniu</figcaption>
            </figure>
            <div className={styles.intro} data-motion="reveal">
              <p className={styles.eyebrow}>Szkolenia barberskie w Poznaniu</p>
              <Heading id="academy-title">SIMPLE Academy</Heading>
              <dl className={styles.courses}>
                {academyCourses.map(({ name, description }) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
              <ActionGroup>
                <ButtonLink href={academyUrl} variant="accent">Zobacz szkolenia</ButtonLink>
              </ActionGroup>
            </div>
          </div>
        </Section>

        <Section tone="muted" id="pierwsza-wizyta" aria-labelledby="visit-title">
          <div className={styles.sectionLayout}>
            <div className={styles.sectionIntro} data-motion="reveal">
              <Heading id="visit-title">Pierwsza wizyta</Heading>
              <p>Jak wybrać usługę i zaplanować wizytę w SIMPLE.</p>
            </div>
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
              <Heading id="booking-title">Do zobaczenia w SIMPLE.</Heading>
              <p>Wybierz adres, usługę i dogodny termin.</p>
            </div>
            <ActionGroup>
              <ButtonLink href={bookingUrl} variant="accent">Zarezerwuj w Booksy</ButtonLink>
            </ActionGroup>
          </div>
        </Section>
      </main>

      <footer className={styles.footer} id="kontakt">
        <Container>
          <div className={styles.footerLayout}>
            <div>
              <Heading as="h2" size="title">SIMPLE Barbershop</Heading>
              <p>Poznań</p>
              <a href={instagramUrl}>Instagram</a>
            </div>
            <div>
              <Heading as="h2" size="title">Kontakt</Heading>
              <a href={`mailto:${email}`}>{email}</a>
              <ul>
                {locations.map(({ id, name, phone }) => (
                  <li key={id}><a href={`tel:${phone.replaceAll(" ", "")}`}>{name} · {phone}</a></li>
                ))}
              </ul>
            </div>
            <nav aria-label="Na skróty">
              <Heading as="h2" size="title">Na skróty</Heading>
              <ul>
                <li><a href="#uslugi">Usługi</a></li>
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
