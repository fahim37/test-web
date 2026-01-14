import Link from "next/link";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "01. Shape the story",
    detail: "Discovery, content mapping, and the responsive goals for your site or web app.",
    eta: "Week 1",
  },
  {
    title: "02. Design and prototype",
    detail: "Interface system, breakpoints, and motion brought to life in a clickable prototype.",
    eta: "Week 1-2",
  },
  {
    title: "03. Build, test, launch",
    detail: "Next.js and TypeScript builds, QA on real devices, and observability wired in for launch.",
    eta: "Week 2-5",
  },
];

export function ProcessSection() {
  return (
    <section id="approach" className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">How we work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A clear path from idea to responsive launch</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            Close collaboration, async visibility, and demos every week so you can see progress and give feedback quickly.
          </p>
        </div>
        <Link
          href="/services"
          className="hidden rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          See the roadmap
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="glass relative rounded-3xl p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--muted-surface)] via-transparent to-transparent" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--accent-strong)]">{step.title}</span>
                <span className="rounded-full border border-[var(--stroke)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                  {step.eta}
                </span>
              </div>
              <p className="text-[var(--text-secondary)]">{step.detail}</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--stroke)] to-transparent" />
              <p className="text-sm font-mono text-[var(--accent-strong)]">
                Status: always shipping
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
