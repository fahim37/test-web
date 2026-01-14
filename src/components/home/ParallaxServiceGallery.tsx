"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";

type Service = {
  title: string;
  summary: string;
  detail: string;
  images: string[];
  color: string;
};

const services: Service[] = [
  {
    title: "Product Research",
    summary: "Validation, user flows, and discovery sprints.",
    detail: "We dive deep into user behavior and market needs to ensure the product we build is the product users actually want.",
    images: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531403001884-46a97b0aae3e?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(59, 130, 246, 0.3)", // Blue
  },
  {
    title: "UI/UX Development",
    summary: "Design systems and pixel-perfect prototypes.",
    detail: "Creating intuitive, motion-rich interfaces that look stunning on any device while maintaining strict accessibility standards.",
    images: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(168, 85, 247, 0.3)", // Purple
  },
  {
    title: "Backend Development",
    summary: "Scalable APIs and robust database architecture.",
    detail: "Building the engine under the hood. Secure, high-performance systems designed to handle millions of requests without a hiccup.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1623282030075-e28c728f9748?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(239, 68, 68, 0.3)", // Red
  },
  {
    title: "Frontend Development",
    summary: "Modern React & Next.js implementation.",
    detail: "Turning designs into high-performance code. We focus on load speeds, SEO optimization, and smooth client-side transitions.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(16, 185, 129, 0.3)", // Emerald
  },
  {
    title: "Cloud Support",
    summary: "CI/CD pipelines and infrastructure management.",
    detail: "Zero-downtime deployments and edge-delivery systems that keep your product alive and recoverable 24/7.",
    images: [
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(245, 158, 11, 0.3)", // Amber
  },
];

function VisualPair({ service, index, setActive }: { service: Service; index: number; setActive: (t: string) => void }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (isInView) setActive(service.title);
  }, [isInView, service.title, setActive]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yPrimary = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <motion.div ref={ref} className="relative flex min-h-[90vh] w-full items-center justify-center py-24">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 m-auto h-[70%] w-[80%] rounded-[60px] opacity-25 blur-[120px] transition-colors duration-1000"
        style={{ backgroundColor: service.color }}
      />
      <div className="relative z-10 grid w-full grid-cols-12 gap-0">
        <motion.div style={{ y: yPrimary }} className="col-span-8 z-20 overflow-hidden rounded-[2.5rem] border border-[var(--stroke)] bg-[var(--card-bg)] shadow-2xl">
          <img src={service.images[0]} alt={service.title} className="aspect-[16/10] w-full object-cover" />
        </motion.div>
        <motion.div style={{ y: ySecondary }} className="col-start-5 col-span-8 -mt-32 z-10 overflow-hidden rounded-[2.5rem] border border-[var(--stroke)] bg-[var(--card-bg)] shadow-2xl brightness-90 dark:brightness-75">
          <img src={service.images[1]} alt={service.title} className="aspect-[16/10] w-full object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ParallaxServiceGallery() {
  const [active, setActive] = useState<string>(services[0].title);
  const activeService = useMemo(() => services.find((s) => s.title === active) ?? services[0], [active]);

  const titleParts = activeService.title.split(" ");
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(" ");

  return (
    <section className="relative min-h-screen bg-[var(--bg-main)] px-8 py-32 transition-colors duration-500">
      <div className="mx-auto max-w-7xl lg:flex lg:gap-24">
        
        {/* Left: Sticky Dynamic Content */}
        <div className="lg:sticky lg:top-40 lg:h-fit lg:w-[450px] lg:flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-10"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] opacity-80">
                  Our Expertise
                </span>
                <h2 className="text-7xl font-bold tracking-tighter leading-[0.85] text-[var(--text-primary)]">
                  {firstWord} <br />
                  <span className="italic font-light text-[var(--text-secondary)] opacity-60">
                     {restOfTitle}
                  </span>
                </h2>
              </div>
              
              <div className="space-y-5 border-l-2 border-[var(--accent)] pl-8">
                <p className="text-2xl font-medium leading-snug text-[var(--text-primary)]">
                  {activeService.summary}
                </p>
                <p className="text-base leading-relaxed text-[var(--text-secondary)] max-w-sm">
                  {activeService.detail}
                </p>
              </div>

              <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[var(--accent)] transition-all">
                Learn More
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: The Overflowing Image Stack */}
        <div className="mt-40 flex-1 space-y-40 lg:mt-0">
          {services.map((service, idx) => (
            <VisualPair key={service.title} service={service} index={idx} setActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}