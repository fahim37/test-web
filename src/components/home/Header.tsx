"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

const heroGradient =
  "linear-gradient(96deg, rgba(255, 255, 255, 0.98) 0%, rgba(242, 247, 255, 0.98) 56%, rgba(255, 246, 237, 0.98) 100%)";

export function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 28);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
    >
      <motion.div
        className="relative overflow-hidden border-b px-4 py-3 sm:px-6"
        animate={{
          borderColor: isScrolled ? "rgba(10, 14, 20, 0.08)" : "rgba(255, 255, 255, 0)",
          boxShadow: isScrolled ? "0 12px 28px rgba(10, 14, 20, 0.08)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: heroGradient }} />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white"
          animate={{ opacity: isScrolled ? 0.98 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          animate={{ backgroundPositionX: [0, 200], opacity: isScrolled ? 0 : 0.25 }}
          transition={{
            backgroundPositionX: { duration: 16, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.25, ease: "easeOut" },
          }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(10, 14, 20, 0.06) 0px, rgba(10, 14, 20, 0.06) 1px, transparent 1px, transparent 100px)",
            backgroundSize: "200px 100%",
          }}
        />

        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <Link href="#hero" className="flex items-center gap-2.5">
            <Image
              src="/ddt-logo.png"
              alt="Company Logo"
              width={1000}
              height={1000}
              className="w-full h-[40px] object-cover"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  className="group relative inline-flex rounded-full px-3.5 py-2 text-sm font-medium tracking-[-0.01em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  <span
                    className="absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ backgroundColor: isScrolled ? "rgba(10, 14, 20, 0.04)" : "rgba(255, 255, 255, 0.72)" }}
                  />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="rounded-lg bg-[var(--text-primary)] px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(10,14,20,0.12)] transition hover:bg-[var(--accent)]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
