"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const EMOJI_MAP: Record<string, string> = {
  "/": "☁️",
  "/projects/boekhoek": "📚",
  "/projects/huphup": "👟",
  "/projects/taylor-swift": "✨",
  "/projects/mixtapes": "🎵",
  "/contactform": "💌",
};

export default function TapBurst() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTap = useRef(0);

  const emoji = EMOJI_MAP[pathname] || "☁️";

  const burst = useCallback(
    (x: number, y: number) => {
      const now = Date.now();
      if (now - lastTap.current < 400) return;
      lastTap.current = now;

      const count = 3 + Math.floor(Math.random() * 3);

      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.textContent = emoji;
        el.setAttribute("aria-hidden", "true");

        const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25);
        const dist = 30 + Math.random() * 25;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        el.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          font-size: 20px;
          font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
          pointer-events: none;
          z-index: 9998;
          will-change: transform, opacity;
          transform: scale(1) translate(0, 0) rotate(${Math.random() * 30 - 15}deg);
          opacity: 1;
          transition: transform 500ms ease-out, opacity 500ms ease-out;
        `;

        containerRef.current?.appendChild(el);

        requestAnimationFrame(() => {
          el.style.transform = `scale(0.6) translate(${dx}px, ${dy - 10}px) rotate(${Math.random() * 30 - 15}deg)`;
          el.style.opacity = "0";
        });

        setTimeout(() => el.remove(), 520);
      }
    },
    [emoji]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Mobile only
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) return;

    const onTouch = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      // Don't fire on interactive elements
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        return;
      }

      const touch = e.changedTouches[0];
      if (touch) {
        burst(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, [burst]);

  return <div ref={containerRef} className="fixed inset-0 z-[9998] pointer-events-none" />;
}
