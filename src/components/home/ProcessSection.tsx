import Link from "next/link";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "01. Discovery Lab",
    detail: "We align on outcomes, define the riskiest assumptions, and prototype in under 10 days.",
    eta: "Week 1",
  },
  {
    title: "02. Design + Build",
    detail: "Design system, flows, and full-stack builds land in weekly increments with observable releases.",
    eta: "Week 2-6",
  },
  {
    title: "03. Launch & Learn",
    detail: "We deploy, monitor, and iterate with experiment tracks and performance budgets baked in.",
    eta: "Week 7+",
  },
];

export function ProcessSection() {
  return (
    <section id="approach" className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">How we work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A rhythm built for clarity</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            Close collaboration, async visibility, and demos that keep stakeholders aligned every week.
          </p>
        </div>
        <Link
          href="/services"
          className="hidden rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          Engagement models
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
