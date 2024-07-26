"use client";
// React and Next.js imports
import Image from "next/image";

// UI component imports
import * as Craft from "@/components/craft";

// Asset imports
import CarouselSlides from "./Caoursel";

const FeatureSix = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-3 md:gap-12 ">
        <div className="flex flex-col gap-6 py-8 col-span-2">
          <h2 className="!my-0"> See the Results for Yourself</h2>
          <p className="font-normal leading-[1.7] text-muted-foreground text-lg">
            Check out some of the successful interactions I've had in the past
            with women, to smoothly lead the conversation and get dates using
            the AI techniques I've developed, paired with my years of experience
            interacting with women, learning from my mistakes and fine-tuning
            my texting techniques. You'll be amazed at how effortlessly you can
            turn texts dates.
          </p>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border col-span-1">
          <CarouselSlides />
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureSix;
