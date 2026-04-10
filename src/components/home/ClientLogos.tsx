const clients = ["Solstice", "Hinterland", "Nova Health", "Crestfield", "Arbor", "Tandem"];

export function ClientLogos() {
  return (
    <section className="pt-20 sm:pt-24">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-5 py-4 sm:gap-6 sm:px-6">
        <span className="rounded-full bg-[var(--accent)]/15 px-3.5 py-1.5 text-xs font-medium text-[var(--accent-strong)]">Trusted by teams who care about craft</span>
        <div className="flex flex-1 flex-wrap items-center justify-start gap-5 sm:justify-between">
          {clients.map((name) => (
            <span key={name} className="text-sm font-medium tracking-wide text-[var(--text-secondary)]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
