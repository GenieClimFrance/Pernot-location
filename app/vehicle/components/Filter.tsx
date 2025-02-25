import { useState, useRef, useEffect } from "react";

import { FilterButton } from "./filters/FilterButton";
import { FilterHeader } from "./filters/FilterHeader";
import { FilterType } from "./filters/FilterType";
import { FilterBrand } from "./filters/FilterBrand";
import { FilterPrice } from "./filters/FilterPrice";
import { FilterTransmission } from "./filters/FilterTransmission";

import { useSection } from "@/context/SectionContext";

interface FilterProps {
  onFilterChange: (types: string[]) => void;
  onPriceChange: (price: number) => void;
  onTransmissionChange: (transmission: string) => void;
}

function Filter({
  onFilterChange,
  onPriceChange,
  onTransmissionChange,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useSection();
  const priceFilterRef = useRef<HTMLInputElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px correspond à 'md' dans Tailwind
    };

    // Vérification initiale
    checkIsMobile();

    // Ajouter un listener pour le redimensionnement
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleReset = () => {
    onFilterChange(["all"]);
    onPriceChange(0);
    onTransmissionChange("all");
    if (priceFilterRef.current) {
      priceFilterRef.current.value = "0";
    }
    setIsOpen(false);
  };

  // Ne vérifie activeSection que sur mobile
  if (isMobile && activeSection !== 1) return null;

  return (
    <>
      {!isOpen && (
        <FilterButton
          className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
          onClick={() => setIsOpen(true)}
        >
          <span className="flex justify-center text-white items-center gap-2 text-nowrap">
            Filtrer les résultats
          </span>
        </FilterButton>
      )}

      {isOpen && (
        <div className="md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          <FilterButton variant="secondary" onClick={handleReset}>
            Réinitialiser
          </FilterButton>
          <FilterButton onClick={() => setIsOpen(false)}>Valider</FilterButton>
        </div>
      )}

      <aside
        className={`
          fixed inset-0 bg-secondary z-40 pt-24 transition-all duration-300 md:relative md:transform-none
          ${isOpen ? "translate-y-0" : "translate-y-full"}
          md:flex md:flex-col md:gap-4 md:p-4 md:w-1/2 md:max-w-[400px] md:shadow-lg md:fixed md:h-fit
        `}
      >
        <FilterHeader onClose={() => setIsOpen(false)} />
        <div className="p-4 flex flex-col gap-4">
          <FilterType onFilterChange={onFilterChange} />
          <FilterBrand onFilterChange={onFilterChange} />
          <FilterTransmission onFilterChange={onTransmissionChange} />
          <FilterPrice ref={priceFilterRef} onFilterChange={onPriceChange} />
        </div>
        <FilterButton
          className="w-fit mx-auto hidden md:block"
          variant="secondary"
          onClick={handleReset}
        >
          Réinitialiser
        </FilterButton>
      </aside>
    </>
  );
}

export default Filter;
