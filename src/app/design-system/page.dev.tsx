import type { Metadata } from "next";
import { ActionGroup, Button, ButtonLink, Card, Grid, Heading, Section } from "@/components/ui";
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
          <Heading as="h1" size="display" id="preview-title">
            Design System
          </Heading>
          <p>Preview of shared components for SIMPLE Barbershop.</p>
          <ActionGroup>
            <ButtonLink href="#blocks">View blocks</ButtonLink>
            <ButtonLink href="#actions" variant="secondary">View actions</ButtonLink>
          </ActionGroup>
        </div>
      </Section>

      <Section tone="muted" id="blocks" aria-labelledby="blocks-title">
        <div className={styles.flow}>
          <Heading id="blocks-title">Sections and blocks</Heading>
          <Grid>
            <Card>
              <Heading as="h3" size="title">Services</Heading>
              <p>Layout for a service description, duration, and price.</p>
            </Card>
            <Card>
              <Heading as="h3" size="title">Locations</Heading>
              <p>Space for an address, opening hours, and booking link.</p>
            </Card>
            <Card>
              <Heading as="h3" size="title">Team</Heading>
              <p>Block for a barber profile and their specialty.</p>
            </Card>
          </Grid>
        </div>
      </Section>

      <Section id="actions" aria-labelledby="actions-title">
        <div className={styles.flow}>
          <Heading id="actions-title">Buttons and links</Heading>
          <ActionGroup>
            <Button popoverTarget="action-example">Open example</Button>
            <ButtonLink href="#start" variant="secondary">Back to top</ButtonLink>
            <Button disabled>Disabled</Button>
          </ActionGroup>
          <div popover="auto" id="action-example" className={styles.popover}>
            <div className={styles.flow}>
              <p>A button performs an action, while a link navigates to another destination.</p>
              <Button popoverTarget="action-example" popoverTargetAction="hide" variant="secondary">
                Close
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
