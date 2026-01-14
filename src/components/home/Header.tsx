"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function HomeHeader() {
  const { scrollYProgress } = useScroll();
  const elevation = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.995]);
  const shadow = useTransform(elevation, [0, 1], ["0 18px 50px rgba(0,0,0,0)", "0 18px 50px rgba(0,0,0,0.08)"]);
  const border = useTransform(elevation, [0, 1], ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.55)"]);

  return (
    <motion.header
      className="sticky top-4 z-30"
      style={{ scale: headerScale }}
    >
      <motion.div
        style={{ boxShadow: shadow, borderColor: border }}
        className="glass flex flex-wrap items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-lg sm:px-6 md:flex-nowrap md:gap-4"
        initial={{ opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="flex min-w-0 items-center gap-2 rounded-xl bg-[var(--accent)]/12 px-3 py-1 text-sm font-semibold text-[var(--accent-strong)] shadow-sm"
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(14,165,233,0.2)]"
            animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          />
          Devdens
        </motion.div>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-4 text-sm font-medium text-[var(--text-secondary)] md:flex">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }}>
              <Link
                href={link.href}
                className="relative px-2 py-1 transition text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {link.label}
                <motion.span
                  className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--accent-strong)]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <ThemeToggle />
          </motion.div>
          <motion.div whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="hidden rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] sm:inline-flex"
            >
              Plan a build
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
