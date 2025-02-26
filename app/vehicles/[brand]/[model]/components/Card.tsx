import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import { Checkbox } from "@heroui/react";
import Link from "next/link";

import { vehicles } from "@/data/vehicle";

// Créer une fonction utilitaire pour le formatage
const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

function Card({
  price,
  priceWithDriver,
}: {
  price: { day: number; weekend: number; week: number };
  priceWithDriver: { day: number; weekend: number; week: number };
}) {
  const [selectedDuration, setSelectedDuration] = useState("day");
  const [withDriver, setWithDriver] = useState(false);

  const getPriceForDuration = () => {
    const currentPrice = withDriver ? priceWithDriver : price;

    switch (selectedDuration) {
      case "weekend":
        return currentPrice.weekend;
      case "week":
        return currentPrice.week;
      default:
        return currentPrice.day;
    }
  };

  return (
    <aside className="bg-white p-8 rounded-lg font-roboto text-secondary shadow-lg mt-8 lg:mt-0 lg:w-1/2 lg:h-fit lg:p-12">
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 text-sm lg:text-base text-nowrap rounded ${selectedDuration === "day" ? "bg-primary text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedDuration("day")}
        >
          1 jour
        </button>
        <button
          className={`px-4 py-2 text-sm lg:text-base text-nowrap rounded ${selectedDuration === "weekend" ? "bg-primary text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedDuration("weekend")}
        >
          Week-end
        </button>
        <button
          className={`px-4 py-2 text-sm lg:text-base text-nowrap rounded ${selectedDuration === "week" ? "bg-primary text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedDuration("week")}
        >
          Semaine
        </button>
      </div>

      <h3 className="text-xl flex flex-col">
        <span>à partir de</span>
        <span className="font-bold text-4xl">
          {formatNumber(getPriceForDuration())}€ /{" "}
          {selectedDuration === "week"
            ? "semaine"
            : selectedDuration === "weekend"
              ? "week-end"
              : "jour"}
        </span>
      </h3>
      <p className="text-secondary font-bold text-sm lg:text-base mb-4">
        Caution uniquement sans chauffeur par CB :{" "}
        {vehicles
          .find((vehicle) => vehicle.id === 1)
          ?.deposit?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        €
      </p>

      <div className="flex items-center gap-8 mb-4 font-roboto">
        <Checkbox
          checked={withDriver}
          className="w-4 h-4 "
          id="withDriver"
          type="checkbox"
          onChange={(e) => setWithDriver(e.target.checked)}
        />
        <label htmlFor="withDriver">Avec chauffeur</label>
      </div>

      <div className="bg-secondary/80 h-px w-full" />
      <p className="text-secondary uppercase font-bold text-lg lg:text-xl mt-4 lg:mt-8">
        Intéressé pour louer ce véhicule ?
      </p>
      <button className=" bg-primary uppercase font-bold text-white w-full py-3 rounded-lg mt-4 lg:mb-4">
        <Link href="/#contact">Soumettre une demande</Link>
      </button>
      <div className="bg-secondary/80 h-px w-full mt-4" />
      <p className="text-secondary uppercase font-bold text-lg lg:text-xl mt-4 lg:mt-8">
        Nous contacter
      </p>
      <ul className="flex flex-col font-bold gap-4 mt-4">
        <li className="flex flex-row items-center gap-4">
          <IoMail className="w-8 h-8 bg-primary text-white p-1" />
          <a className="lg:text-lg" href="mailto:contact@plpernotlocation.fr">
            contact@pernotlocation.fr
          </a>
        </li>
        <li className="flex flex-row items-center gap-4">
          <FaPhone className="w-8 h-8 bg-primary text-white p-[0.35rem]" />
          <a href="tel:+330769762636">+33 07 69 76 26 36</a>
        </li>
      </ul>
    </aside>
  );
}

export default Card;
