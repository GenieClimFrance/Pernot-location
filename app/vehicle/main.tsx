"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Article from "./components/Article";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { useSection } from "@/context/SectionContext";
import { useIntersectionObserver } from "@/hook/useIntersectionObserver";
import FooterSection from "@/components/FooterSection";

export default function Main() {
  const { activeSection, sectionRefs } = useIntersectionObserver();
  const { setActiveSection } = useSection();
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get("brand");

  useEffect(() => {
    // Forcer la section 0 à être active au chargement
    setActiveSection(0);
  }, []); // Exécuté une seule fois au montage

  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection, setActiveSection]);

  // Ajoutez cet effet pour définir le filtre initial
  useEffect(() => {
    if (brandFilter && sectionRefs.current[1]) {
      // Faire défiler jusqu'à la section des véhicules
      sectionRefs.current[1]?.scrollIntoView({ behavior: "smooth" });
      // Vous devrez créer une fonction pour mettre à jour le filtre
      // Cette fonction devra être passée à Article
    }
  }, [brandFilter]);

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
          backgroundImage="bg-[url('/hero-2.png')]"
          forwardedRef={(el) => (sectionRefs.current[0] = el)}
          highlightedText="véhicules"
          isHomePage={false}
          title="Découvrez notre sélection de"
        />
        <Article
          forwardedRef={(el) => (sectionRefs.current[1] = el)}
          initialBrand={brandFilter || undefined}
        />
        <FooterSection forwardedRef={(el) => (sectionRefs.current[2] = el)} />
      </div>
    </main>
  );
}
