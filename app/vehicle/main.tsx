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
    setActiveSection(0);
  }, []);

  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection, setActiveSection]);

  useEffect(() => {
    if (brandFilter && sectionRefs.current[1]) {
      sectionRefs.current[1]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [brandFilter]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="h-screen overflow-hidden">
      <Navigation
        currentSection={activeSection}
        totalSections={3}
        onNavigate={scrollToSection}
      />
      <div className="snap-container">
        <HeroSection
          backgroundImage="bg-[url('/hero-2.png')]"
          forwardedRef={(el) => (sectionRefs.current[0] = el)}
          highlightedText="véhicules"
          title="Découvrez notre sélection de"
        />
        <Article
          _initialBrand={brandFilter || undefined}
          forwardedRef={(el) => (sectionRefs.current[1] = el)}
        />
        <FooterSection forwardedRef={(el) => (sectionRefs.current[2] = el)} />
      </div>
    </main>
  );
}
