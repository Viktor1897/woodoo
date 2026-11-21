"use client";

import { useRef, useState } from "react";
import { ActionGroup, Button, ButtonLink, Heading } from "@/components/ui";
import { hours, locations } from "@/content/home";
import styles from "./home.module.css";

function searchKey(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replaceAll("ł", "l").trim();
}

type Location = (typeof locations)[number];

function BookingLink({ location }: { location: Location }) {
  return (
    <ButtonLink href={location.bookingUrl} aria-label={`Zarezerwuj w Booksy – ${location.name}`}>
      Zarezerwuj
    </ButtonLink>
  );
}

function LocationDetails({ location }: { location: Location }) {
  return (
    <>
      <p>{hours}</p>
      <a href={`tel:${location.phone.replaceAll(" ", "")}`}>{location.phone}</a>
    </>
  );
}

export function LocationFinder() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"list" | "map">("map");
  const [selectedId, setSelectedId] = useState(locations[0].id);
  const mapButtonRef = useRef<HTMLButtonElement>(null);
  const normalizedQuery = searchKey(query);
  const matches = locations.filter(({ name, address }) =>
    searchKey(`${name} ${address} Poznań`).includes(normalizedQuery),
  );
  const selected = matches.find(({ id }) => id === selectedId) ?? matches[0];

  function showLocationOnMap(id: string) {
    setSelectedId(id);
    setView("map");
    mapButtonRef.current?.focus();
  }

  return (
    <div className={styles.stack}>
      <div className={styles.finderToolbar}>
        <div className={styles.search}>
          <label htmlFor="location-search">Szukaj salonu</label>
          <input
            id="location-search"
            type="search"
            placeholder="Nazwa lub ulica"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <ActionGroup role="group" aria-label="Widok salonów">
          <Button
            ref={mapButtonRef}
            variant={view === "map" ? "primary" : "secondary"}
            aria-pressed={view === "map"}
            aria-controls="location-results"
            onClick={() => setView("map")}
          >
            Mapa
          </Button>
          <Button
            variant={view === "list" ? "primary" : "secondary"}
            aria-pressed={view === "list"}
            aria-controls="location-results"
            onClick={() => setView("list")}
          >
            Lista
          </Button>
        </ActionGroup>
      </div>
      <div id="location-results">
        {!selected ? (
          <p role="status">Brak wyników. Spróbuj wpisać inną nazwę lub ulicę.</p>
        ) : (
          <ul className={styles.locationList} hidden={view !== "list"}>
            {matches.map((location) => (
              <li key={location.id} className={styles.locationRow}>
                <div>
                  <Heading as="h3" size="title">{location.name}</Heading>
                  <address>Poznań, {location.address}</address>
                </div>
                <div>
                  <LocationDetails location={location} />
                </div>
                <ActionGroup>
                  <BookingLink location={location} />
                  <Button variant="secondary" onClick={() => showLocationOnMap(location.id)}>
                    Pokaż mapę
                  </Button>
                </ActionGroup>
              </li>
            ))}
          </ul>
        )}
        {selected && view === "map" && (
          <div className={styles.mapLayout}>
            <div className={styles.mapSidebar}>
              <ActionGroup className={styles.mapLocations} role="group" aria-label="Salony na mapie">
                {matches.map(({ id, name }) => (
                  <Button
                    key={id}
                    variant={selected.id === id ? "primary" : "secondary"}
                    aria-pressed={selected.id === id}
                    onClick={() => setSelectedId(id)}
                  >
                    {name}
                  </Button>
                ))}
              </ActionGroup>
              <div className={styles.mapDetails}>
                <Heading as="h3" size="title">{selected.name}</Heading>
                <address>Poznań, {selected.address}</address>
                <LocationDetails location={selected} />
                <ActionGroup>
                  <BookingLink location={selected} />
                </ActionGroup>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`SIMPLE Barbershop ${selected.address}, Poznań`)}`}>
                  Otwórz w Mapach Google
                </a>
              </div>
            </div>
            <iframe src={selected.mapUrl} title={`Mapa salonu SIMPLE – ${selected.name}`} loading="lazy" />
          </div>
        )}
      </div>
    </div>
  );
}
