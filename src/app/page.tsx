'use client';

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroCanvas from "@/components/HeroCanvas";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "Product Strategy",
    description: "Zero-to-one vision sprints, opportunity maps, and validation loops that keep you shipping with conviction.",
    tags: ["Vision sprint", "Roadmap ops", "Research"],
  },
  {
    title: "Experience Design",
    description: "Interface systems, motion, and content that make complex products feel effortless on any device.",
    tags: ["Design language", "Prototyping", "Accessibility"],
  },
  {
    title: "Engineering Pods",
    description: "Senior full-stack squads that deliver cloud-ready, observable, and maintainable builds on short cycles.",
    tags: ["Next.js", "Edge & AI", "Observability"],
  },
  {
    title: "Growth & Optimization",
    description: "Experiments, performance tuning, and analytics to keep the product fast and the story resonant.",
    tags: ["A/B + telemetry", "Web Vitals", "Lifecycle"],
  },
];

const projects = [
  {
    title: "Helix Cloud OS",
    summary: "Realtime ops dashboard for a global logistics network with adaptive alerts and AI copilots.",
    impact: "Release cadence improved by 72% with zero regression launches.",
    tags: ["Edge streaming", "Design system", "AIOps"],
    gradient: "from-cyan-400/25 via-sky-400/10 to-amber-300/10",
  },
  {
    title: "Pulse Health Suite",
    summary: "Patient-first care platform with biometric monitoring and collaborative care plans across devices.",
    impact: "NPS +24 and triage time reduced from 14 mins to 4 mins.",
    tags: ["HIPAA ready", "Native + web", "Data viz"],
    gradient: "from-emerald-400/25 via-teal-400/10 to-sky-300/10",
  },
  {
    title: "Arclight Finance",
    summary: "Quant research workspace with interactive 3D trade flows, scenario tools, and live compliance guardrails.",
    impact: "Cut analyst onboarding time by 40% with guided automation.",
    tags: ["3D analytics", "Realtime collab", "Secure by default"],
    gradient: "from-indigo-400/25 via-sky-400/10 to-orange-300/10",
  },
  {
    title: "Photon Dev Portal",
    summary: "Developer hub with interactive API sandboxes, live docs, and guided onboarding flows.",
    impact: "Time-to-first-call down from 40 mins to 6 mins.",
    tags: ["API DX", "Docs", "SDKs"],
    gradient: "from-cyan-300/25 via-blue-400/10 to-fuchsia-300/10",
  },
  {
    title: "Nova Commerce",
    summary: "Headless commerce experience with adaptive pricing, 3D product viewers, and blazing-fast search.",
    impact: "Conversion rate +18% and cart speed -45%.",
    tags: ["Headless", "Search", "3D viewers"],
    gradient: "from-amber-300/25 via-rose-300/10 to-cyan-300/10",
  },
  {
    title: "Circuit AI Studio",
    summary: "Canvas for orchestrating AI workflows, live metrics, and safety rails across deployments.",
    impact: "Experiment velocity +3.2x with guardrails baked in.",
    tags: ["AI tooling", "Observability", "Safety"],
    gradient: "from-emerald-300/25 via-teal-400/10 to-blue-300/10",
  },
  {
    title: "Lumen Support Desk",
    summary: "Agent assist console with real-time suggestions, keyboard-first UX, and searchable transcripts.",
    impact: "Handle time -27% and CSAT +19 points.",
    tags: ["AI assist", "Keyboard UX", "Analytics"],
    gradient: "from-violet-300/25 via-blue-300/10 to-lime-300/10",
  },
  {
    title: "Atlas IoT Grid",
    summary: "Command center for millions of IoT nodes with geo heatmaps, alerting, and offline-first sync.",
    impact: "Reduced false positives by 34% with smarter alerting.",
    tags: ["IoT", "Maps", "Offline-first"],
    gradient: "from-sky-300/25 via-emerald-300/10 to-amber-200/10",
  },
  {
    title: "Vertex Learning Lab",
    summary: "Edtech platform with adaptive paths, 3D labs, and gamified progress for distributed teams.",
    impact: "Course completion up 22% with personalized pacing.",
    tags: ["Edtech", "3D labs", "Personalization"],
    gradient: "from-indigo-300/25 via-cyan-300/10 to-emerald-300/10",
  },
];

