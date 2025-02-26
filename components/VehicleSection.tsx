/* eslint-disable prettier/prettier */
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

import { BlurFade } from "./ui/blur-fade";
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
        "min-h-screen flex flex-col",
        "bg-white snap-start",
        "pt-24",
        "lg:pb-10",
        "xl:pt-32"
      )}
    >
      <div className={clsx("flex flex-col", "px-4", "lg:px-2")}>
        <div className={clsx("w-full", "pl-4", "lg:pl-[4rem]")}>
          <BoxReveal boxColor="#D9470B" duration={0.75}>
            <h2
              className={clsx(
                "text-2xl font-bold font-roboto uppercase",
                "text-secondary text-left",
                "mb-6",
                "2xl:text-3xl"
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
            "lg:justify-start lg:pl-16",
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
                    "lg:h-[15rem] lg:w-[15rem]",
                    "xl:h-[18rem] xl:w-[18rem]",
                    "2xl:h-[22rem] 2xl:w-[22rem]"
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
      <div className={clsx("flex flex-col", "px-4", "lg:px-2 lg:pr-0")}>
        <div className={clsx("w-full", "pl-4", "lg:pl-[4.5rem]")}>
          <BoxReveal boxColor="#D9470B" duration={0.75}>
            <h2
              className={clsx(
                "text-2xl font-bold font-roboto uppercase",
                "text-secondary text-left",
                "mt-10 mb-6",
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
          className={clsx(
            "flex justify-center",
            "lg:justify-start lg:pl-16",
            "w-full"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-2 md:grid-cols-2",
              "gap-2 px-2",
              "lg:gap-12 lg:flex",
              "justify-items-center items-center",
              "w-full lg:pr-0"
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
                    "lg:h-[15rem] lg:w-[15rem]",
                    "xl:h-[18rem] xl:w-[18rem]",
                    "2xl:h-[25rem] 2xl:w-[25rem]"
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
            <div className={clsx("hidden", "lg:block lg:flex-1")}>
              <BlurFade inView delay={0.25 * 2} duration={0.5}>
                <div
                  className={clsx(
                    "flex flex-col bg-black",
                    'bg-[url("/incoming-desktop.png")] bg-right bg-no-repeat',
                    "[filter:drop-shadow(-4px_4px_0px_theme(colors.primary))]",
                    "h-[15rem]",
                    "xl:h-[18rem]",
                    "2xl:h-[25rem]",
                    "w-full"
                  )}
                >
                  <h3
                    className={clsx(
                      "text-white text-lg font-semibold font-roboto uppercase",
                      "mb-2 mt-6 ml-6",
                      "w-60",
                      "xl:text-2xl xl:w-80",
                      "2xl:text-3xl 2xl:w-96",
                      "border-primary",
                      "after:content-[''] after:block after:h-[4px] after:bg-primary after:w-[3rem] after:mt-1"
                    )}
                  >
                    D&apos;autres véhicules sont à venir...
                  </h3>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <BlurFade inView delay={0.25 * 2} duration={0.5}>
          <div
            className={clsx(
              "flex flex-col",
              'bg-[url("/incoming.png")] bg-cover bg-center',
              "mt-5 ml-8 mb-10",
              "h-[10rem]",
              "[filter:drop-shadow(-4px_4px_0px_theme(colors.primary))]"
            )}
          >
            <h3
              className={clsx(
                "text-lg font-semibold font-roboto uppercase text-white",
                "mb-2 mt-6 ml-6",
                "w-60",
                "border-primary",
                "after:content-[''] after:block after:h-[4px] after:bg-primary after:w-[3rem] after:mt-1"
              )}
            >
              D&apos;autres véhicules sont à venir...
            </h3>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default VehiclesSection;
