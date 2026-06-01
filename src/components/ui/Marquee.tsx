const words = [
  "ARTIFICIAL INTELLIGENCE",
  "MACHINE LEARNING",
  "ROBOTICS",
  "CYBERNETICS",
  "NEURAL INTERFACES",
  "QUANTUM COMPUTING",
  "IOT",
  "BIOMETRICS",
  "SYNTHETIC BIOLOGY",
  "FUTURE SYSTEMS",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="relative py-8 border-y border-[#00E5FF]/20 overflow-hidden glass">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span
              className={`font-display font-bold text-lg md:text-2xl tracking-widest ${
                i % 2 ? "text-plasma text-glow-plasma" : "text-[#00E5FF] text-glow-neon"
              }`}
            >
              {w}
            </span>
            <span className="w-2 h-2 rotate-45 bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />
          </div>
        ))}
      </div>
    </section>
  );
}
