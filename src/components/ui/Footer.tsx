import { Mail, Phone, MapPin, Share2, Send, Globe, Rss } from "lucide-react";
const Instagram = Globe;
const Twitter = Send;
const Linkedin = Share2;
const Youtube = Rss;

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-16 pb-8 px-5 md:px-8 glass border-t border-[#00E5FF]/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 border border-[#00E5FF] rotate-45" />
              <div className="absolute inset-1 bg-[#00E5FF]/20 rotate-45" />
            </div>
            <div>
              <div className="font-display font-black text-lg tracking-widest text-white">
                NEXUS<span className="text-plasma ml-1 text-xs align-top">2K26</span>
              </div>
              <div className="font-mono-tech text-[9px] tracking-[0.3em] text-[#00E5FF]/80">CYBORG EVOLUTION</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Pushing the boundaries of technology and humanity. Be part of the evolution.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                data-cursor="link"
                className="w-9 h-9 flex items-center justify-center border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition rounded"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs tracking-[0.3em] text-plasma mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 font-mono-tech text-[11px] tracking-widest text-white/70">
            {["HOME", "ABOUT", "TECHNOLOGIES", "INNOVATION", "STATS", "CONTACT"].map((l) => (
              <li key={l}><a href="#" data-cursor="link" className="hover:text-[#00E5FF]">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs tracking-[0.3em] text-plasma mb-4">CONTACT US</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail size={14} className="text-[#00E5FF]" /> nexus@evolution.io</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-[#00E5FF]" /> +1 555 0199 247</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-[#00E5FF]" /> Neo Tokyo · Sector 7</li>
          </ul>
        </div>

        <div>
          <div className="glass-strong rounded-lg p-4 border border-[#00E5FF]/30">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tech text-[10px] tracking-[0.3em] text-white/60">SYSTEM STATUS</span>
              <span className="flex items-center gap-2 font-mono-tech text-[10px] text-[#00E5FF]">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse-glow" /> ONLINE
              </span>
            </div>
            <svg viewBox="0 0 100 30" className="w-full h-12">
              <path
                d="M 0 15 L 20 15 L 24 5 L 28 25 L 32 10 L 36 20 L 40 15 L 100 15"
                fill="none" stroke="#FF00AA" strokeWidth="1"
                style={{ filter: "drop-shadow(0 0 4px #FF00AA)" }}
              >
                <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
            <div className="grid grid-cols-2 gap-2 mt-2 font-mono-tech text-[10px] text-white/60">
              <div>BPM <span className="text-plasma">72</span></div>
              <div>SYNC <span className="text-[#00E5FF]">99.7%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 font-mono-tech text-[10px] tracking-[0.25em] text-white/40">
        <div>© 2026 NEXUS. ALL RIGHTS RESERVED.</div>
        <div>DESIGNED FOR THE FUTURE. BUILT BY INNOVATORS.</div>
      </div>
    </footer>
  );
}
