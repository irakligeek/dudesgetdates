// React and Next.js imports
import Image from "next/image";
import { Section, Container } from "@/components/craft";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const FeatureSeven = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-5 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border md:col-span-3">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8 md:col-span-2">
          <h2 className="!my-0">Why Dudes Get Dates</h2>
          <p className="font-normal leading-[1.7] text-muted-foreground text-lg">
            I understand how frustrating it can be for{" "}
            <b>dudes to score dates nowadays</b>, but with this{" "}
            <b>AI-powered tool</b>, you can significantly increase your chances
            of meeting the woman of your dreams.
            <br />
            By maintaining fun, engaging conversations, you can transition your
            text exchange into <b>fun, romantic dates</b>.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSeven;
