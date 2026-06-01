import { motion } from "framer-motion";
import { Brain, Cpu, Bot, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const cards = [
  {
    icon: Brain,
    title: "NEURAL LINK",
    desc: "Seamless connection between human cognition and digital networks via biocompatible interfaces.",
    accent: "#00E5FF",
    cta: "CONNECT",
  },
  {
    icon: Bot,
    title: "BIONIC AUGMENTATION",
    desc: "Enhance your physical capabilities with next-gen bionic systems and reactive prosthetics.",
    accent: "#FF00AA",
    cta: "AUGMENT",
  },
  {
    icon: Cpu,
    title: "SYNTHETIC INTELLIGENCE",
    desc: "Autonomous systems engineered to think, learn and evolve beyond pre-programmed limits.",
    accent: "#8B5CF6",
    cta: "EVOLVE",
  },
];

function TiltCard({ c, i }: { c: (typeof cards)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      data-cursor="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.15, duration: 0.6 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setT({
          x: ((e.clientX - r.left) / r.width - 0.5) * 14,
          y: -((e.clientY - r.top) / r.height - 0.5) * 14,
        });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateY(${t.x}deg) rotateX(${t.y}deg)` }}
      className="relative group glass holo-border p-7 rounded-2xl overflow-hidden transition-all duration-300"
    >
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${c.accent}25, transparent 60%)`,
        }}
      />
      {/* corner brackets */}
      {[
        "top-2 left-2 border-t border-l",
        "top-2 right-2 border-t border-r",
        "bottom-2 left-2 border-b border-l",
        "bottom-2 right-2 border-b border-r",
      ].map((p) => (
        <span key={p} className={`absolute w-4 h-4 ${p}`} style={{ borderColor: c.accent }} />
      ))}

      <div className="relative">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: `linear-gradient(135deg, ${c.accent}30, transparent)`,
            border: `1px solid ${c.accent}66`,
            boxShadow: `0 0 24px ${c.accent}44`,
          }}
        >
          <c.icon size={26} style={{ color: c.accent }} />
        </div>
        <h3
          className="font-display font-bold text-xl tracking-wider mb-3"
          style={{ color: c.accent, textShadow: `0 0 14px ${c.accent}88` }}
        >
          {c.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">{c.desc}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.25em] hover:gap-3 transition-all"
          style={{ color: c.accent }}
          data-cursor="link"
        >
          <ArrowRight size={14} /> {c.cta}
        </a>

        {/* base glow */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-12 rounded-full blur-2xl opacity-60"
          style={{ background: c.accent }}
        />
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section id="tech" className="relative py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-plasma" />
            <span className="font-mono-tech text-[11px] tracking-[0.35em] text-plasma">
              ◆ CORE TECHNOLOGIES ◆
            </span>
            <span className="w-12 h-px bg-plasma" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl md:text-6xl tracking-tight text-white text-glow-neon"
          >
            ENGINEERED FOR EVOLUTION
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <TiltCard key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
