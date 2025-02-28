import Image from "next/image";

import { Vehicles } from "@/data/vehicle";

function Cards({ vehicle }: { vehicle: Vehicles }) {
  return (
    <div
      className="
      flex flex-col gap-4 
      bg-[url('/bg-cards.webp')] bg-cover bg-center bg-no-repeat 
      font-roboto text-white
      h-full lg:w-full 2xl:max-h-[25rem] 
      hover:scale-105 transition-all duration-300
    "
    >
      <div className="flex flex-col h-full p-4">
        <h3 className="text-xl font-bold uppercase text-white">
          {vehicle.brand} {vehicle.model}
        </h3>

        <ul className="flex flex-wrap gap-4 my-4">
          <li className="flex items-center gap-2 px-2 py-1 border border-white rounded-md">
            <Image
              alt="fuel"
              height={16}
              src="/icon/person.svg"
              style={{ width: "auto", height: "auto" }}
              width={16}
            />
            <p className="text-white">{vehicle.passengers}</p>
          </li>
          <li className="p-1 border border-white rounded-md text-white">
            {vehicle.transmission}
          </li>
          <li className="p-1 border border-white rounded-md text-white">
            {vehicle.fuelType}
          </li>
        </ul>

        <div className="relative flex-1 flex items-center justify-center w-full">
          <Image
            alt={`image de ${vehicle.brand} ${vehicle.model}`}
            className="object-contain w-full h-full"
            height={300}
            src={vehicle.thumbnail}
            width={500}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
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
