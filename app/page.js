import { Main } from "@/components/craft";
import Hero from "@/components/landing/ui/Hero";
import FeatureOne from "@/components/landing/ui/Feature-one";
import FeatureTwo from "@/components/landing/ui/Feature-two";
import FeatureThree from "@/components/landing/ui/Feature-three";
import FeatureFour from "@/components/landing/ui/Feature-four";
import FeatureFive from "@/components/landing/ui/Feature-five";
import FeatureSix from "@/components/landing/ui/Feature-six";
import FeattureSeven from "@/components/landing/ui/Feature-seven";
import FeatureEight from "@/components/landing/ui/Feature-eight";
import FeatureNine from "@/components/landing/ui/Feature-nine";

export default function Home() {
  return (
    <Main>
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureEight />
      <FeatureSix />
      <FeatureFive />
      <FeattureSeven />
      <FeatureNine />
      <FeatureFour />
    </Main>
  );
}
