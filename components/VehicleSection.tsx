/* eslint-disable prettier/prettier */
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

import { BoxReveal } from "./ui/box-reveal";

interface VehicleSectionProps {
  forwardedRef: (el: HTMLElement | null) => void;
}

const VehiclesSection: React.FC<VehicleSectionProps> = ({ forwardedRef }) => {
  const cars = [
    {
      name: "Lamborghini",
      image: "/cars/lamborghini-item.png",
      logo: "/cars/logo/lamborghini-logo.svg",
    },
    {
      name: "Land Rover",
      image: "/cars/range-rover-item.png",
      logo: "/cars/logo/landrover_logo.svg",
    },
    {
      name: "Porsche",
      image: "/cars/porsche-item.png",
      logo: "/cars/logo/porsche-logo.svg",
    },
    {
      name: "Audi",
      image: "/cars/audi-item.png",
      logo: "/cars/logo/audi_logo.svg",
    },
  ];

  const moto = [
    {
      name: "Yamaha",
      image: "/motos/yamaha-item.png",
      logo: "/motos/logos/yamaha-logo.svg",
    },
    {
      name: "Ducati",
      image: "/motos/ducati-item.png",
      logo: "/motos/logos/ducati-logo.svg",
    },
  ];

  return (
    <section
      ref={forwardedRef}
      className={clsx(
        "min-h-screen flex flex-col lg:items-center",
        "bg-white snap-start",
        "pt-24",
        "lg:pb-10",
        "xl:pt-32"
      )}
    >
      <div className={clsx("flex flex-col", "px-4", "lg:px-2")}>
        <div className={clsx("w-full")}>
          <BoxReveal boxColor="#D9470B" duration={0.75}>
            <h2
              className={clsx(
                "text-2xl font-bold font-roboto uppercase",
                "text-secondary text-left",
                "mb-6 pl-4 md:pl-0"
              )}
            >
              Nos voitures de{" "}
              <span
                className={clsx(
                  "underline underline-offset-8",
                  "decoration-primary decoration-4"
                )}
              >
                prestige
              </span>
            </h2>
          </BoxReveal>
        </div>
        <div
          className={clsx(
            "flex",
            "justify-center",
            "lg:justify-start",
            "w-full"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-2 md:grid-cols-2",
              "gap-2",
              "lg:gap-12 lg:flex",
              "justify-items-center"
            )}
          >
            {cars.map((car, index) => (
              <BoxReveal key={index} boxColor="#D9470B" duration={0.75}>
                <Link
                  key={index}
                  className={clsx(
                    "bg-cover bg-center",
                    "flex flex-col justify-end items-center",
                    "px-6 shadow-md vehicle-hover",
                    "h-[10rem] w-[10rem]",
                    "lg:h-[12rem] lg:w-[12rem]",
                    "xl:h-[18rem] xl:w-[18rem]"
                  )}
                  href={`/vehicle?brand=${car.name.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ backgroundImage: `url(${car.image})` }}
                >
                  <Image
                    alt={car.name}
                    className="w-10 h-10"
                    height={100}
                    src={car.logo}
                    width={100}
                  />
                  <h3
                    className={clsx(
                      "text-lg text-nowrap font-semibold text-white font-roboto uppercase",
                      "mb-2"
                    )}
                  >
                    {car.name}
                  </h3>
                </Link>
              </BoxReveal>
            ))}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col",
          "px-4",
          "lg:px-2 lg:pr-0 mb-10 md:mb-0"
        )}
      >
        <div className={clsx("w-full")}>
          <BoxReveal boxColor="#D9470B" duration={0.75}>
            <h2
              className={clsx(
                "text-2xl font-bold font-roboto uppercase",
                "text-secondary text-left",
                "mt-10 mb-6 ml-4 md:ml-0",
                "lg:mt-16"
              )}
            >
              Nos motos{" "}
              <span
                className={clsx(
                  "underline underline-offset-8",
                  "decoration-primary decoration-4"
                )}
              >
                d&apos;exception
              </span>
            </h2>
          </BoxReveal>
        </div>
        <div
          className={clsx("flex justify-center", "lg:justify-start", "w-full")}
        >
          <div
            className={clsx(
              "grid grid-cols-2",
              "gap-2 md:gap-12 px-2",
              "lg:grid-cols-4 lg:grid-flow-row",
              "items-center",
              "lg:pr-0 lg:pl-0"
            )}
          >
            {moto.map((moto, index) => (
              <BoxReveal key={index} boxColor="#D9470B" duration={0.75}>
                <Link
                  key={index}
                  className={clsx(
                    "bg-cover bg-center",
                    "flex flex-col justify-end items-center",
                    "px-6 shadow-md vehicle-hover",
                    "h-[10rem] w-[10rem]",
                    "lg:h-[12rem] lg:w-[12rem]",
                    "xl:h-[18rem] xl:w-[18rem]"
                  )}
                  href={`/vehicle?brand=${moto.name.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ backgroundImage: `url(${moto.image})` }}
                >
                  <Image
                    alt={moto.name}
                    className="w-10 h-10"
                    height={100}
                    src={moto.logo}
                    width={100}
                  />
                  <h3
                    className={clsx(
                      "text-lg text-nowrap text-white font-semibold font-roboto uppercase",
                      "mb-2"
                    )}
                  >
                    {moto.name}
                  </h3>
                </Link>
              </BoxReveal>
            ))}
            <div className="col-span-2 w-full md:col-span-2">
              <Link
                className={clsx(
                  "bg-[url('/incoming-desktop.png')] bg-cover bg-center text-white font-roboto uppercase font-bold rounded-none",
                  "h-[10rem] w-full px-4 pt-2",
                  "lg:h-[12rem] lg:w-full",
                  "xl:h-[18rem] xl:w-full xl:pl-10 xl:pt-8",
                  "2xl:w-full",
                  "flex justify-start items-start",
                  "mt-8 lg:mt-0",
                  "shadow-md",
                  "transition-all duration-300 ease-in-out",
                  "hover:[filter:drop-shadow(-4px_4px_0px_theme(colors.primary))] hover:text-primary"
                )}
                href="/vehicle"
              >
                <span className="text-lg lg:text-xl font-roboto uppercase mt-2 after:content-[''] after:block after:h-[4px] after:bg-primary after:w-[3rem] after:mt-1">
                  Voir tous nos véhicules
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
