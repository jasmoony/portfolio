"use client";

import { lyrics } from "./chorus";

const LINE_H = 56;
const VISIBLE_LINES = 5;

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
                color: isPast || isActive ? "#2c464d" : "#75b9be",
                textShadow: isActive
                  ? "0 0 12px rgba(44,70,77,0.3)"
                  : "none",
                transform: isActive ? "scale(1.05)" : "scale(1)",
                display: "inline-block",
              }}
            >
              {word}
            </span>
            {isActive && (
              <span className="ml-0.5 text-neptune-900/60 text-[10px] align-middle">
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
  // Add empty padding lines at start and end for scroll room
  const padCount = Math.floor(VISIBLE_LINES / 2);
  const padStart = Array(padCount).fill("");
  const padEnd = Array(padCount).fill("");
  const lines = [...padStart, ...lyrics.map((l) => l.text), ...padEnd];

  return (
    <div
      className="relative w-full max-w-[460px] overflow-hidden mx-auto"
      style={{
        height: LINE_H * VISIBLE_LINES,
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
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
          const lyricsIndex = i - padCount;
          const isCurrent = lyricsIndex === currentLine;
          const isFinale = showFinale && i === lines.length - padCount - 1;

          return (
            <div
              key={i}
              className="flex items-center justify-center font-serif italic text-center transition-all duration-500 px-4"
              style={{
                height: LINE_H,
                color: isCurrent || isFinale ? "#2c464d" : "#34626a",
                opacity: isCurrent || isFinale ? 1 : 0.35,
                fontSize: isCurrent || isFinale ? 22 : 15,
                fontWeight: isCurrent || isFinale ? 500 : 400,
              }}
            >
              {isCurrent &&
              lyricsIndex >= 0 &&
              lyricsIndex < lyrics.length ? (
                <KaraokeLine
                  text={text}
                  duration={lyrics[lyricsIndex].duration}
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
