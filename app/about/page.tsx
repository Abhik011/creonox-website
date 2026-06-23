import AboutHero from "@/components/about/about-hero";
import WhyCreonox from "@/components/about/why-creonox";
import Founder from "@/components/sections/founder";
import Principles from "@/components/about/principles";
import CTA from "@/components/sections/cta";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <WhyCreonox />
      <Founder variant="about" />
      <Principles />
       <CTA variant="about" />
    </main>
  );
}