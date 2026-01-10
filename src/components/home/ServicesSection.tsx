import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Product Strategy",
    description: "Zero-to-one vision sprints, opportunity maps, and validation loops that keep you shipping with conviction.",
    tags: ["Vision sprint", "Roadmap ops", "Research"],
  },
  {
    title: "Experience Design",
    description: "Interface systems, motion, and content that make complex products feel effortless on any device.",
    tags: ["Design language", "Prototyping", "Accessibility"],
  },
  {
    title: "Engineering Pods",
    description: "Senior full-stack squads that deliver cloud-ready, observable, and maintainable builds on short cycles.",
    tags: ["Next.js", "Edge & AI", "Observability"],
  },
  {
    title: "Growth & Optimization",
    description: "Experiments, performance tuning, and analytics to keep the product fast and the story resonant.",
    tags: ["A/B + telemetry", "Web Vitals", "Lifecycle"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">What we do</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services built for momentum</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            From strategy through build, we combine expressive design, motion, and resilient engineering
            so you can launch faster without sacrificing polish.
          </p>
        </div>
        <Link
          href="#contact"
          className="hidden rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          Plan a sprint
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/6 via-transparent to-[var(--accent-warm)]/8 opacity-80" />
            <div className="relative space-y-3">
              <div className="inline-flex rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                {service.title}
              </div>
              <p className="text-[var(--text-secondary)]">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--stroke)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
