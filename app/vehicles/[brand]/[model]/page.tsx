import VehicleDetails from "./VehicleDetails";

import SimpleFooter from "@/components/SimpleFooter";
import { vehicles, type Vehicles } from "@/data/vehicle";

export default function VehiclePage({
  params,
}: {
  params: { brand: string; model: string };
}) {
  const vehicle = vehicles.find(
    (vehicle) =>
      vehicle.brand.replaceAll(" ", "-").toLowerCase() ===
        params.brand.replaceAll(" ", "-").toLowerCase() &&
      vehicle.model.replaceAll(" ", "-").toLowerCase() ===
        params.model.replaceAll(" ", "-").toLowerCase()
  );

  if (!vehicle || !vehicle.images) {
    return (
      <div className="bg-white h-screen mt-40 text-primary">
        Véhicule non trouvé
      </div>
    );
  }

  return (
    <main>
      <VehicleDetails
        vehicle={
          vehicle as Vehicles & {
            images: string[];
            features: string[];
            equipments: { id: number; name: string; icon: string }[];
          }
        }
      />
      <SimpleFooter />
    </main>
  );
}
