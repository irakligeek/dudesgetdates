// React and Next.js imports
// import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
// import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";

const FeatureTwo = () => {
  return (
    <Section className="px-4 bg-gradient-to-br from-primary to-primary/70 text-offWhite border-y">
      <Container className="text-zinc-200 text-center ">
        <h2 className="text-zinc-200">The Real Goal Of Texting</h2>
        <p className="text-lg">
          <Balancer className="">
            The ultimate goal of texting and communicating with a girl is to
            meet up in person, where real connections and attraction can happen.
            Whether you're looking for a relationship, marriage or short-term
            fun, meeting in person is where things truly begin. 
            <br />You should aim
            to go on as many dates as possible until you meet someone special,
            improve your dating skills, or figure out the type of woman you want
            to be with. Whether you're looking for casual fun, self-improvement,
            or a future partner, leading the conversation towards an in-person
            meeting is the essential step.
          </Balancer>
        </p>
      </Container>
    </Section>
  );
};

export default FeatureTwo;
