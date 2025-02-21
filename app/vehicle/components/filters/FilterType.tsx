import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Checkbox } from "@nextui-org/react";

type VehicleType = "all" | "car" | "motorcycle";

interface FilterTypeProps {
  onFilterChange: (type: string[]) => void;
}

const vehicleTypes: { value: VehicleType; label: string }[] = [
  { value: "all", label: "Tous les véhicules" },
  { value: "car", label: "Voitures" },
  { value: "motorcycle", label: "Motos" },
];

export const FilterType = ({ onFilterChange }: FilterTypeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<VehicleType>("all");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleTypeSelect = (type: VehicleType) => {
    setSelectedType(type);
    onFilterChange([type]);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        className="w-full bg-secondary border-b border-white py-2 pl-2 pr-8 uppercase font-roboto font-bold appearance-none flex items-center justify-between text-white"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedType === "all"
            ? "Type de véhicule"
            : vehicleTypes.find((t) => t.value === selectedType)?.label}
        </span>
        <FaChevronDown
          className={`absolute right-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="w-full bg-secondary border border-white overflow-y-auto">
          <div className="p-4 flex flex-col gap-2 font-roboto font-bold">
            {vehicleTypes.map((type) => (
              <Checkbox
                key={type.value}
                className="p-2 hover:bg-white/10"
                color="primary"
                isSelected={selectedType === type.value}
                onChange={() => {
                  setSelectedType(type.value);
                  onFilterChange([type.value]);
                  setIsOpen(false);
                }}
              >
                <span className="text-white uppercase">{type.label}</span>
              </Checkbox>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
