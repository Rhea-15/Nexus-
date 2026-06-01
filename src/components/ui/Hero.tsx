import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import cyborg from "@/assets/cyborg-hero.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: x * 14, y: -y * 14 });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden pt-28 pb-16 px-5 md:px-8"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none scanlines" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-plasma" />
            <Sparkles size={14} className="text-plasma" />
            <span className="font-mono-tech text-[11px] tracking-[0.35em] text-plasma">
              NEXUS PRESENTS
            </span>
          </motion.div>

          <h1 className="font-display font-black text-[14vw] sm:text-[10vw] lg:text-[6.5vw] leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="block text-white text-glow-neon animate-glitch"
            >
              EVOLUTION
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="block text-plasma text-glow-plasma animate-glitch"
              style={{ animationDelay: "1s" }}
            >
              BEYOND
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="block text-white text-glow-neon"
            >
              HUMAN
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 font-mono-tech text-xs tracking-[0.25em] text-[#00E5FF]"
          >
            UPGRADE.&nbsp;&nbsp;ADAPT.&nbsp;&nbsp;TRANSCEND.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-5 max-w-md text-white/70 leading-relaxed text-[15px]"
          >
            Where human intelligence meets synthetic evolution. Explore the
            future of neural augmentation, AI systems, cybernetic integration
            and next-generation innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#cta"
              data-cursor="button"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-transparent border border-[#00E5FF] text-[#00E5FF] font-mono-tech text-xs tracking-[0.25em] relative overflow-hidden animate-pulse-glow"
              style={{ clipPath: "polygon(8% 0, 100% 0, 100% 70%, 92% 100%, 0 100%, 0 30%)" }}
            >
              <span className="relative z-10">JOIN THE FUTURE</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition" />
              <span className="absolute inset-0 bg-[#00E5FF] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="absolute inset-0 mix-blend-difference text-black opacity-0 group-hover:opacity-100" />
            </a>
            <a
              href="#tech"
              data-cursor="button"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white/80 hover:text-white font-mono-tech text-xs tracking-[0.25em] border border-white/20 hover:border-plasma hover:shadow-[0_0_20px_#FF00AA66] transition-all"
            >
              EXPLORE TECHNOLOGIES
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex items-center gap-3 text-white/40"
          >
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#00E5FF] rounded animate-bounce" />
            </div>
            <span className="font-mono-tech text-[10px] tracking-[0.3em] text-plasma">SCROLL DOWN</span>
          </motion.div>
        </div>

        {/* RIGHT - Cyborg */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-xl mx-auto w-full"
          style={{ perspective: "1200px" }}
        >
          {/* Rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[110%] h-[110%] border border-[#00E5FF]/30 rounded-full animate-spin-slow" />
            <div className="absolute w-[95%] h-[95%] border border-dashed border-plasma/30 rounded-full animate-spin-reverse" />
            <div className="absolute w-[80%] h-[80%] border border-violet-neon/40 rounded-full" style={{ borderColor: "#8B5CF655" }} />
          </div>

          {/* Image with tilt */}
          <motion.div
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-4 holo-border overflow-hidden">
              <img
                src={cyborg}
                alt="Cyborg portrait"
                width={1024}
                height={1024}
                className="w-full h-full object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05060A] via-transparent to-[#FF00AA]/10 mix-blend-screen" />
              {/* Scan beam */}
              <div className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent animate-scan-beam pointer-events-none" />
            </div>
          </motion.div>

          {/* HUD widgets */}
          <div className="absolute top-4 right-2 glass px-3 py-2 rounded font-mono-tech text-[9px] text-[#00E5FF] tracking-widest animate-float">
            <div>SYS_2K26</div>
            <div className="text-plasma mt-1">CYBORG UNIT</div>
            <div className="text-white/60">25A-X7</div>
          </div>
          <div className="absolute bottom-6 left-0 glass px-3 py-2 rounded font-mono-tech text-[9px] tracking-widest">
            <div className="text-plasma">◉ NEURAL SYNC</div>
            <div className="text-[#00E5FF] mt-1">99.7%</div>
          </div>
          <div className="absolute top-1/2 -left-2 glass px-2 py-3 rounded font-mono-tech text-[9px] writing-mode-vertical text-[#00E5FF] hidden md:block">
            BIO-LINK ACTIVE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
