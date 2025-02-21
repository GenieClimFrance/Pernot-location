import Image from "next/image";

import { Vehicles } from "@/data/vehicle";

export default function Tags({ vehicle }: { vehicle: Vehicles }) {
  return (
    <ul className="flex flex-wrap gap-4 lg:gap-6 mb-4 text-secondary font-bold font-roboto lg:mb-0 lg:w-full">
      <li className="flex gap-2 items-center border border-secondary rounded-md py-1 px-2 lg:px-4 lg:text-lg">
        <Image
          alt="passengers"
          height={16}
          src="/icon/person.svg"
          style={{
            filter: "brightness(0)",
          }}
          width={16}
        />
        <p>{vehicle.passengers}</p>
      </li>
      <li className="border border-secondary rounded-md p-1 px-2 lg:px-4 lg:text-lg">
        {vehicle.transmission}
      </li>
      <li className="border border-secondary rounded-md p-1 px-2 lg:px-4 lg:text-lg">
        {vehicle.fuelType}
      </li>
      <li className="border border-secondary rounded-md p-1 px-2 lg:px-4 lg:text-lg">
        {vehicle.carType}
      </li>
    </ul>
  );
}
