"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
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
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <section className="bg-[var(--page-bg)] px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--accent-strong)]">Selected Works</p>
            <h2 className="text-5xl font-bold tracking-tight text-[var(--text-primary)] sm:text-7xl">
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
        </div>
        {/* Extra space at bottom so the last card can scroll up */}
        <div className="h-[30vh]" />
      </section>
    </ReactLenis>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Calculate scaling: Cards underneath shrink slightly
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  // Calculate opacity: Cards underneath darken as others stack on top
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div 
      ref={container} 
      className="sticky top-0 h-fit w-full pt-10"
      style={{ top: `${80 + (index * 32)}px` }} // Each card stops 32px lower than the previous
    >
      <motion.article
        style={{ scale, opacity }}
        className="relative overflow-hidden rounded-[40px] border border-[var(--stroke)] bg-white shadow-[0_24px_60px_rgba(10,14,20,0.12)] transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(10,14,20,0.16)]"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `linear-gradient(145deg, ${project.palette.from}, ${project.palette.to})` }}
        />

        <div className="flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:p-16">
          {/* Content Section */}
          <div className="flex-1 space-y-8 text-[var(--text-primary)]">
            <div
              className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
              style={{ borderColor: `${project.palette.accent}26`, color: project.palette.accent }}
            >
              <span>{project.category}</span>
            </div>
            
            <h3 className="text-4xl font-bold leading-[1.1] sm:text-6xl">{project.title}</h3>
            
            <p className="max-w-md text-lg leading-relaxed text-[var(--text-secondary)]">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: project.palette.accent }}>
                  Location
                </p>
                <p className="font-semibold">{project.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: project.palette.accent }}>
                  Project Scope
                </p>
                <p className="font-semibold">{project.scope}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                <Image src={project.avatar} alt={project.leadName} fill className="object-cover" />
               </div>
               <div>
                 <p className="text-sm font-bold">{project.leadName}</p>
                 <p className="text-xs text-[var(--text-secondary)]">{project.leadRole}</p>
               </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-3xl shadow-lg lg:aspect-square">
            <Image
              fill
              src={project.image}
              alt={project.title}
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}
