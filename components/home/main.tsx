"use client";

import { useEffect } from "react";

import { useIntersectionObserver } from "@/hook/useIntersectionObserver";
import HeroSection from "@/components/HeroSection";
import VehiclesSection from "@/components/VehicleSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import { useSection } from "@/context/SectionContext";
import Footer from "@/components/FooterSection";

export default function Main() {
  const { activeSection, sectionRefs } = useIntersectionObserver();
  const { setActiveSection } = useSection();

  // Met à jour l'état de la section active dans le contexte
  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection, setActiveSection]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="h-screen overflow-hidden">
      <Navigation
        currentSection={activeSection}
        totalSections={4}
        onNavigate={scrollToSection}
      />
      <div className="snap-container">
        <HeroSection
          backgroundImage="bg-[url('/hero.png')]"
          description="Explorez notre collection exclusive de véhicules haut de gamme pour des occasions spéciales et des trajets"
          forwardedRef={(el) => (sectionRefs.current[0] = el)}
          highlightedText="vos rêves"
          isHomePage={true}
          title="Louez la voiture de"
        />
        <VehiclesSection forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <ContactSection forwardedRef={(el) => (sectionRefs.current[2] = el)} />
        <Footer forwardedRef={(el) => (sectionRefs.current[3] = el)} />
      </div>
    </main>
  );
}
