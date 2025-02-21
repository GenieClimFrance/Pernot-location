import Image from "next/image";

import { Vehicles } from "@/data/vehicle";

function Cards({ vehicle }: { vehicle: Vehicles }) {
  return (
    <div className="flex flex-col gap-4 bg-[url('/bg-cards.webp')] bg-cover bg-center bg-no-repeat font-roboto hover:scale-105 transition-all duration-300 lg:w-full lg:max-h-[25rem] h-full">
      <div className="flex flex-col p-4 h-full">
        <h3 className="text-xl font-bold uppercase">
          {vehicle.brand} {vehicle.model}
        </h3>
        <ul className="flex flex-wrap gap-4 mt-4 mb-4">
          <li className="flex gap-2 items-center border border-white rounded-md py-1 px-2">
            <Image
              alt="fuel"
              height={16}
              src="/icon/person.svg"
              style={{ width: "auto", height: "auto" }}
              width={16}
            />
            <p>{vehicle.passengers}</p>
          </li>
          <li className="border border-white rounded-md p-1">
            {vehicle.transmission}
          </li>
          <li className="border border-white rounded-md p-1">
            {vehicle.fuelType}
          </li>
        </ul>
        <div className="relative flex-1 w-full flex items-center justify-center">
          <Image
            alt={`image de ${vehicle.brand} ${vehicle.model}`}
            className="object-contain w-full h-full"
            height={300}
            src={vehicle.thumbnail}
            width={500}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-medium">à partir de</p>
            <p className="text-2xl font-bold">
              {vehicle.price.day}€<span className="text-sm">/jour</span>
            </p>
          </div>
          {vehicle.isNew && (
            <Image
              alt="nouveau"
              height={50}
              src="/icon/new.svg"
              style={{ width: "auto", height: "auto" }}
              width={50}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
