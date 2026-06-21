"use client";

import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/sections/HeroSection";
import JourneySection from "@/app/sections/JourneySection";
import ExpertiseSection from "@/app/sections/ExpertiseSection";
import ProjectsSection from "@/app/sections/ProjectsSection";
import EcosystemSection from "@/app/sections/EcosystemSection";
import ExperienceSection from "@/app/sections/ExperienceSection";
import CertificationsSection from "@/app/sections/CertificationsSection";
import ContactSection from "@/app/sections/ContactSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-obsidian overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <JourneySection />
      <ExpertiseSection />
      <ProjectsSection />
      <EcosystemSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
