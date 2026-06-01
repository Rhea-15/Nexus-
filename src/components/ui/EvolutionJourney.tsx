import { motion } from "framer-motion";
import { User, UserCheck, Network, Bot, Atom } from "lucide-react";

const stages = [
  { icon: User, label: "HUMAN", c: "#00E5FF" },
  { icon: UserCheck, label: "ENHANCED HUMAN", c: "#00E5FF" },
  { icon: Network, label: "NEURAL CONNECTED", c: "#8B5CF6" },
  { icon: Bot, label: "CYBERNETIC ENTITY", c: "#FF00AA" },
  { icon: Atom, label: "SYNTHETIC EVOLUTION", c: "#FF00AA" },
];

export default function EvolutionJourney() {
  return (
    <section id="journey" className="relative py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono-tech text-[11px] tracking-[0.35em] text-[#00E5FF]">
            ▸ TIMELINE
          </span>
          <h2 className="mt-3 font-display font-black text-4xl md:text-6xl text-white text-glow-neon">
            THE EVOLUTION JOURNEY
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute top-10 left-0 right-0 h-px hidden md:block">
            <svg className="w-full h-2" preserveAspectRatio="none" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="100" y2="1" stroke="url(#g1)" strokeWidth="0.4" strokeDasharray="2 1" className="animate-dash" />
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#FF00AA" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
            {stages.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center glass mb-4"
                  style={{
                    boxShadow: `0 0 30px ${s.c}66, inset 0 0 20px ${s.c}33`,
                    border: `1px solid ${s.c}`,
                  }}
                >
                  <s.icon size={28} style={{ color: s.c }} />
                  <div className="absolute -inset-2 rounded-full border border-dashed animate-spin-slow" style={{ borderColor: `${s.c}55` }} />
                </div>
                <div className="font-mono-tech text-[10px] tracking-[0.25em] text-white/50">
                  STAGE 0{i + 1}
                </div>
                <div className="font-display font-bold text-sm mt-1" style={{ color: s.c }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
