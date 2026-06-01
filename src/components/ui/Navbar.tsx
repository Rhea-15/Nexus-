import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "TECHNOLOGIES", href: "#tech" },
  { label: "INNOVATION", href: "#journey" },
  { label: "STATS", href: "#stats" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" data-cursor="link">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 border border-[#00E5FF] rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
            <div className="absolute inset-1 bg-[#00E5FF]/20 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse-glow" />
            </div>
          </div>
          <div className="leading-none">
            <div className="font-display font-black text-lg tracking-widest text-white">
              NEXUS<span className="text-plasma ml-1 text-xs align-top">2K26</span>
            </div>
            <div className="font-mono-tech text-[9px] tracking-[0.3em] text-[#00E5FF]/80">
              CYBORG EVOLUTION
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                data-cursor="link"
                className="font-mono-tech text-[11px] tracking-[0.25em] text-white/70 hover:text-[#00E5FF] transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-2 h-px w-0 group-hover:w-full bg-[#00E5FF] transition-all duration-300 shadow-[0_0_8px_#00E5FF]" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          data-cursor="button"
          className="hidden md:inline-flex items-center px-5 py-2.5 font-mono-tech text-[11px] tracking-[0.25em] text-[#00E5FF] border border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all duration-300 hover:shadow-[0_0_24px_#00E5FF] relative"
          style={{ clipPath: "polygon(8% 0, 100% 0, 100% 70%, 92% 100%, 0 100%, 0 30%)" }}
        >
          REGISTER NOW
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          data-cursor="button"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong mx-4 mt-3 p-6 rounded-lg"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-tech text-xs tracking-widest text-white/80 hover:text-[#00E5FF]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 px-4 py-2 text-[#00E5FF] border border-[#00E5FF] font-mono-tech text-xs tracking-widest"
              >
                REGISTER NOW
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
