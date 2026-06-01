import { createFileRoute } from "@tanstack/react-router";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Stats from "@/components/Stats";
import EvolutionJourney from "@/components/EvolutionJourney";
import Marquee from "@/components/Marquee";
import CommandCenter from "@/components/CommandCenter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXUS — Evolution Beyond Human" },
      { name: "description", content: "Where human intelligence meets synthetic evolution. Neural augmentation, AI systems and cybernetic innovation." },
      { property: "og:title", content: "NEXUS — Evolution Beyond Human" },
      { property: "og:description", content: "Cyborg Evolution. Upgrade. Adapt. Transcend." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-[#05060A] text-white overflow-hidden">
      <CustomCursor />
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Technologies />
        <Stats />
        <EvolutionJourney />
        <Marquee />
        <CommandCenter />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
