import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  // generate background nodes
  const nodes = Array.from({ length: 40 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    d: Math.random() * 2 + 1,
    k: i,
  }));
  return (
    <section id="cta" className="relative py-32 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
        {nodes.map((n) =>
          nodes
            .filter((m) => Math.hypot(n.x - m.x, n.y - m.y) < 20 && m.k !== n.k)
            .map((m) => (
              <line key={`${n.k}-${m.k}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="#00E5FF" strokeOpacity="0.18" strokeWidth="0.1" />
            ))
        )}
        {nodes.map((n) => (
          <circle key={n.k} cx={n.x} cy={n.y} r={n.d * 0.2} fill="#00E5FF" opacity="0.7" />
        ))}
      </svg>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-tech text-[11px] tracking-[0.35em] text-plasma">◆ INITIATE PROTOCOL ◆</span>
          <h2 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white text-glow-neon animate-glitch">
            THE NEXT<br />
            <span className="text-plasma text-glow-plasma">EVOLUTION</span><br />
            STARTS HERE
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-white/70">
            Join the most ambitious cohort of innovators, engineers and futurists
            shaping the boundary between man and machine.
          </p>
          <a
            href="#"
            data-cursor="button"
            className="mt-10 inline-flex items-center gap-3 px-10 py-5 font-mono-tech text-sm tracking-[0.3em] text-black bg-[#00E5FF] hover:bg-plasma hover:text-white transition-colors duration-300 animate-pulse-glow"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 70%, 92% 100%, 0 100%, 0 30%)" }}
          >
            ENTER THE FUTURE <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
