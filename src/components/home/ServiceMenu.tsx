"use client";

import { useState } from "react";
import { ActionGroup, Button, Heading } from "@/components/ui";
import { serviceCategories } from "@/content/home";
import styles from "./home.module.css";

export function ServiceMenu() {
  const [category, setCategory] = useState(serviceCategories[0].label);

  return (
    <div className={styles.stack}>
      <ActionGroup className={styles.serviceCategories} role="group" aria-label="Kategorie usług">
        {serviceCategories.map(({ label }) => (
          <Button
            key={label}
            variant={category === label ? "primary" : "secondary"}
            aria-pressed={category === label}
            aria-controls="service-results"
            onClick={() => setCategory(label)}
          >
            {label}
          </Button>
        ))}
      </ActionGroup>
      <div id="service-results" aria-live="polite">
        <div className={styles.serviceHeader} aria-hidden="true">
          <span>Usługa</span>
          <span>Cena</span>
        </div>
        {serviceCategories.map(({ label, services }) => (
          <ul key={label} className={styles.serviceList} aria-label={label} hidden={category !== label}>
            {services.map(({ name, description, price }) => (
              <li key={name} className={styles.serviceRow}>
                <div>
                  <Heading as="h3" size="title">{name}</Heading>
                  <p>{description}</p>
                </div>
                <span className={styles.price}>od {price} zł</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
