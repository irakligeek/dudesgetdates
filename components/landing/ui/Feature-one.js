import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const FeatureOne = () => {
  return (
    <Section id="the-dating-problem" className="border-t">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h2 className="!my-0">The Problem</h2>
          <p className="font-normal leading-[1.7] text-muted-foreground text-lg">
            Have you ever matched with a <b>beautiful girl</b> on a dating app,
            only for it to go nowhere?
            <br />
            Maybe the conversation started strong, but later she{" "}
            <b>ghosted you?</b>
            <br />
            Or perhaps you met a girl in person, got her number, but then felt <b>lost on what to text and how to ask her out?</b>
            This is a common experience for many men, myself included.
            <br />
            <b>Navigating today's dating scene is tough, especially for men and
            getting dates can feel nearly impossible.</b>
          </p>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureOne;
