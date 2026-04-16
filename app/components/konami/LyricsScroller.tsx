"use client";

import { chorus } from "./chorus";

const LINE_H = 60;

interface LyricsScrollerProps {
  currentLine: number;
  lineElapsed: number;
  showFinale: boolean;
}

function KaraokeLine({
  text,
  duration,
  elapsed,
}: {
  text: string;
  duration: number;
  elapsed: number;
}) {
  const words = text.split(" ");
  // Distribute duration evenly across words
  const perWord = duration / words.length;

  return (
    <span>
      {words.map((word, i) => {
        const wordStart = i * perWord;
        const wordEnd = (i + 1) * perWord;
        const isActive = elapsed >= wordStart && elapsed < wordEnd;
        const isPast = elapsed >= wordEnd;

        return (
          <span key={i}>
            <span
              className="transition-all duration-150"
              style={{
                color: isPast || isActive ? "#ffffff" : "#75b9be",
                textShadow:
                  isActive
                    ? "0 0 12px rgba(255,255,255,0.6)"
                    : "none",
                transform: isActive ? "scale(1.05)" : "scale(1)",
                display: "inline-block",
              }}
            >
              {word}
            </span>
            {isActive && (
              <span className="karaoke-dots ml-0.5 text-white/80 text-[10px] align-middle">
                ●●●
              </span>
            )}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}

export default function LyricsScroller({
  currentLine,
  lineElapsed,
  showFinale,
}: LyricsScrollerProps) {
  const lines = ["", ...chorus.map((l) => l.text), ""];

  return (
    <div
      className="relative w-full max-w-[420px] overflow-hidden mx-auto"
      style={{
        height: LINE_H * 3,
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${-currentLine * LINE_H}px)`,
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {lines.map((text, i) => {
          const isCurrent = i === currentLine + 1;
          const isFinale = showFinale && i === lines.length - 1;
          const chorusIndex = i - 1;

          return (
            <div
              key={i}
              className="flex items-center justify-center font-serif italic text-center transition-all duration-500"
              style={{
                height: LINE_H,
                color: "#75b9be",
                opacity: isCurrent || isFinale ? 1 : 0.3,
                fontSize: isCurrent || isFinale ? 22 : 15,
                fontWeight: isCurrent || isFinale ? 500 : 400,
              }}
            >
              {isFinale ? (
                "♪ dancing queen ♪"
              ) : isCurrent && chorusIndex >= 0 && chorusIndex < chorus.length ? (
                <KaraokeLine
                  text={text}
                  duration={chorus[chorusIndex].duration}
                  elapsed={lineElapsed}
                />
              ) : (
                text
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
