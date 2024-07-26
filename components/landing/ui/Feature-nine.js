"use client";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeatureNine() {
  return (
    <Section className="border-t bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="">How it works</h2>
        <div className="flex justify-center gap-12 flex-col md:flex-row">
          <div className="flex flex-col items-center">
            <div className="mb-4 font-bold rounded-full bg-teal text-white w-12 h-12 flex items-center justify-center">
              1
            </div>

            <p className="max-w-sm text-muted-foreground">
              <Balancer>
                Provide the text you received from a girl, or generate a
                meaningful opener from scratch.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 font-bold rounded-full bg-teal text-white w-12 h-12 flex items-center justify-center">
              2
            </div>
            <p className="max-w-sm text-muted-foreground">
              <Balancer>
                Use custom-trained AI to generate responses that guide the
                conversation towards asking her out.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 font-bold rounded-full bg-teal text-white w-12 h-12 flex items-center justify-center">
              3
            </div>
            <p className="max-w-sm text-muted-foreground">
              <Balancer>
                Or, submit your text for a revamped, creative version that keeps
                your essential points intact.
              </Balancer>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FeatureNine;
