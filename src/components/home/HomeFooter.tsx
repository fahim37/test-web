import Link from "next/link";

export function HomeFooter() {
  return (
    <footer className="mx-auto mt-6 w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3 text-sm font-medium text-[var(--text-primary)]">
          <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-strong)] shadow-[0_0_0_5px_rgba(3,95,232,0.1)]" />
          <span>Devdens Studio</span>
        </div>
        <div className="flex gap-5">
          <Link href="/services" className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
            Services
          </Link>
          <Link href="/projects" className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
            Projects
          </Link>
          <Link href="/contact" className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
