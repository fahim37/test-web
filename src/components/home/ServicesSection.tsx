import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Websites",
    description: "Brand-led marketing and product sites with performance budgets, SEO, and launch-ready content systems.",
    tags: ["Story-first UX", "Headless CMS", "Launch support"],
  },
  {
    title: "Responsive Web Applications",
    description: "Dashboards, portals, and product surfaces that stay quick and clear across every breakpoint.",
    tags: ["Next.js + TypeScript", "Design systems", "QA on devices"],
  },
  {
    title: "Systems & Platforms",
    description: "Reusable component libraries, design tokens, and multi-brand themes that keep future work consistent.",
    tags: ["Design ops", "Accessibility", "Documentation"],
  },
  {
    title: "Performance & Growth",
    description: "Speed audits, accessibility fixes, analytics, and experiments to lift conversions without cruft.",
    tags: ["Core Web Vitals", "Experimentation", "Analytics setup"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">What we build</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Custom sites, responsive apps, and the systems behind them</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            From first wire to launch, Devdens blends design, content, and modern engineering so your website or product
            ships fast, loads fast, and feels like you.
          </p>
        </div>
        <Link
          href="#contact"
          className="hidden rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          Plan a build
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
