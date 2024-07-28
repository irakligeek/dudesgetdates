"use client";

// import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsletterForm from "./Newsletter-form";
import { Section, Container } from "@/components/craft";

export default function Hero() {
  return (
    <Section className="overflow-hidden relative bg-primary-foreground">
      <Container className="z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="">
            <Balancer>
              Turn Boring Texts Into{" "}
              <span className="text-primary">Real Dates</span>
            </Balancer>
          </h1>
          <h3 className="max-w-lg">
            <Balancer>
              Join the waitlist to turn your texting frustrations into exciting,
              romantic connections!
            </Balancer>
          </h3>

          <NewsletterForm />
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
        </div>
      </Container>
    </Section>
  );
}
