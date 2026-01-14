const clients = ["Solstice", "Hinterland", "Nova Health", "Crestfield", "Arbor", "Tandem"];

export function ClientLogos() {
  return (
    <section className="mt-14">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-4 py-3 text-xs text-[var(--text-secondary)] sm:gap-6 sm:px-6 sm:text-sm">
        <span className="rounded-full bg-[var(--accent)]/20 px-3 py-1 text-[var(--accent-strong)]">Trusted by teams who care about craft</span>
        <div className="flex flex-1 flex-wrap items-center justify-start gap-4 sm:justify-between">
          {clients.map((name) => (
            <span key={name} className="tracking-wide text-[var(--text-secondary)]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
