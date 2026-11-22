import type { Metadata } from "next";
import {
  ActionGroup,
  Badge,
  Button,
  ButtonLink,
  Card,
  Grid,
  Heading,
  Section,
  SectionHeader,
} from "@/components/ui";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: "Design System | SIMPLE Barbershop",
  robots: { index: false, follow: false },
};

export default function DesignSystemPreview() {
  return (
    <main lang="en">
      <Section id="start" aria-labelledby="preview-title">
        <div className={styles.flow}>
          <Badge dot variant="outline">
            SIMPLE · Architectural Design System
          </Badge>
          <Heading as="h1" size="display" id="preview-title">
            Design System
          </Heading>
          <p>
            Shared primitives, semantic tokens, and surface tones for SIMPLE Barbershop Poznań.
            Warm concrete neutrals (#F3F2EE / #E6E4DD), deep architectural pine green (#163026),
            and surgical coral-vermilion (#FF5E4C).
          </p>
          <ActionGroup>
            <ButtonLink href="#blocks">View blocks</ButtonLink>
            <ButtonLink href="#dark-surface" variant="secondary">
              Dark surface
            </ButtonLink>
            <ButtonLink href="#actions" variant="ghost">
              View actions
            </ButtonLink>
          </ActionGroup>
        </div>
      </Section>

      <Section tone="muted" id="blocks" aria-labelledby="blocks-title">
        <SectionHeader
          index="01"
          label="Components"
          title="Sections, cards & badges"
          titleId="blocks-title"
          lead="Crisp 1px hairline borders, 2px architectural radii, zero drop shadows."
        />
        <div className={styles.flow}>
          <div className={styles.badgeRow}>
            <Badge variant="neutral">Barber</Badge>
            <Badge variant="dark">Top Barber</Badge>
            <Badge variant="accent">Premium Barber</Badge>
            <Badge variant="outline" dot>
              Open 09:00–21:00
            </Badge>
          </div>
          <Grid>
            <Card>
              <Badge variant="outline">01 / Services</Badge>
              <Heading as="h3" size="title">
                Services
              </Heading>
              <p>Layout for a service description, duration, and tiered PLN pricing.</p>
            </Card>
            <Card>
              <Badge variant="outline">02 / Locations</Badge>
              <Heading as="h3" size="title">
                Locations
              </Heading>
              <p>Space for Poznań branch address, opening hours, rating, and booking action.</p>
            </Card>
            <Card>
              <Badge variant="outline">03 / Team</Badge>
              <Heading as="h3" size="title">
                Barbers
              </Heading>
              <p>Structured profile block for barber tier, branch tag, and direct booking.</p>
            </Card>
          </Grid>
        </div>
      </Section>

      <Section tone="dark" id="dark-surface" aria-labelledby="dark-title">
        <SectionHeader
          index="02"
          label="Pine Green Surface"
          title="Dark anchor tone"
          titleId="dark-title"
          lead="Deep architectural pine green (#163026) with elevated #1F4033 cards and #2A4D3E hairline borders."
        />
        <Grid>
          <Card>
            <Badge variant="accent">Highlight</Badge>
            <Heading as="h3" size="title">
              Elevated Dark Card
            </Heading>
            <p>
              Semantic surface tokens adapt automatically inside dark sections while preserving
              high-contrast legibility.
            </p>
          </Card>
          <Card>
            <Badge variant="outline" dot>
              Status
            </Badge>
            <Heading as="h3" size="title">
              Action Hierarchy
            </Heading>
            <ActionGroup>
              <Button size="sm">Primary CTA</Button>
              <Button size="sm" variant="secondary">
                Secondary
              </Button>
            </ActionGroup>
          </Card>
        </Grid>
      </Section>

      <Section id="actions" aria-labelledby="actions-title">
        <SectionHeader
          index="03"
          label="Controls"
          title="Buttons and links"
          titleId="actions-title"
          lead="Button for actions, ButtonLink for navigation destinations."
        />
        <div className={styles.flow}>
          <ActionGroup>
            <Button popoverTarget="action-example">Open example</Button>
            <ButtonLink href="#start" variant="secondary">
              Back to top
            </ButtonLink>
            <Button variant="ghost">Ghost action</Button>
            <Button size="sm">Small CTA</Button>
            <Button disabled>Disabled</Button>
          </ActionGroup>
          <div popover="auto" id="action-example" className={styles.popover}>
            <div className={styles.flow}>
              <p>A button performs an action, while a link navigates to another destination.</p>
              <Button
                popoverTarget="action-example"
                popoverTargetAction="hide"
                variant="secondary"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
