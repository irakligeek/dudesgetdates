"use client";
// React and Next.js imports
import Image from "next/image";
// import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";
import CarouselSlides from "./Caoursel";

const FeatureThree = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-3 md:gap-12 ">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border col-span-1">
          <CarouselSlides />
        </div>
        <div className="flex flex-col gap-6 py-8 col-span-2">
          <h2 className="!my-0">My Journey and Discovery</h2>
          <p className="font-normal leading-[1.7] text-muted-foreground text-lg">
            After years of frustration and trial and error in the dating scene,
            I've finally figured it out. I've learned how to smoothly lead
            conversations to in-person meetings and have experienced significant
            success in dating in recent years. My goal is to help other men
            achieve the same success. The key is mastering the subtle nuances of
            online and phone communication. The words you choose and your
            creativity in engaging her emotions are your most powerful tools.
          </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureThree;
