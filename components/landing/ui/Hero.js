"use client";

// import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowDown, ArrowRight } from "lucide-react";
// UI Components
import { Button } from "@/components/ui/button";
import NewsletterForm from "./Newsletter-form";
import { Section, Container } from "@/components/craft";

export default function Hero() {
  return (
    <Section className="border-b bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="">
            <Balancer>
              Turn Boring Texts Into{" "}
              <span className="text-primary">Real Dates</span>
            </Balancer>
          </h1>
          <h3 className="text-foreground text-base font-normal">
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
