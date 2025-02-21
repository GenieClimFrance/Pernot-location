import Link from "next/link";
import { useMemo } from "react";

import Cards from "@/app/vehicle/components/Cards";
import { vehicles } from "@/data/vehicle";

function Spotlight({ currentVehicleId }: { currentVehicleId: number }) {
  // Utiliser useMemo pour maintenir une sélection stable entre les rendus
  const suggestedVehicles = useMemo(() => {
    const otherVehicles = vehicles.filter(
      (vehicle) =>
        vehicle.id !== currentVehicleId &&
        vehicle.type === vehicles.find((v) => v.id === currentVehicleId)?.type
    );

    // Prendre les 3 premiers véhicules similaires
    return otherVehicles.slice(0, 3);
  }, [currentVehicleId]);

  if (suggestedVehicles.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl text-secondary font-bold mb-8 uppercase font-roboto">
        Véhicules à la une
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestedVehicles.map((vehicle) => (
          <Link
            key={vehicle.id}
            href={`/vehicles/${vehicle.brand.replaceAll(" ", "-").toLowerCase()}/${vehicle.model.replaceAll(" ", "-").toLowerCase()}`}
          >
            <Cards vehicle={vehicle} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Spotlight;
