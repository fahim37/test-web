"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  category: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  scope: string;
  leadName: string;
  leadRole: string;
  image: string;
  avatar: string;
  palette: {
    from: string;
    to: string;
    accent: string;
    text: string;
  };
};

const projects: Project[] = [
  {
    category: "Restaurant",
    title: "Transform Your Dining",
    description: "Plate pairs premium restaurants with curated discovery, loyalty, and seamless table-side checkout.",
    location: "France",
    duration: "5 Months",
    scope: "Mobile App",
    leadName: "Neil Saidi",
    leadRole: "Plate CEO",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=80",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    palette: { from: "#ffb3b8", to: "#ff9ec2", accent: "#ff6f61", text: "#1c1c28" },
  },
  {
    category: "Travel",
    title: "Curated Journeys",
    description: "A travel OS with dynamic itineraries, live concierge, and carbon-friendly routing across regions.",
    location: "Portugal",
    duration: "8 Weeks",
    scope: "Web & Mobile",
    leadName: "Maya Patel",
    leadRole: "Product Lead",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1100&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&auto=format&fit=crop&q=60",
    palette: { from: "#b8c7ff", to: "#9ad3ff", accent: "#4b7bff", text: "#10223b" },
  },
  {
    category: "Healthcare",
    title: "Revolutionize Fitness Goals",
    description: "Fitmate blends AI coaching, biometric sync, and playful streaks to keep members consistently engaged.",
    location: "Australia",
    duration: "12 Weeks",
    scope: "Mobile Platform",
    leadName: "Shubho Al-Farooque",
    leadRole: "Founder",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1100&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=60",
    palette: { from: "#b5f1ff", to: "#43e0d0", accent: "#16b3a3", text: "#0a1c26" },
  },
  {
    category: "SaaS",
    title: "Simplifying Vehicle Care",
    description: "Zantrik modernizes fleet maintenance with gamified checklists, predictive alerts, and instant claims.",
    location: "UAE",
    duration: "10 Weeks",
    scope: "Product Suite",
    leadName: "Alia Khan",
    leadRole: "Ops Lead",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1100&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=60",
    palette: { from: "#ffe5a3", to: "#ffc270", accent: "#f19b38", text: "#2b1800" },
  },
];

export default function StackedProjects() {
  const stackRef = useRef<HTMLElement | null>(null);

  return (
    <ReactLenis root options={{ lerp: 0.12, smoothWheel: true, smoothTouch: true }}>
      <section ref={stackRef} className="relative">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[var(--accent-strong)]">Featured Work</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Recent launches & case studies</h2>
            <p className="max-w-2xl text-[var(--text-secondary)]">
              Layered cards with smooth scrolling and motion-driven focus on each story.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--card-bg)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)]"
          >
            Scroll to explore
            <span className="text-lg">↘</span>
          </motion.div>
        </div>

        <div className="relative space-y-10 pb-8 pt-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </ReactLenis>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const stripes = useTransform(scrollYProgress, [0, 1], [0.6, 0.25]);

  return (
    <motion.article
      ref={ref}
      style={{
        top: `calc(5.5rem + ${index * 64}px)`,
        scale,
        y,
      }}
      className="sticky left-0 right-0 overflow-hidden rounded-[32px] shadow-[0_28px_100px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${project.palette.from}, ${project.palette.to})` }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.36),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.22),transparent_30%)]"
        style={{ opacity: stripes }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_35%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.16)_80%)] bg-[length:26px_100%] opacity-45 mix-blend-soft-light" />

      <motion.div
        whileHover={{ y: -4, scale: 1.003 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="relative flex flex-col gap-6 p-6 sm:p-8 lg:p-10 lg:flex-row lg:items-center"
      >
        <div className="flex-1 space-y-4 text-slate-900">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur">
            <span className="text-sm italic text-slate-700">{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-slate-800/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700/70">Case Study</span>
          </div>
          <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">{project.title}</h3>
          <p className="max-w-2xl text-[15px] leading-7 text-slate-800/90">
            {project.description}
          </p>
          <div className="grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-800/90 sm:gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-700/70">Location</p>
              <p className="text-xl font-semibold text-slate-900">{project.location}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-700/70">Project Duration</p>
              <p className="text-xl font-semibold text-slate-900">{project.duration}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-700/70">Work Scope</p>
              <p className="text-xl font-semibold text-slate-900">{project.scope}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-white/65 px-4 py-2 shadow-sm ring-1 ring-white/50 backdrop-blur">
            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/80">
              <Image
                src={project.avatar}
                alt={project.leadName}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 leading-tight">
              <p className="text-sm font-semibold text-slate-900">{project.leadName}</p>
              <p className="text-xs font-medium text-slate-700/80">{project.leadRole}</p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-white shadow">
              →
            </span>
          </div>
        </div>

        <motion.div
          className="relative isolate w-full max-w-[460px] overflow-hidden rounded-[24px] bg-white/55 p-3 shadow-2xl ring-1 ring-white/60 lg:w-[420px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35),transparent_30%)]" />
          <motion.div
            className="relative h-[280px] w-full overflow-hidden rounded-[18px] sm:h-[320px]"
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              fill
              src={project.image}
              alt={project.title}
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </motion.div>
          <div className="mt-3 flex items-center justify-between text-xs font-medium text-slate-700">
            <span>Prototype preview</span>
            <span className="flex items-center gap-1 text-slate-900">
              View case
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
