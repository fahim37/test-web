import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="pt-20 pb-8 sm:pt-24">
      <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 via-transparent to-[var(--accent-warm)]/10" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">Ready when you are</p>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight tracking-tight">
              Let&apos;s build your custom website or responsive app.
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base sm:leading-relaxed">
              Share a bit about your goals and we&apos;ll reply with a tailored plan, timelines, and what the first
              clickable checkpoint looks like.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="mailto:hello@devdens.studio"
                className="rounded-full bg-[var(--text-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                hello@devdens.studio
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--stroke)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                Schedule an intro
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Timezone coverage", value: "Global remote" },
              { label: "Engagements", value: "Custom websites / Web apps" },
              { label: "Stack", value: "Next.js / TypeScript / Framer Motion" },
              { label: "Response SLA", value: "Under 1 business day" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[var(--stroke)] bg-[var(--card-bg)] px-4 py-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--text-secondary)]">{item.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)] sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
