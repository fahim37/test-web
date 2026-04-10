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
    <section id="approach" className="pt-20 sm:pt-24">
      <div className="flex items-end justify-between gap-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">How we work</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">A clear path from idea to launch</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base sm:leading-relaxed">
            Close collaboration, async visibility, and demos every week so you can see progress and give feedback quickly.
          </p>
        </div>
        <Link
          href="/services"
          className="hidden shrink-0 rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          See the roadmap
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="glass relative rounded-2xl p-5 sm:p-6"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--muted-surface)] via-transparent to-transparent" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-[var(--accent-strong)]">{step.title}</span>
                <span className="shrink-0 rounded-full border border-[var(--stroke)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">
                  {step.eta}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{step.detail}</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--stroke)] to-transparent" />
              <p className="text-xs font-mono font-medium text-[var(--accent-strong)]">
                Status: always shipping
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
