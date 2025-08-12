"use client";
import HeaderGeometric from "@/components/common/header-geometric";
import TrustedBySection from "@/components/common/trusted-by-section";
import ExploreServices from "@/components/common/explore-services";
import AppointmentCTA from "@/components/common/appointment-cta";
import BusinessGrowth from "@/components/common/business-growth";
import ClientReviews from "@/components/common/client-reviews";
import IndustriesServed from "@/components/common/industries-served";
import ImageSlider from "@/components/common/image-slider";
import FooterGeometric from "@/components/common/footer-geometric";
import StartSimplerSection from "@/components/common/start-simpler-section";
import PricingSection from "@/components/common/pricing-section";
import HeroGeometric from "@/components/common/hero-geometric";
import { useEffect, useState } from "react";
import ProjectModal from "@/components/common/project-modal";
import RecentProjects from "@/components/common/recent-projects";
import WhatsAppButton from "@/components/common/whatsapp-button";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main>
      <HeaderGeometric />
      {isMounted && <HeroGeometric />}
      <ImageSlider />
      <TrustedBySection />
      <ExploreServices />
      <ProjectModal
        isOpen={false}
        onClose={() => {}}
        projects={[]}
        initialProjectId={0}
      />
      <div id="projects">
        <RecentProjects />
      </div>
      <AppointmentCTA />
      <BusinessGrowth />
      <ClientReviews />
      <IndustriesServed />
      <StartSimplerSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="contact">
      <AppointmentCTA />
      </div>
      <FooterGeometric />
      <WhatsAppButton />
    </main>
  );
}
