import { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "button" | "card" | "image" | "link";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [hidden, setHidden] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // touch device check
    if (window.matchMedia("(hover: none)").matches) {
      setHidden(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const detectVariant = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("[data-cursor='button'], button, .cursor-button"))
        setVariant("button");
      else if (el.closest("[data-cursor='card'], .cursor-card"))
        setVariant("card");
      else if (el.closest("img, [data-cursor='image']"))
        setVariant("image");
      else if (el.closest("a, [data-cursor='link']"))
        setVariant("link");
      else setVariant("default");
    };

    const onClick = (e: MouseEvent) => {
      const r = document.createElement("div");
      r.className = "fixed pointer-events-none z-[9999] rounded-full";
      r.style.cssText = `left:${e.clientX - 4}px;top:${e.clientY - 4}px;width:8px;height:8px;border:2px solid #00E5FF;animation:ripple 0.7s ease-out forwards;box-shadow:0 0 20px #00E5FF;`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 700);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", detectVariant);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("click", onClick);

    let raf = 0;
    const loop = () => {
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.45;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.15;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      if (labelRef.current)
        labelRef.current.style.transform = `translate3d(${ringPos.current.x + 24}px, ${ringPos.current.y + 24}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const style = document.createElement("style");
    style.textContent = `@keyframes ripple { to { width: 80px; height: 80px; left: ${0}; top:${0}; opacity: 0; transform: translate(-36px,-36px); } }`;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", detectVariant);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      style.remove();
    };
  }, []);

  if (hidden) return null;

  const ringSize =
    variant === "button" ? 60 :
    variant === "card" ? 70 :
    variant === "image" ? 56 : 36;

  const ringColor =
    variant === "card" ? "#FF00AA" :
    variant === "image" ? "#8B5CF6" : "#00E5FF";

  const label =
    variant === "button" ? "ACTIVATE" :
    variant === "image" ? "EXPLORE" :
    variant === "card" ? "SCAN" : "";

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: 8, height: 8,
          background: "#00E5FF",
          boxShadow: "0 0 12px #00E5FF, 0 0 24px #00E5FF",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-[width,height,border-color] duration-200"
        style={{
          width: ringSize, height: ringSize,
          border: `1px solid ${ringColor}`,
          boxShadow: `0 0 18px ${ringColor}55`,
          backdropFilter: "blur(2px)",
          willChange: "transform",
        }}
      >
        {variant === "card" && (
          <div className="absolute inset-0 rounded-full border border-dashed border-[#FF00AA] animate-spin-slow" />
        )}
      </div>
      {label && (
        <div
          ref={labelRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono-tech text-[10px] tracking-widest px-2 py-1 rounded"
          style={{
            color: ringColor,
            background: "rgba(5,6,10,0.7)",
            border: `1px solid ${ringColor}`,
            willChange: "transform",
          }}
        >
          {label}
        </div>
      )}
    </>
  );
}
