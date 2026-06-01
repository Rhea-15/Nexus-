import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, Box, Users, Infinity as Inf } from "lucide-react";

const items = [
  { icon: Activity, value: 99.7, suffix: "%", label: "SYSTEM STABILITY", c: "#00E5FF" },
  { icon: Box, value: 2047, suffix: "+", label: "UNITS DEPLOYED", c: "#FF00AA" },
  { icon: Users, value: 12, suffix: "K+", label: "INNOVATORS CONNECTED", c: "#8B5CF6" },
  { icon: Inf, value: -1, suffix: "", label: "POSSIBILITIES AHEAD", c: "#00E5FF" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || target < 0) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  if (target < 0) return <span ref={ref}>∞</span>;
  const decimal = target % 1 !== 0;
  return (
    <span ref={ref}>
      {decimal ? n.toFixed(1) : Math.floor(n).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass holo-border rounded-2xl p-6 md:p-10 relative overflow-hidden">
          {/* corner brackets */}
          {["top-3 left-3 border-t border-l","top-3 right-3 border-t border-r","bottom-3 left-3 border-b border-l","bottom-3 right-3 border-b border-r"].map(p=>(
            <span key={p} className={`absolute w-5 h-5 ${p} border-[#00E5FF]`} />
          ))}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    border: `1px solid ${it.c}`,
                    boxShadow: `0 0 18px ${it.c}55, inset 0 0 18px ${it.c}33`,
                  }}
                >
                  <it.icon size={22} style={{ color: it.c }} />
                </div>
                <div>
                  <div
                    className="font-display font-black text-3xl md:text-4xl leading-none"
                    style={{ color: "#fff", textShadow: `0 0 16px ${it.c}aa` }}
                  >
                    <Counter target={it.value} suffix={it.suffix} />
                  </div>
                  <div className="font-mono-tech text-[10px] tracking-[0.25em] text-white/60 mt-2">
                    {it.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
