"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-40">
      {/* Desktop nav */}
      <div className="hidden md:flex flex-row-reverse text-neptune-700 gap-1 px-4 py-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            className={`px-4 py-3 text-sm link-underline ${
              pathname === link.href
                ? "font-semibold text-accent"
                : "hover:text-accent"
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex justify-end px-4 py-3">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-neptune-700"
          aria-label={mobileOpen ? "close menu" : "open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-neptune-100/20 shadow-card"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  className={`py-3 text-base ${
                    pathname === link.href
                      ? "font-semibold text-accent"
                      : "text-neptune-700 hover:text-accent"
                  }`}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
