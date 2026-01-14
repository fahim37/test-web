import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative mt-12 grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
      <div className="space-y-7">
       
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Custom websites and responsive web apps with{" "}
          <span className="bg-gradient-to-r from-[var(--accent-strong)] via-sky-400 to-[var(--accent-warm)] bg-clip-text text-transparent">
            modern stacks, precise craft, and measurable results.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]"
        >
          We are Devdens: a small studio that designs, builds, and tunes bespoke sites and responsive web applications.
          Next.js, TypeScript, motion, and accessibility are baked in so your story, product, and conversions all feel
          intentional across devices.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#contact"
            className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:brightness-110"
          >
            Start a project
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-[var(--stroke)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            View our work
          </Link>
          <div className="flex items-center gap-3 rounded-full border border-[var(--stroke)] px-4 py-2 text-sm text-[var(--text-secondary)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-warm)] shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" />
            Responsive-first, weekly build drops.
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: "Bespoke launches", value: "45+ custom builds" },
            { label: "Responsive coverage", value: "Mobile to 4K verified" },
            { label: "First clickable review", value: "Under 72 hours" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-3 text-sm text-[var(--text-secondary)]"
            >
              <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">{stat.label}</p>
              <p className="text-xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-[var(--accent)]/10 blur-2xl" />
        <div className="glass relative space-y-4 rounded-3xl border border-[var(--stroke)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-soft)]">
          <p className="text-sm font-semibold text-[var(--accent-strong)]">What we build at Devdens</p>
          <div className="space-y-3 text-[var(--text-secondary)]">
            {[
              {
                title: "Custom websites",
                detail: "Brand-led storytelling with performance budgets, CMS handoff, and launch support.",
              },
              {
                title: "Responsive web applications",
                detail: "Dashboards, portals, and product experiences that stay quick on any screen.",
              },
              {
                title: "Modern tech stacks",
                detail: "Next.js, TypeScript, edge delivery, analytics, and accessibility baked in from day one.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-1 rounded-2xl border border-[var(--stroke)]/80 bg-[var(--muted-surface)] px-4 py-3">
                <p className="font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--stroke)] to-transparent" />
          <p className="text-sm font-mono text-[var(--accent-strong)]">
            Crafted with responsive QA, observability, and care.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
