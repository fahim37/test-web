"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./ServicesParallaxSection.module.css";

type ParallaxLayerProps = {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
};

function ParallaxLayer({ children, intensity = 20, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [intensity, -intensity]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

const serviceDetails: Record<string, string> = {
  "Frontend Development": "Design system-driven UIs, motion, accessibility, and edge-ready performance budgets.",
  "Backend Development": "Cloud-native APIs, data layers, observability, and zero-downtime deploys.",
  "UI/UX Development": "Product storytelling with prototypes, usability loops, and content design that converts.",
  DevOps: "Pipelines, monitoring, feature flags, and platform guardrails to ship safely and often.",
};

export default function ServicesParallaxSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardOffsets = [22, 42, 64, 28].map((intensity) =>
    useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [intensity, -intensity])
  );

  const [active, setActive] = useState<string>("Frontend Development");

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <ParallaxLayer intensity={16} className={styles.left}>
          <span className={styles.eyebrow}>Services</span>
          <h2 className={styles.title}>Product delivery with craft, motion, and observability.</h2>
          <p className={styles.description}>
            A multi-disciplinary pod that ships end-to-end: from prototypes to production, with delightful interfaces and
            resilient cloud engineering.
          </p>
          <div className={styles.servicesList}>
            {Object.keys(serviceDetails).map((service) => (
              <div
                key={service}
                className={`${styles.serviceItem} ${active === service ? styles.active : ""}`}
                onMouseEnter={() => setActive(service)}
                onFocus={() => setActive(service)}
                tabIndex={0}
              >
                {service}
                {active === service && <div className={styles.serviceDetail}>{serviceDetails[service]}</div>}
              </div>
            ))}
          </div>
        </ParallaxLayer>

        <div className={styles.right}>
          {[styles.card1, styles.card2, styles.card3, styles.card4].map((cardClass, idx) => (
            <ParallaxLayer key={cardClass} intensity={0}>
              <motion.div
                className={styles.card}
                style={{
                  y: cardOffsets[idx],
                  zIndex: 10 - idx,
                  opacity: useTransform(scrollYProgress, [0, 1], [1, 0.92]),
                }}
              >
                <div className={`${styles.cardInner} ${cardClass}`} />
              </motion.div>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </section>
  );
}
