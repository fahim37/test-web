import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="mt-20">
      <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 via-transparent to-[var(--accent-warm)]/10" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[var(--accent-strong)]">Ready when you are</p>
            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let&apos;s build your custom website or responsive app.
            </h3>
            <p className="max-w-2xl text-[var(--text-secondary)]">
              Share a bit about your goals and we&apos;ll reply with a tailored plan, timelines, and what the first
              clickable checkpoint looks like. Expect a fast response.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:hello@devdens.studio"
                className="rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                hello@devdens.studio
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--stroke)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                Schedule an intro
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Timezone coverage", value: "Global remote" },
              { label: "Engagements", value: "Custom websites / Web apps" },
              { label: "Stack", value: "Next.js / TypeScript / Framer Motion" },
              { label: "Response SLA", value: "Under 1 business day" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--stroke)] bg-[var(--card-bg)] px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">{item.label}</p>
                <p className="text-lg font-semibold text-[var(--text-primary)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
