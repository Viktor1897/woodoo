import type { Metadata } from "next";
import { SimpleSite } from "@/components/simple/SimpleSite";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <SimpleSite />;
}
