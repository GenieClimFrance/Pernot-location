import { useState, useEffect, forwardRef } from "react";

import { vehicles } from "@/data/vehicle";

interface FilterPriceProps {
  onFilterChange: (price: number) => void;
  value?: number;
}

export const FilterPrice = forwardRef<HTMLInputElement, FilterPriceProps>(
  ({ onFilterChange, value = 0 }, ref) => {
    const [priceRange, setPriceRange] = useState(value);
    const maxPrice = Math.max(...vehicles.map((vehicle) => vehicle.price));

    useEffect(() => {
      setPriceRange(value);
    }, [value]);

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);

      setPriceRange(value);
      onFilterChange(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value) || 0;
      const clampedValue = Math.min(Math.max(value, 0), maxPrice);

      setPriceRange(clampedValue);
      onFilterChange(clampedValue);
    };

    // Calculer le pourcentage de remplissage
    const fillPercentage = (priceRange / maxPrice) * 100;

    return (
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex justify-between items-center">
          <label
            className="text-white font-roboto font-bold uppercase"
            htmlFor="price-range"
          >
            Prix maximum par jour
          </label>
          <div className="flex items-center gap-2">
            <input
              className="w-24 px-2 py-1 text-right bg-white text-secondary font-roboto rounded focus:outline-none focus:ring-2 focus:ring-primary"
              max={maxPrice}
              min={0}
              type="number"
              value={priceRange}
              onChange={handleInputChange}
            />
            <span className="text-white font-bold font-roboto">€</span>
          </div>
        </div>
        <div className="relative mt-2">
          <input
            ref={ref}
            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary relative z-10"
            id="price-range"
            max={maxPrice}
            min={0}
            step={100}
            style={{
              background: `linear-gradient(to right, #D9470B 0%, #D9470B ${fillPercentage}%, rgba(255, 255, 255, 0.3) ${fillPercentage}%, rgba(255, 255, 255, 0.3) 100%)`,
            }}
            type="range"
            value={priceRange}
            onChange={handlePriceChange}
          />
        </div>
        <div className="flex justify-between text-xs font-roboto font-bold text-white/80">
          <span>0€</span>
          <span>{maxPrice}€</span>
        </div>
      </div>
    );
  }
);

FilterPrice.displayName = "FilterPrice";
