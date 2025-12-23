'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const offerings = [
  {
    title: "Launch Pod",
    summary: "A dedicated squad for zero-to-one builds with weekly demos and observability baked in.",
    deliverables: ["Product + tech strategy", "Design language + prototypes", "MVP build & launch"],
    duration: "6-8 weeks",
  },
  {
    title: "Product Partnership",
    summary: "Multi-quarter roadmap delivery with integrated pods that move from discovery to growth.",
    deliverables: ["Quarterly roadmap", "Design system stewardship", "Feature shipping cadence"],
    duration: "Quarterly",
  },
  {
    title: "Experience Refresh",
    summary: "Motion, 3D, and content upgrades that modernize the product without pausing releases.",
    deliverables: ["Motion + 3D storytelling", "Performance & accessibility uplift", "Messaging + UX writing"],
    duration: "4-6 weeks",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="rounded-full border border-[var(--stroke)] px-4 py-2 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]">
            ← Back to home
          </Link>
          <ThemeToggle />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 space-y-4"
        >
          <p className="text-sm font-semibold text-[var(--accent-strong)]">Services</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Engagements built for velocity</h1>
          <p className="max-w-3xl text-[var(--text-secondary)]">
            We blend strategy, design, and engineering into teams that feel in-house. Every engagement
            ships weekly, includes motion + 3D when it helps the story, and respects the operational realities of your stack.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass relative overflow-hidden rounded-3xl p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-warm)]/10" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{offering.title}</h2>
                  <span className="rounded-full border border-[var(--stroke)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                    {offering.duration}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)]">{offering.summary}</p>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {offering.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
