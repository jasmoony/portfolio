"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import LyricsScroller from "./LyricsScroller";
import { lyrics, TOTAL_DURATION } from "./chorus";

interface KaraokeModalProps {
  open: boolean;
  onClose: () => void;
}

function formatTime(ms: number) {
  const s = Math.floor(ms / 1000);
  const min = Math.floor(s / 60);
  const sec = s % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export default function KaraokeModal({ open, onClose }: KaraokeModalProps) {
  const [screen, setScreen] = useState<"intro" | "karaoke">("intro");
  const [paused, setPaused] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [lineElapsed, setLineElapsed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [showFinale, setShowFinale] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lineStartRef = useRef(0);
  const pausedAtRef = useRef(0);
  const songStartRef = useRef(0);
  const pausedElapsedRef = useRef(0);

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setScreen("intro");
      setPaused(false);
      setCurrentLine(0);
      setLineElapsed(0);
      setProgress(0);
      setElapsed(0);
      setShowFinale(false);
    }
  }, [open]);

  // Clean up audio on close
  useEffect(() => {
    if (!open && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isPlaying = screen === "karaoke" && !paused;

  // Line advancement
  useEffect(() => {
    if (!isPlaying || currentLine >= lyrics.length - 1) return;
    const t = setTimeout(() => {
      setCurrentLine(currentLine + 1);
      lineStartRef.current = Date.now();
      setLineElapsed(0);
    }, lyrics[currentLine].duration);
    return () => clearTimeout(t);
  }, [isPlaying, currentLine]);

  // Word-by-word progress within current line
  useEffect(() => {
    if (!isPlaying) return;
    lineStartRef.current = Date.now();
    const tick = setInterval(() => {
      setLineElapsed(Date.now() - lineStartRef.current);
    }, 50);
    return () => clearInterval(tick);
  }, [isPlaying, currentLine]);

  // Progress bar
  useEffect(() => {
    if (!isPlaying) return;
    const offset = pausedElapsedRef.current;
    const start = Date.now();
    const tick = setInterval(() => {
      const el = offset + (Date.now() - start);
      setProgress(Math.min(100, (el / TOTAL_DURATION) * 100));
      setElapsed(Math.min(el, TOTAL_DURATION));
      if (el >= TOTAL_DURATION) clearInterval(tick);
    }, 200);
    return () => {
      pausedElapsedRef.current = offset + (Date.now() - start);
      clearInterval(tick);
    };
  }, [isPlaying]);

  // Auto-close after last line
  const handleClose = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isPlaying || currentLine !== lyrics.length - 1) return;
    const t = setTimeout(() => {
      setShowFinale(true);
      setTimeout(handleClose, 2500);
    }, lyrics[lyrics.length - 1].duration);
    return () => clearTimeout(t);
  }, [isPlaying, currentLine, handleClose]);

  function handlePlay() {
    setScreen("karaoke");
    setPaused(false);
    setCurrentLine(0);
    setLineElapsed(0);
    setProgress(0);
    setElapsed(0);
    setShowFinale(false);
    pausedElapsedRef.current = 0;
    lineStartRef.current = Date.now();
    songStartRef.current = Date.now();

    const audio = new Audio("/dancingqueen.mp3");
    audioRef.current = audio;
    audio.play().catch(() => {});
  }

  function handlePause() {
    if (paused) {
      // Resume
      audioRef.current?.play().catch(() => {});
      lineStartRef.current = Date.now() - pausedAtRef.current;
      setPaused(false);
    } else {
      // Pause
      audioRef.current?.pause();
      pausedAtRef.current = Date.now() - lineStartRef.current;
      setPaused(true);
    }
  }

  function handleBack() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPaused(false);
    setCurrentLine(0);
    setLineElapsed(0);
    setProgress(0);
    setElapsed(0);
    setShowFinale(false);
    pausedElapsedRef.current = 0;
    setScreen("intro");
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="karaoke easter egg"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-8"
      style={{ backgroundColor: "#D4B9E8" }}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-2xl opacity-50 hover:opacity-100 transition-opacity"
        aria-label="close"
      >
        ✕
      </button>

      {screen === "intro" ? (
        /* Intro screen */
        <div className="flex flex-col items-center gap-6">
          <div className="mic text-7xl" aria-hidden="true">
            🎤
          </div>
          <h2 className="font-serif text-4xl italic text-white/90">
            let&apos;s disco!
          </h2>
          <button
            onClick={handlePlay}
            className="mt-4 px-10 py-4 bg-white/20 hover:bg-white/30 border border-white/40 rounded-full text-white text-xl font-serif italic transition-all hover:scale-105"
          >
            ▶ press play
          </button>
        </div>
      ) : (
        /* Karaoke screen */
        <>
          <LyricsScroller
            currentLine={currentLine}
            lineElapsed={lineElapsed}
            showFinale={showFinale}
          />

          {/* Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={handleBack}
              className="px-5 py-2 bg-white/15 hover:bg-white/25 rounded-full text-white text-sm font-serif italic transition-colors"
              aria-label="back to start"
            >
              ← back
            </button>
            <button
              onClick={handlePause}
              className="w-14 h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl transition-colors"
              aria-label={paused ? "resume" : "pause"}
            >
              {paused ? "▶" : "⏸"}
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-[300px] mt-6">
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-200"
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#75b9be",
                }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs opacity-60">
              <span>{formatTime(elapsed)}</span>
              <span>{formatTime(TOTAL_DURATION)}</span>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes mic-float {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-6px) rotate(4deg); }
        }
        .mic {
          animation: mic-float 2.2s ease-in-out infinite;
          transform-origin: center;
          line-height: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .mic { animation: none; }
        }
      `}</style>
    </div>
  );
}
