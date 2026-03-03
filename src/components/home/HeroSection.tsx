import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative left-1/2 right-1/2 mt-0 w-screen -translate-x-1/2 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(96deg, #eaedf2 0%, #dbe6f7 52%, #8ebaf8 100%), repeating-linear-gradient(90deg, rgba(96, 125, 171, 0.12) 0px, rgba(96, 125, 171, 0.12) 1px, transparent 1px, transparent 104px)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex rounded-md border border-[#99afd2] bg-white/20 px-3 py-1 text-sm font-medium text-[#1260d3]">
            Transforming Ideas into Solutions
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#070a11] sm:text-5xl lg:text-[62px]">
            The Smartest Software Solutions for Your Businesses
          </h1>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#5b6477]">
            We design, develop, and deliver scalable digital solutions tailored to your business needs.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex rounded-xl bg-[#1462e5] px-9 py-3.5 text-lg font-semibold text-white shadow-[0_14px_28px_rgba(20,98,229,0.3)] transition hover:bg-[#0f57ce]"
          >
            Lets Discuss
          </Link>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="overflow-hidden rounded-[24px] border-[10px] border-[#5e84c8] bg-[#bdd1ee] shadow-[0_22px_40px_rgba(57,86,135,0.28)]">
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