const process = [
  {
    title: "01. Discovery Lab",
    detail: "We align on outcomes, define the riskiest assumptions, and prototype in under 10 days.",
    eta: "Week 1",
  },
  {
    title: "02. Design + Build",
    detail: "Design system, flows, and full-stack builds land in weekly increments with observable releases.",
    eta: "Week 2-6",
  },
  {
    title: "03. Launch & Learn",
    detail: "We deploy, monitor, and iterate with experiment tracks and performance budgets baked in.",
    eta: "Week 7+",
  },
];

export default function Home() {
  const servicesRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const approachRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 80, damping: 18, restDelta: 0.001 });
  const parallaxSlow = useTransform(smoothY, [0, 800], [0, -120]);
  const parallaxFast = useTransform(smoothY, [0, 800], [0, -220]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)]">
      <motion.div
        className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[var(--accent)]/12 blur-3xl"
        style={{ y: parallaxSlow }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[var(--accent-warm)]/12 blur-3xl"
        style={{ y: parallaxFast }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-12">
        <Header />
        <Hero />
        <Logos />
        <Services sectionRef={servicesRef} />
        <Projects sectionRef={projectsRef} />
        <Process sectionRef={approachRef} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

function ParallaxSection({
  children,
  intensity = 40,
  className,
  sectionRef,
  id,
}: {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
  sectionRef?: React.RefObject<HTMLElement | null>;
  id?: string;
}) {
  const localRef = useRef<HTMLElement | null>(null);
  const ref = sectionRef ?? localRef;
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

  return (
    <motion.section ref={ref as React.RefObject<HTMLElement>} id={id} style={{ y }} className={className}>
      {children}
    </motion.section>
  );
}

function Header() {
  return (
    <header className="sticky top-4 z-30">
      <div className="glass flex flex-wrap items-center gap-3 rounded-2xl px-4 py-3 sm:px-6 md:flex-nowrap md:gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-[var(--accent)]/15 px-3 py-1 text-sm font-semibold text-[var(--accent-strong)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(14,165,233,0.2)]" />
            Lumenary Software
          </div>
        </div>
        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-4 text-sm font-medium text-[var(--text-secondary)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            Book a workshop
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative mt-12 grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
      <div className="space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full border border-[var(--stroke)] bg-[var(--card-bg)] px-4 py-2 text-sm text-[var(--text-secondary)] backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent-strong)] shadow-[0_0_0_6px_rgba(14,165,233,0.2)]" />
          Software that feels intentional, fast, and alive.
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          We craft flagship web products with{" "}
          <span className="bg-gradient-to-r from-[var(--accent-strong)] via-sky-400 to-[var(--accent-warm)] bg-clip-text text-transparent">
            motion, clarity, and fearless engineering.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]"
        >
          A senior team across product, design, and full-stack engineering. We move from idea to
          ship-ready software with immersive motion, 3D storytelling, and measurable performance for web-native teams.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#contact"
            className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:brightness-110"
          >
            Launch a project
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-[var(--stroke)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            View our work
          </Link>
          <div className="flex items-center gap-3 rounded-full border border-[var(--stroke)] px-4 py-2 text-sm text-[var(--text-secondary)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-warm)] shadow-[0_0_0_6px_rgba(249,115,22,0.15)]" />
            Weekly build drops with observability.
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: "Launches delivered", value: "65+" },
            { label: "Average uplift", value: "24% faster web vitals" },
            { label: "Post-launch issues", value: "<0.2% regressions" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-3 text-sm text-[var(--text-secondary)]"
            >
              <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">{stat.label}</p>
              <p className="text-xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-[var(--accent)]/10 blur-2xl" />
        <HeroCanvas />
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute left-6 top-6 rounded-xl border border-[var(--stroke)] bg-[var(--card-bg)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-sm backdrop-blur"
          >
            Live deploys & storybook links
          </motion.div>
          <motion.div
            animate={{ y: [10, -4, 10] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.6 }}
            className="absolute bottom-6 right-6 rounded-xl border border-[var(--stroke)] bg-[var(--card-bg)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-sm backdrop-blur"
          >
            CI ready · Preview in minutes
          </motion.div>
          <motion.div
            animate={{ y: [-8, 4, -8], x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 1.2 }}
            className="absolute right-[32%] top-10 rounded-xl border border-[var(--stroke)] bg-[var(--card-bg)] px-3 py-2 text-xs text-[var(--text-secondary)] shadow-sm backdrop-blur"
          >
            Hover / drag to orbit the modules
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Logos() {
  const clients = ["Northwind", "Helix", "Aperture", "Gleam", "Pioneer", "Monocle"];
  return (
    <section className="mt-14">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-4 py-3 text-xs text-[var(--text-secondary)] sm:gap-6 sm:px-6 sm:text-sm">
        <span className="rounded-full bg-[var(--accent)]/20 px-3 py-1 text-[var(--accent-strong)]">
          Trusted by product teams
        </span>
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

function Services({ sectionRef }: { sectionRef?: React.RefObject<HTMLElement | null> }) {
  return (
    <ParallaxSection id="services" sectionRef={sectionRef} intensity={45} className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">What we do</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services built for momentum</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            From strategy through build, we combine expressive design, motion, and resilient engineering
            so you can launch faster without sacrificing polish.
          </p>
        </div>
        <Link
          href="#contact"
          className="hidden rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          Plan a sprint
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/6 via-transparent to-[var(--accent-warm)]/8 opacity-80" />
            <div className="relative space-y-3">
              <div className="inline-flex rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                {service.title}
              </div>
              <p className="text-[var(--text-secondary)]">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--stroke)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ParallaxSection>
  );
}

function Projects({ sectionRef }: { sectionRef?: React.RefObject<HTMLElement | null> }) {
  return (
    <ParallaxSection id="work" sectionRef={sectionRef} intensity={60} className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">Selected work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experiences that move</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            Interactive 3D, realtime systems, and design systems that keep teams confident after launch.
          </p>
        </div>
        <Link
          href="/projects"
          className="hidden rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-flex"
        >
          See details
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} delay={idx * 0.1} direction={idx % 2 === 0 ? -1 : 1} />
        ))}
      </div>
    </ParallaxSection>
  );
}

function ProjectCard({
  project,
  delay,
  direction,
}: {
  project: (typeof projects)[number];
  delay: number;
  direction: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xRaw = useTransform(scrollYProgress, [0, 1], [direction * 40, direction * -40]);
  const x = useSpring(xRaw, { stiffness: 120, damping: 20, mass: 0.35 });

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
      className="relative overflow-hidden rounded-3xl border border-[var(--stroke)] bg-[var(--card-bg)] p-6"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 transition duration-500`}
      />
      <motion.div whileHover={{ y: -4 }} className="relative flex h-full flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex rounded-full bg-[var(--text-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--text-primary)]">
            {project.title}
          </div>
          <p className="text-lg font-semibold text-[var(--text-primary)]">{project.summary}</p>
          <p className="text-[var(--text-secondary)]">{project.impact}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--text-secondary)]">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[var(--card-bg)]/70 px-3 py-1 backdrop-blur">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Process({ sectionRef }: { sectionRef?: React.RefObject<HTMLElement | null> }) {
  return (
    <ParallaxSection id="approach" sectionRef={sectionRef} intensity={40} className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--accent-strong)]">How we work</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A rhythm built for clarity</h2>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            Close collaboration, async visibility, and demos that keep stakeholders aligned every week.
          </p>
        </div>
        <Link
          href="/services"
          className="hidden rounded-full border border-[var(--stroke)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] md:inline-flex"
        >
          Engagement models
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {process.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="glass relative rounded-3xl p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--muted-surface)] via-transparent to-transparent" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--accent-strong)]">{step.title}</span>
                <span className="rounded-full border border-[var(--stroke)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                  {step.eta}
                </span>
              </div>
              <p className="text-[var(--text-secondary)]">{step.detail}</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--stroke)] to-transparent" />
              <p className="text-sm font-mono text-[var(--accent-strong)]">
                Status: always shipping
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </ParallaxSection>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-20">
      <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 via-transparent to-[var(--accent-warm)]/10" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[var(--accent-strong)]">Ready when you are</p>
            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Let&apos;s build your next flagship experience.
            </h3>
            <p className="max-w-2xl text-[var(--text-secondary)]">
              Drop a brief and we&apos;ll share a tailored plan, timelines, and a clickable prototype to react to.
              Expect a response within one business day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:hello@lumenary.studio"
                className="rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                hello@lumenary.studio
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--stroke)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                Share a brief
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Timezone coverage", value: "Americas + EMEA" },
              { label: "Engagements", value: "Product squads · Rapid sprints" },
              { label: "Stack", value: "Next.js · Edge · AIOps" },
              { label: "Response SLA", value: "<12 hours" },
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

function Footer() {
  return (
    <footer className="mx-auto mt-14 w-full max-w-6xl px-5 pb-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--muted-surface)] px-4 py-4 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3 text-[var(--text-primary)]">
          <div className="h-2 w-2 rounded-full bg-[var(--accent-strong)] shadow-[0_0_0_6px_rgba(14,165,233,0.2)]" />
          Lumenary Software · Crafted in Next.js, Framer Motion, and Three.js
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
