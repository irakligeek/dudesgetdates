import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
import NewsletterForm from "./Newsletter-form";

export function CTA() {
  // bg-teal text-offWhite
  return (
    <Section className="bg-primary-foreground border-t" id="newsletter-footer">
      <Container className="space-y-8">
        <h3 className="mb-2 text-3xl font-black">Add Me To The Waitlist</h3>
        <p className="text-lg text-muted-foreground !my-0">
          <Balancer>
            Don't miss out! Be the first to hear when this goes live
          </Balancer>
        </p>
        <div className="max-w-sm not-prose">
          <NewsletterForm/>
        </div>
      </Container>
    </Section>
  );
}

const FeatureFour = () => {
  return <CTA />;
};

export default FeatureFour;
