import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { vehicles } from "../../../data/vehicle";

import Filter from "./Filter";
import Cards from "./Cards";

import { BlurFade } from "@/components/ui/blur-fade";

type FilterState = {
  types: string[];
  maxPrice: number;
  transmission: string;
};

interface ArticleProps {
  forwardedRef: (el: HTMLElement | null) => void;
  initialBrand?: string;
}

function Article({ forwardedRef, initialBrand }: ArticleProps) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const brandParam = searchParams.get("brand");

  const [filters, setFilters] = useState<FilterState>({
    types: [brandParam || typeParam || "all"],
    maxPrice: 0,
    transmission: "all",
  });

  const handleTypeChange = (types: string[]) => {
    setFilters((prev) => ({ ...prev, types: types }));
  };

  const handlePriceChange = (price: number) => {
    setFilters((prev) => ({ ...prev, maxPrice: price }));
  };

  const handleTransmissionChange = (transmission: string) => {
    setFilters((prev) => ({ ...prev, transmission }));
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (!filters.types.includes("all")) {
      const brandMatch = filters.types.some(
        (type) =>
          vehicle.brand.toLowerCase().replace(" ", "-") === type.toLowerCase()
      );
      const typeMatch = filters.types.some((type) => vehicle.type === type);

      if (!brandMatch && !typeMatch) return false;
    }

    if (filters.maxPrice > 0 && vehicle.price.day > filters.maxPrice) {
      return false;
    }

    if (
      filters.transmission !== "all" &&
      vehicle.transmission !== filters.transmission
    ) {
      return false;
    }

    return true;
  });

  return (
    <article
      ref={forwardedRef}
      className="snap-section bg-white flex flex-col gap-4 lg:pb-4 md:px-10"
    >
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-10 p-4 pt-24 lg:pt-32 bg-white w-full overflow-y-auto 2xl:px-20">
        <Filter
          onFilterChange={handleTypeChange}
          onPriceChange={handlePriceChange}
          onTransmissionChange={handleTransmissionChange}
        />
        <section className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 lg:w-full gap-4">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <BlurFade key={vehicle.id} inView={true}>
                <Link
                  href={`/vehicles/${vehicle.brand.replaceAll(" ", "-").toLowerCase()}/${vehicle.model.replaceAll(" ", "-").toLowerCase()}`}
                >
                  <Cards key={vehicle.id} vehicle={vehicle} />
                </Link>
              </BlurFade>
            ))
          ) : (
            <section className="w-full text-center py-8 text-gray-500 font-roboto">
              Aucun résultat
            </section>
          )}
        </section>
      </section>
    </article>
  );
}

export default Article;
