'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="rounded-full border border-[var(--stroke)] px-4 py-2 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]">
            ← Back to home
          </Link>
          <ThemeToggle />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 space-y-4"
        >
          <p className="text-sm font-semibold text-[var(--accent-strong)]">Contact</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Tell us about your product</h1>
          <p className="max-w-3xl text-[var(--text-secondary)]">
            Send a quick brief and we&apos;ll reply with a tailored plan, a timeline, and a prototype slot.
            We respond within one business day.
          </p>
        </motion.div>
        <div className="mt-10 rounded-3xl border border-[var(--stroke)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-soft)]">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-[var(--text-primary)]">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="h-11 rounded-xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-[var(--text-primary)]">Company / team</label>
              <input
                type="text"
                placeholder="Org / product name"
                className="h-11 rounded-xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-[var(--text-primary)]">What do you want to build?</label>
              <textarea
                rows={4}
                placeholder="Describe the goal, timeline, and where you are today."
                className="rounded-xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-3 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-[var(--text-primary)]">Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="h-11 rounded-xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Send message
              </button>
              <a
                href="mailto:hello@lumenary.studio"
                className="rounded-full border border-[var(--stroke)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                Or email us
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
