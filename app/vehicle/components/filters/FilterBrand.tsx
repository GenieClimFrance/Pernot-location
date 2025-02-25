import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Checkbox } from "@heroui/checkbox";

import { vehicles } from "@/data/vehicle";

interface FilterBrandProps {
  onFilterChange: (types: string[]) => void;
}

export const FilterBrand = ({ onFilterChange }: FilterBrandProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const uniqueBrands = Array.from(
    new Set(vehicles.map((vehicle) => vehicle.brand))
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBrandToggle = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    onFilterChange(
      updatedBrands.length
        ? updatedBrands.map((b) => b.toLowerCase().replace(" ", "-"))
        : ["all"]
    );
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        className="w-full bg-secondary border-b border-white py-2 pl-2 pr-8 uppercase font-roboto font-bold appearance-none flex items-center justify-between text-white"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedBrands.length
            ? `${selectedBrands.length} marque${selectedBrands.length > 1 ? "s" : ""} sélectionnée${selectedBrands.length > 1 ? "s" : ""}`
            : "Marque du véhicule"}
        </span>
        <FaChevronDown
          className={`absolute right-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-secondary border border-white flex flex-col gap-2 font-roboto font-bold">
          <Checkbox
            className="p-2 hover:bg-white/10"
            color="primary"
            isSelected={selectedBrands.length === 0}
            onChange={() => {
              setSelectedBrands([]);
              onFilterChange(["all"]);
            }}
          >
            <span className="text-white uppercase">Toutes les marques</span>
          </Checkbox>
          {uniqueBrands.map((brand) => (
            <Checkbox
              key={brand}
              className="p-2 hover:bg-white/10"
              color="primary"
              isSelected={selectedBrands.includes(brand)}
              onChange={() => handleBrandToggle(brand)}
            >
              <span className="text-white uppercase">{brand}</span>
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );
};
