"use client";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeatureFive() {
  return (
    <Section className=" bg-primary-foreground border-y">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="!my-0">DudesGetDates - Coming Soon</h2>
        <p className="text-lg text-muted-foreground">
          <Balancer>
            Using all this knowledge and experience, I am now developing bran{" "}
            <b>AI powered tool</b> to help you avoid ghosting, dead
            conversations, and turn boring texts into real, fun dates!
            <br />
            This isn't just another ChatGPT clone.
            This is a <b>custom-trained AI model,</b><br /> crafted from years of my
            own expertise in turning text conversations into{" "}
            <b>successful dates</b>.
          </Balancer>
        </p>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">Sign me up!</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default FeatureFive;
