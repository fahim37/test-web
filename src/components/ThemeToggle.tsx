"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "light" | "dark";

const iconStyle = "h-4 w-4";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconStyle}>
    <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
    <path
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M12 3v2.5M12 18.5V21M4.75 4.75 6.5 6.5m10.75 10.75 1.75 1.75M3 12h2.5M18.5 12H21M4.75 19.25 6.5 17.5m10.75-11 1.75-1.75"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconStyle}>
    <path
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 7.5 7.5 0 1 0 20.5 14.5Z"
    />
  </svg>
);

export default function ThemeToggle({ className }: { className?: string }) {
  const subscribe = useCallback((onChange: () => void) => {
    if (typeof window === "undefined") return () => undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", onChange);
    window.addEventListener("storage", onChange);
    window.addEventListener("theme-change", onChange);
    return () => {
      media.removeEventListener("change", onChange);
      window.removeEventListener("storage", onChange);
      window.removeEventListener("theme-change", onChange);
    };
  }, []);

  const getSnapshot = useCallback((): Theme => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme-preference") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
  }, []);

  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");

  const applyTheme = useCallback((next: Theme) => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme-preference", next);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("theme-change"));
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`relative inline-flex h-10 w-20 items-center rounded-full border border-[var(--stroke)] bg-[var(--card-bg)] px-1 text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] ${className ?? ""}`}
      aria-label="Toggle color mode"
    >
      <span className="sr-only">Toggle theme</span>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={theme}
          initial={{ x: theme === "light" ? -6 : 6, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: theme === "light" ? 6 : -6, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="relative z-10 flex h-8 w-8 items-center justify-center"
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </AnimatePresence>
      <motion.div
        layout
        className="absolute inset-y-1 left-1 h-8 w-8 rounded-full bg-[var(--accent)]/20"
        animate={{ x: theme === "light" ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      />
    </button>
  );
}
