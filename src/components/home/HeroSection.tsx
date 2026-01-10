import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative mt-12 grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
      <div className="space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full border border-[var(--stroke)] bg-[var(--card-bg)] px-4 py-2 text-sm text-[var(--text-secondary)] backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent-strong)] shadow-[0_0_0_6px_rgba(14,165,233,0.2)]" />
          Software that feels intentional, fast, and alive.
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          We craft flagship web products with{" "}
          <span className="bg-gradient-to-r from-[var(--accent-strong)] via-sky-400 to-[var(--accent-warm)] bg-clip-text text-transparent">
            motion, clarity, and fearless engineering.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]"
        >
          A senior team across product, design, and full-stack engineering. We move from idea to
          ship-ready software with immersive motion, 3D storytelling, and measurable performance for web-native teams.
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
            Launch a project
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-[var(--stroke)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            View our work
          </Link>
          <div className="flex items-center gap-3 rounded-full border border-[var(--stroke)] px-4 py-2 text-sm text-[var(--text-secondary)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-warm)] shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" />
            Weekly build drops with observability.
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: "Launches delivered", value: "65+" },
            { label: "Average uplift", value: "24% faster web vitals" },
            { label: "Post-launch issues", value: "<0.2% regressions" },
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
        
      </motion.div>
    </section>
  );
}
