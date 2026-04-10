import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative left-1/2 right-1/2 mt-0 w-screen -translate-x-1/2 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 14% 18%, rgba(3, 95, 232, 0.08), transparent 26%), radial-gradient(circle at 84% 14%, rgba(255, 111, 0, 0.12), transparent 22%), linear-gradient(96deg, rgba(255, 255, 255, 0.98) 0%, rgba(243, 247, 255, 0.98) 56%, rgba(255, 245, 237, 0.98) 100%), repeating-linear-gradient(90deg, rgba(10, 14, 20, 0.06) 0px, rgba(10, 14, 20, 0.06) 1px, transparent 1px, transparent 104px)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:px-12 lg:py-32">
        <div className="max-w-lg">
          <span className="inline-flex rounded-full border border-[rgba(3,95,232,0.15)] bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--accent-strong)]">
            Transforming Ideas into Solutions
          </span>
          <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--text-primary)]">
            The Smartest Software Solutions for Your Business
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg sm:leading-relaxed">
            We design, develop, and deliver scalable digital solutions tailored to your business needs.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(3,95,232,0.2)] transition-all duration-300 hover:bg-[var(--accent-strong)] hover:shadow-[0_16px_40px_rgba(3,95,232,0.28)]"
          >
            Let&apos;s Discuss
          </Link>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="overflow-hidden rounded-2xl border-[8px] border-white bg-[#f6f8fc] shadow-[0_20px_50px_rgba(10,14,20,0.12)] ring-1 ring-[rgba(10,14,20,0.05)]">
            <Image
              src="/hero-software.jpg"
              alt="Developer writing code on dual monitors"
              width={1800}
              height={1200}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
