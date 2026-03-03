"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

// ... [Project type and projects array remain the same as your original]
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
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <section className="bg-slate-50 px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">Selected Works</p>
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
              Case Studies
            </h2>
          </div>

          <div className="flex flex-col gap-[10vh]">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                total={projects.length}
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

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
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
        className="relative overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-2xl transition-shadow duration-500 hover:shadow-black/10"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `linear-gradient(145deg, ${project.palette.from}, ${project.palette.to})` }}
        />

        <div className="flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:p-16">
          {/* Content Section */}
          <div className="flex-1 space-y-8 text-slate-900">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <span>{project.category}</span>
            </div>
            
            <h3 className="text-4xl font-bold leading-[1.1] sm:text-6xl">{project.title}</h3>
            
            <p className="max-w-md text-lg leading-relaxed text-slate-800/80">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700/50">Location</p>
                <p className="font-semibold">{project.location}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700/50">Project Scope</p>
                <p className="font-semibold">{project.scope}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                <Image src={project.avatar} alt={project.leadName} fill className="object-cover" />
               </div>
               <div>
                 <p className="text-sm font-bold">{project.leadName}</p>
                 <p className="text-xs text-slate-700/70">{project.leadRole}</p>
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