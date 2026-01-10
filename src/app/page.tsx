'use client';

import StackedProjects from "@/components/StackedProjects";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHeader } from "@/components/home/Header";
import { ProcessSection } from "@/components/home/ProcessSection";
import ServicesParallaxSection from "@/components/ServicesParallaxSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]">
      <div className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-12">
        <HomeHeader />
        <HeroSection />
        {/* <ServicesParallaxSection /> */}
        <section id="work" className="mt-24 sm:mt-32">
          <StackedProjects />
        </section>
        <ClientLogos />
        <ProcessSection />
        <ContactSection />
      </div>
      <HomeFooter />
    </div>
  );
}
