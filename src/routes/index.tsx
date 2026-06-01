import { createFileRoute } from "@tanstack/react-router";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleField from "@/components/ui/ParticleField";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Technologies from "@/components/ui/Technologies";
import Stats from "@/components/ui/Stats";
import EvolutionJourney from "@/components/ui/EvolutionJourney";
import Marquee from "@/components/ui/Marquee";
import CommandCenter from "@/components/ui/CommandCenter";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/ui/Footer";

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
