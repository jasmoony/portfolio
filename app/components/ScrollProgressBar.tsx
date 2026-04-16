"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[6px] bg-accent origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
