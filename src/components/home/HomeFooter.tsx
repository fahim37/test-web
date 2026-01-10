import Link from "next/link";

export function HomeFooter() {
  return (
    <footer className="mx-auto mt-14 w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-4 py-4 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3 text-[var(--text-primary)]">
          <div className="h-2 w-2 rounded-full bg-[var(--accent-strong)] shadow-[0_0_0_6px_rgba(14,165,233,0.2)]" />
          Lumenary Software Aú Crafted in Next.js, Framer Motion, and Three.js
        </div>
        <div className="flex gap-4">
          <Link href="/services" className="hover:text-[var(--text-primary)]">
            Services
          </Link>
          <Link href="/projects" className="hover:text-[var(--text-primary)]">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[var(--text-primary)]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
