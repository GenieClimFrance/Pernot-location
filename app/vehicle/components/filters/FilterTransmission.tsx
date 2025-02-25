import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Checkbox } from "@heroui/react";

type TransmissionType = "all" | "Automatique" | "Manuelle";

interface FilterTransmissionProps {
  onFilterChange: (type: TransmissionType) => void;
}

const transmissionTypes: { value: TransmissionType; label: string }[] = [
  { value: "all", label: "Toutes les transmissions" },
  { value: "Automatique", label: "Automatique" },
  { value: "Manuelle", label: "Manuelle" },
];

export const FilterTransmission = ({
  onFilterChange,
}: FilterTransmissionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTransmission, setSelectedTransmission] =
    useState<TransmissionType>("all");
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

  const handleTransmissionSelect = (transmission: TransmissionType) => {
    setSelectedTransmission(transmission);
    onFilterChange(transmission);
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
          {selectedTransmission === "all"
            ? "Type de transmission"
            : transmissionTypes.find((t) => t.value === selectedTransmission)
                ?.label}
        </span>
        <FaChevronDown
          className={`absolute right-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-secondary border border-white flex flex-col gap-2 font-roboto font-bold">
          {transmissionTypes.map((transmission) => (
            <Checkbox
              key={transmission.value}
              className="p-2 hover:bg-white/10"
              color="primary"
              isSelected={selectedTransmission === transmission.value}
              onChange={() => handleTransmissionSelect(transmission.value)}
            >
              <span className="text-white uppercase">{transmission.label}</span>
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );
};
