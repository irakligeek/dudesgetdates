"use client";

// import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsletterForm from "./Newsletter-form";
import { Section, Container } from "@/components/craft";
import ImageGrid from "./ImageGrid";

export default function Hero() {
  return (
    <Section className="overflow-hidden relative">
      <Container className="z-10 grid md:grid-cols-2 md:gap-6">
        <div className="md:space-x-4 self-center">
          <div className="flex-1 md:flex-none">
            <Button
              asChild
              className="not-prose mb-6 flex w-fit"
              size="sm"
              variant="outline"
            >
              <Link href="#the-problem">
                Show me how <ArrowDown className="ml-2 w-4" />
              </Link>
            </Button>
            <h1>
              <Balancer>
                Turn Boring Texts Into{" "}
                <span className="text-primary">Real Dates</span>
              </Balancer>
            </h1>
            <h3 className="max-w-lg font-normal text-lg">
              <Balancer>
                Join the waitlist to turn your texting frustrations into
                exciting, romantic connections!
              </Balancer>
            </h3>

            <NewsletterForm />
          </div>
        </div>
        <div className="flex-1 md:flex-none">
          <ImageGrid />
        </div>
      </Container>
    </Section>
  );
}
