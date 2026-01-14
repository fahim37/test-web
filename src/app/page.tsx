'use client';

import StackedProjects from "@/components/StackedProjects";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHeader } from "@/components/home/Header";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ParallaxServiceGallery } from "@/components/home/ParallaxServiceGallery";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]">
      <div className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-12">
        <HomeHeader />
        <HeroSection />
        {/* <ServicesSection /> */}
        <section id="work" className="mt-24 sm:mt-32">
          <StackedProjects />
        </section>
        <ParallaxServiceGallery />
        <ClientLogos />
        <ProcessSection />
        <ContactSection />
      </div>
      <HomeFooter />
    </div>
  );
}
