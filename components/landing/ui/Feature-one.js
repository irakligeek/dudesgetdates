import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import bad_texting from "@/public/texting/bad-texting_2.png";

const FeatureOne = () => {
  return (
    <Section id="the-dating-problem" className="border-t">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="!my-0">Men's Struggle with Modern Dating</h2>
          <p className="font-normal leading-[1.7] text-muted-foreground text-lg">
            Have you ever matched with a beautiful girl on a dating app,
            only for it to go nowhere?
            Maybe the conversation started strong, but later she
            ghosted you? 
            Or perhaps you met a girl in person, got her number, 
            but then felt lost on what to text and how to ask her out?
            This is a common experience for many men.
            Navigating today's dating scene is tough, especially for men and
            getting dates can feel nearly impossible. Being a nice guy and 
            "just be yourself" advice doesn't work. Then what is the solution?
          </p>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg">
          <Image
            src={bad_texting}
            alt="placeholder"
            quality={100}
            placeholder="blur"
            alt="Bad Texting examples"
            loading="lazy"
            className="fill object-contain"
            fill={true}
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureOne;
