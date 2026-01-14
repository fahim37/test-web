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
    color: "rgba(59, 130, 246, 0.3)",
  },
  {
    title: "UI/UX Development",
    summary: "Design systems and pixel-perfect prototypes.",
    detail: "Creating intuitive, motion-rich interfaces that look stunning on any device while maintaining strict accessibility standards.",
    images: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(168, 85, 247, 0.3)",
  },
  {
    title: "Backend Development",
    summary: "Scalable APIs and robust database architecture.",
    detail: "Building the engine under the hood. Secure, high-performance systems designed to handle millions of requests without a hiccup.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1623282030075-e28c728f9748?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(239, 68, 68, 0.3)",
  },
  {
    title: "Frontend Development",
    summary: "Modern React & Next.js implementation.",
    detail: "Turning designs into high-performance code. We focus on load speeds, SEO optimization, and smooth client-side transitions.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(16, 185, 129, 0.3)",
  },
  {
    title: "Cloud Support",
    summary: "CI/CD pipelines and infrastructure management.",
    detail: "Zero-downtime deployments and edge-delivery systems that keep your product alive and recoverable 24/7.",
    images: [
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    ],
    color: "rgba(245, 158, 11, 0.3)",
  },
];

function VisualPair({ service, index, setActive }: { service: Service; index: number; setActive: (t: string) => void }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (isInView) setActive(service.title);
  }, [isInView, service.title, setActive]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Responsive Parallax: Less aggressive on mobile
  const yPrimary = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div ref={ref} className="relative flex flex-col items-start justify-center py-16 lg:min-h-[90vh] lg:py-24">
      {/* Mobile-Only Text (Visible below 1024px) */}
      <div className="mb-10 block w-full lg:hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">0{index + 1} / Service</span>
        <h3 className="mt-2 text-4xl font-bold text-[var(--text-primary)]">{service.title}</h3>
        <p className="mt-4 text-xl text-[var(--text-secondary)]">{service.summary}</p>
      </div>

      {/* The Visual Stack */}
      <div className="relative w-full">
        <div 
          className="absolute inset-0 m-auto h-[70%] w-[90%] rounded-[60px] opacity-20 blur-[80px] lg:blur-[120px]"
          style={{ backgroundColor: service.color }}
        />
        <div className="relative z-10 grid w-full grid-cols-12">
          <motion.div style={{ y: yPrimary }} className="col-span-10 lg:col-span-8 z-20 overflow-hidden rounded-2xl lg:rounded-[2.5rem] border border-[var(--stroke)] bg-[var(--card-bg)] shadow-2xl">
            <img src={service.images[0]} alt="" className="aspect-[16/10] w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: ySecondary }} className="col-start-4 col-span-9 -mt-20 lg:col-start-5 lg:col-span-8 lg:-mt-32 z-10 overflow-hidden rounded-2xl lg:rounded-[2.5rem] border border-[var(--stroke)] bg-[var(--card-bg)] shadow-2xl brightness-90 dark:brightness-75">
            <img src={service.images[1]} alt="" className="aspect-[16/10] w-full object-cover" />
          </motion.div>
        </div>
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
    <section className="relative min-h-screen bg-[var(--bg-main)] px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl lg:flex lg:gap-24">
        
        {/* Desktop-Only Sticky Sidebar (Hidden on Mobile) */}
        <div className="hidden lg:sticky lg:top-40 lg:block lg:h-fit lg:w-[450px] lg:flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-10"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Our Expertise</span>
                <h2 className="text-7xl font-bold tracking-tighter leading-[0.85] text-[var(--text-primary)]">
                  {firstWord} <br />
                  <span className="italic font-light text-[var(--text-secondary)] opacity-60">{restOfTitle}</span>
                </h2>
              </div>
              
              <div className="space-y-5 border-l-2 border-[var(--accent)] pl-8">
                <p className="text-2xl font-medium text-[var(--text-primary)]">{activeService.summary}</p>
                <p className="text-base text-[var(--text-secondary)] max-w-sm">{activeService.detail}</p>
              </div>

              <button className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">Learn More →</button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrolling Images + Mobile Text Content */}
        <div className="flex-1 space-y-24 lg:space-y-40">
            {/* Introductory Header for Mobile */}
            <div className="lg:hidden mb-16">
                 <h2 className="text-5xl font-bold tracking-tighter text-[var(--text-primary)]">Expertise</h2>
                 <p className="mt-4 text-[var(--text-secondary)]">Scroll to explore our core specialized services.</p>
            </div>

          {services.map((service, idx) => (
            <VisualPair key={service.title} service={service} index={idx} setActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}