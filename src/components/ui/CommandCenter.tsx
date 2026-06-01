import { motion } from "framer-motion";
import { Activity, Globe2, Radio, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

function ActivityGraph() {
  const [pts, setPts] = useState<number[]>(() => Array.from({ length: 40 }, () => Math.random() * 60 + 20));
  useEffect(() => {
    const id = setInterval(() => {
      setPts((p) => [...p.slice(1), Math.random() * 60 + 20]);
    }, 400);
    return () => clearInterval(id);
  }, []);
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${100 - v}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-32">
      <defs>
        <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#ag)" />
      <path d={path} fill="none" stroke="#00E5FF" strokeWidth="0.6" />
    </svg>
  );
}

function NeuralNetwork() {
  const nodes = Array.from({ length: 18 }, (_, i) => ({
    x: 10 + (i % 6) * 16 + (Math.floor(i / 6) % 2) * 4,
    y: 15 + Math.floor(i / 6) * 32,
  }));
  return (
    <svg viewBox="0 0 100 100" className="w-full h-44">
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 28) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="#8B5CF6" strokeOpacity={0.35} strokeWidth="0.3"
            />
          );
        })
      )}
      {nodes.map((n, i) => (
        <circle
          key={i} cx={n.x} cy={n.y} r="1.4"
          fill="#00E5FF"
          style={{
            filter: "drop-shadow(0 0 3px #00E5FF)",
            animation: `pulse 2s ${i * 0.1}s infinite`,
          }}
        />
      ))}
    </svg>
  );
}

function WorldMap() {
  const pts = [
    [22, 38], [30, 32], [48, 30], [55, 38], [60, 42],
    [70, 36], [78, 48], [40, 55], [50, 60], [25, 60], [82, 30],
  ];
  return (
    <svg viewBox="0 0 100 70" className="w-full h-36">
      {/* dotted globe */}
      {Array.from({ length: 30 }).map((_, r) =>
        Array.from({ length: 60 }).map((_, c) => {
          const x = (c / 60) * 100;
          const y = (r / 30) * 70;
          const inside =
            Math.sin(x * 0.15) * 5 + 35 > y && Math.cos(x * 0.1) * 8 + 30 < y + 20;
          return inside ? (
            <circle key={`${r}-${c}`} cx={x} cy={y} r="0.4" fill="#00E5FF" opacity="0.25" />
          ) : null;
        })
      )}
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="1.2" fill="#FF00AA" style={{ filter: "drop-shadow(0 0 4px #FF00AA)" }} />
          <circle cx={x} cy={y} r="3" fill="none" stroke="#FF00AA" strokeOpacity="0.6">
            <animate attributeName="r" from="1.2" to="5" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.8" to="0" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function Diagnostics() {
  const lines = ["[OK] Cortex sync stable", "[OK] Plasma core charged 98%", "[~] Calibrating servo array", "[OK] Neural mesh online", "[!] External signal detected", "[OK] Bio-link sync 99.7%"];
  return (
    <div className="font-mono-tech text-[10px] text-[#00E5FF] space-y-1">
      {lines.map((l, i) => (
        <div key={i} className={l.includes("!") ? "text-plasma" : ""}>
          <span className="text-white/40">{`> `}</span>{l}
        </div>
      ))}
    </div>
  );
}

const panels = [
  { title: "AI ACTIVITY", icon: Activity, comp: <ActivityGraph />, c: "#00E5FF" },
  { title: "NEURAL NETWORK", icon: Cpu, comp: <NeuralNetwork />, c: "#8B5CF6" },
  { title: "GLOBAL DEPLOYMENT", icon: Globe2, comp: <WorldMap />, c: "#FF00AA" },
  { title: "SYSTEM DIAGNOSTICS", icon: Radio, comp: <Diagnostics />, c: "#00E5FF" },
];

export default function CommandCenter() {
  return (
    <section className="relative py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono-tech text-[11px] tracking-[0.35em] text-plasma">▸ COMMAND CENTER</span>
          <h2 className="mt-3 font-display font-black text-4xl md:text-6xl text-white text-glow-neon">
            LIVE OPERATIONS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {panels.map((p, i) => (
            <motion.div
              key={p.title}
              data-cursor="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass holo-border rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <p.icon size={16} style={{ color: p.c }} />
                  <span className="font-mono-tech text-[11px] tracking-[0.25em]" style={{ color: p.c }}>
                    {p.title}
                  </span>
                </div>
                <span className="flex items-center gap-2 font-mono-tech text-[10px] text-white/50">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse-glow" />
                  LIVE
                </span>
              </div>
              {p.comp}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
