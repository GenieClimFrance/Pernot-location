"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

import ImageGallery from "./components/ImageGallery";
import Tags from "./components/Tags";
import Card from "./components/Card";
import Features from "./components/Features";
import Equipments from "./components/Equipments";
import Spotlight from "./components/Spotlight";

import { Vehicles } from "@/data/vehicle";
interface VehicleDetailsProps {
  vehicle: Vehicles & {
    images: string[];
    features: string[];
    equipments: { id: number; name: string; icon: string }[];
  };
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  useEffect(() => {
    // Ajouter la classe au body
    document.body.classList.add("vehicle-details-page");

    // Nettoyer en retirant la classe quand le composant est démonté
    return () => {
      document.body.classList.remove("vehicle-details-page");
    };
  }, []);

  return (
    <article className="bg-white min-h-screen pt-28 px-8 lg:px-32 pb-10 lg:pt-40 2xl:px-96">
      <div className="flex items-center gap-2 mb-4 sm:mb-8">
        <Link
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
          href="/vehicle"
        >
          <FaChevronLeft className="text-primary md:text-xl mr-1" />
          <span className="text-gray-500 text-base sm:text-xl uppercase font-roboto hover:text-primary hover:underline hover:underline-offset-4 transition-colors duration-300">
            NOS VOITURES
          </span>
        </Link>
        <span className="text-gray-500 text-xl flex items-center self-center">
          •
        </span>
        <h1 className="text-black text-base sm:text-xl uppercase font-bold font-roboto">
          {vehicle.brand} {vehicle.model}
        </h1>
      </div>
      <section className="flex flex-col gap-10 lg:flex-row">
        <ImageGallery images={vehicle.images} modelName={vehicle.model} />
        <aside className="flex flex-col mb-4 w-full lg:w-1/2 lg:h-auto">
          <h1 className="text-3xl lg:text-4xl text-secondary font-bold uppercase font-roboto">
            {vehicle.brand}{" "}
            <span className="text-primary text-nowrap">{vehicle.model}</span>
          </h1>
          <h3 className="text-lg xl:text-xl mb-4 text-secondary font-georgia">
            {vehicle.motor}
          </h3>
          <Tags vehicle={vehicle} />
          <div className="text-lg lg:text-lg xl:text-xl text-secondary font-georgia pt-4 leading-6 flex-1 flex flex-col justify-between">
            <div>
              {Array.isArray(vehicle.description) ? (
                vehicle.description.map((desc, index) => (
                  <p key={index} className="pb-10">
                    {desc}
                  </p>
                ))
              ) : (
                <p>{vehicle.description}</p>
              )}
            </div>
            <div className="bg-secondary/80 h-px w-full" />
          </div>
        </aside>
      </section>
      <section className="flex flex-col gap-10 lg:flex-row md:mt-10">
        <Card price={vehicle.price} priceWithDriver={vehicle.priceWithDriver} />
        <div className="flex flex-col gap-10 lg:w-1/2">
          <Features features={vehicle.features} model={vehicle.model} />
          <Equipments equipments={vehicle.equipments} />
        </div>
      </section>
      <Spotlight currentVehicleId={vehicle.id} />
    </article>
  );
}
