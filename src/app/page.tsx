import type { Metadata } from "next";
import { Heading, Section } from "@/components/ui";
import styles from "./page.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main>
      <Section className={styles.main}>
        <Heading as="h1" size="display">SIMPLE Barbershop</Heading>
      </Section>
    </main>
  );
}
