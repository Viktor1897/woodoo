import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SIMPLE Barbershop</h1>
    </main>
  );
}
