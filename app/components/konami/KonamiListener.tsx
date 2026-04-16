"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import KaraokeModal from "./KaraokeModal";

const CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function KonamiListener() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef(0);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.code === CODE[progressRef.current]) {
        progressRef.current++;
        if (progressRef.current === CODE.length) {
          progressRef.current = 0;
          setOpen(true);
        }
      } else {
        progressRef.current = e.code === CODE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return <KaraokeModal open={open} onClose={onClose} />;
}
