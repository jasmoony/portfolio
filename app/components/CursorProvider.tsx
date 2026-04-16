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

const MAX_ACTIVE = 7;

export default function CursorProvider() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCount = useRef(0);
  const lastSpawn = useRef(0);

  const emoji = EMOJI_MAP[pathname] || "☁️";

  const spawnEmoji = useCallback(
    (x: number, y: number) => {
      if (activeCount.current >= MAX_ACTIVE) return;
      const now = Date.now();
      if (now - lastSpawn.current < 80) return;
      lastSpawn.current = now;

      const el = document.createElement("span");
      el.textContent = emoji;
      el.setAttribute("aria-hidden", "true");
      el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 24px;
        font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
        pointer-events: none;
        z-index: 9998;
        will-change: transform, opacity;
        transform: rotate(${Math.random() * 30 - 15}deg) scale(1);
        opacity: 1;
        transition: transform 600ms ease-out, opacity 600ms ease-out;
      `;

      containerRef.current?.appendChild(el);
      activeCount.current++;

      requestAnimationFrame(() => {
        el.style.transform = `rotate(${Math.random() * 30 - 15}deg) scale(0.8) translateY(-${20 + Math.random() * 15}px)`;
        el.style.opacity = "0";
      });

      setTimeout(() => {
        el.remove();
        activeCount.current--;
      }, 620);
    },
    [emoji]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Desktop only
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      spawnEmoji(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [spawnEmoji]);

  return <div ref={containerRef} className="fixed inset-0 z-[9998] pointer-events-none" />;
}
