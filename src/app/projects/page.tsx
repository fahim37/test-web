'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const caseStudies = [
  {
    name: "Helix Cloud OS",
    description: "Realtime observability and orchestration for a global logistics network with AI copilots.",
    outcomes: ["Release cadence +72%", "MTTR reduced to 11 minutes", "Design system adopted by 5 teams"],
    stack: ["Next.js", "WebGL", "Edge Functions"],
  },
  {
    name: "Pulse Health Suite",
    description: "Biometric monitoring and collaborative care plans that keep clinicians and patients in sync.",
    outcomes: ["NPS +24", "Triage time 14 → 4 mins", "HIPAA ready design system"],
    stack: ["React Native", "Realtime Sync", "Analytics"],
  },
  {
    name: "Arclight Finance",
    description: "Quant research workspace with interactive 3D trade flows and guided automation for compliance.",
    outcomes: ["Onboarding time -40%", "Zero sev-1 incidents on launch", "Motion system for complex flows"],
    stack: ["Three.js", "Next.js", "Feature Flags"],
  },
];

export default function ProjectsPage() {
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
          <p className="text-sm font-semibold text-[var(--accent-strong)]">Projects</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">A few favorites</h1>
          <p className="max-w-3xl text-[var(--text-secondary)]">
            Deep, high-stakes product work that blends interactivity, performance, and clarity. Each build
            shipped with weekly demos, motion tests, and observability dashboards.
          </p>
        </motion.div>
        <div className="mt-10 space-y-4">
          {caseStudies.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass relative overflow-hidden rounded-3xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent-warm)]/10" />
              <div className="relative grid gap-4 sm:grid-cols-[1.2fr,0.8fr] sm:items-start">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="text-[var(--text-secondary)]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--text-secondary)]">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-[var(--stroke)] px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 rounded-2xl border border-[var(--stroke)] bg-[var(--card-bg)] p-4 text-sm text-[var(--text-secondary)]">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      {outcome}
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
