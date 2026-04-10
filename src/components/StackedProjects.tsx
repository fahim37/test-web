"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  category: string;
  title: string;
  problem: string;
  solution: string;
  scope: string;
  tech: string;
  image: string;
  link: string;
  palette: {
    from: string;
    to: string;
    accent: string;
    text: string;
  };
};

const projects: Project[] = [
  {
    category: "Security",
    title: "Royal House Check",
    problem: "Property owners and managers needed reliable, accessible security coverage that provides peace of mind around the clock — without complex processes or lengthy wait times.",
    solution: "We built a 24/7 security patrol platform with a digital dashboard for instant incident updates, secure footage access, and flexible scheduling managed by vetted field teams.",
    scope: "Web Platform",
    tech: "Next.js / Vercel",
    image: "/lhr-zbr9.vercel.app.png",
    link: "https://lhr-zbr9.vercel.app/",
    palette: { from: "#ffffff", to: "#e8f0ff", accent: "#035FE8", text: "#0A0E14" },
  },
  {
    category: "Community",
    title: "Walk Throughz",
    problem: "People experience their cities as tourists or commuters, missing authentic connections to the local businesses and communities that make neighborhoods unique.",
    solution: "We created a platform for guided small-group experiences led by local business owners — letting users browse, book, and discover the stories behind independent shops, galleries, and cafes.",
    scope: "Web Application",
    tech: "Next.js / Vercel",
    image: "/httpsnkp-delta.vercel.app.png",
    link: "https://nkp-delta.vercel.app/",
    palette: { from: "#fff8f1", to: "#ffe1c4", accent: "#FF6F00", text: "#0F1218" },
  },
  {
    category: "Agriculture",
    title: "Table Fresh",
    problem: "A growing disconnect between consumers and their food sources meant seasonal, locally-grown produce was hard to find and even harder to trust.",
    solution: "We designed a farm-to-table marketplace that lets customers browse nearby growers, compare seasonal availability, and build direct relationships with local producers — cutting out the middlemen.",
    scope: "Web Platform",
    tech: "Next.js / Vercel",
    image: "/lhr-fxm5.vercel.app.png",
    link: "https://lhr-fxm5.vercel.app/",
    palette: { from: "#f0fff4", to: "#d4edda", accent: "#1B8332", text: "#0A0E14" },
  },
  {
    category: "SaaS / Automation",
    title: "SAEMA",
    problem: "Organizations were drowning in repetitive manual work, inefficient handoffs, and operational bottlenecks that kept teams from focusing on strategic decisions.",
    solution: "We engineered workflow automation and AI-powered operational tools — combining consulting with engineering to deliver maintainable, scalable systems that teams can actually adopt long-term.",
    scope: "Product Suite",
    tech: "Next.js / Vercel",
    image: "/sm-ml.vercel.app.png",
    link: "https://sm-ml.vercel.app/",
    palette: { from: "#f8f5ff", to: "#e8dff5", accent: "#7C3AED", text: "#11151C" },
  },
];

export default function StackedProjects() {
  return (
    <section className="pt-28 pb-8 sm:pt-36">
      <div className="mb-16 sm:mb-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">Selected Works</p>
        <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-[var(--text-primary)]">
          Case Studies
        </h2>
      </div>

      <div className="flex flex-col gap-[10vh]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
      <div className="h-[30vh]" />
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  return (
    <div
      ref={container}
      className="sticky top-0 h-fit w-full pt-10"
      style={{ top: `${80 + index * 32}px` }}
    >
      <motion.article
        style={{ scale, opacity, willChange: "transform, opacity" }}
        className="group relative overflow-hidden rounded-[32px] border border-[var(--stroke)] shadow-[0_20px_50px_rgba(10,14,20,0.10)] transition-shadow duration-700 ease-out hover:shadow-[0_32px_80px_rgba(10,14,20,0.15)]"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `linear-gradient(160deg, ${project.palette.from}, ${project.palette.to})` }}
        />

        <div className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-stretch lg:gap-10 lg:p-10">
          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between gap-6" style={{ color: project.palette.text }}>
            <div className="space-y-4">
              <div
                className="inline-flex items-center rounded-full border bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm"
                style={{ borderColor: `${project.palette.accent}20`, color: project.palette.accent }}
              >
                {project.category}
              </div>

              <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.15] tracking-tight">{project.title}</h3>

              <div className="space-y-3 pt-1">
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: project.palette.accent }}>
                    The Challenge
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: project.palette.accent }}>
                    Our Solution
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6 border-t pt-4" style={{ borderColor: `${project.palette.accent}15` }}>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: project.palette.accent }}>
                    Scope
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">{project.scope}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: project.palette.accent }}>
                    Tech
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">{project.tech}</p>
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-500 ease-out hover:gap-3 hover:shadow-lg"
                style={{ backgroundColor: project.palette.accent }}
              >
                View Live Project
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section — browser-frame style */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-1 flex-col overflow-hidden rounded-xl bg-[#1a1a2e] shadow-lg transition-transform duration-700 ease-out group-hover:scale-[1.015] cursor-pointer lg:min-h-[320px]"
          >
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#12121f]">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="ml-2 flex-1 rounded-md bg-white/10 px-3 py-0.5 text-[11px] text-white/40 font-mono truncate">
                {project.link.replace("https://", "")}
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative flex-1 min-h-[200px]">
              <Image
                fill
                src={project.image}
                alt={project.title}
                className="object-cover object-top transition-transform duration-[1s] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </a>
        </div>
      </motion.article>
    </div>
  );
}
