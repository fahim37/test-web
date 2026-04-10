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
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex rounded-md border border-[rgba(3,95,232,0.2)] bg-white/75 px-3 py-1 text-sm font-medium text-[var(--accent-strong)] shadow-[0_12px_30px_rgba(3,95,232,0.08)]">
            Transforming Ideas into Solutions
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)] sm:text-5xl lg:text-[62px]">
            The Smartest Software Solutions for Your Businesses
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[var(--text-secondary)]">
            We design, develop, and deliver scalable digital solutions tailored to your business needs.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex rounded-xl bg-[var(--accent)] px-9 py-3.5 text-lg font-semibold text-white shadow-[0_18px_38px_rgba(3,95,232,0.22)] transition hover:bg-[var(--accent-strong)]"
          >
            Lets Discuss
          </Link>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="overflow-hidden rounded-[24px] border-[10px] border-white bg-[#f6f8fc] shadow-[0_24px_60px_rgba(10,14,20,0.14)] ring-1 ring-[rgba(10,14,20,0.06)]">
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
