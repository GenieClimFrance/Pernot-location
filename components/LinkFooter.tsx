import Link from "next/link";

import { siteConfig } from "@/config/site";

function LinkFooter() {
  const footerItem = siteConfig.navItems.map((item) => ({
    ...item,
    description: {
      title: item.label,
    },
  }));

  const cars: { name: string }[] = [
    {
      name: "Lamborghini",
    },
    {
      name: "Audi",
    },
    {
      name: "Land Rover",
    },
    {
      name: "Porsche",
    },
  ];

  const moto: { name: string }[] = [
    {
      name: "Yamaha",
    },
    {
      name: "Ducati",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:items-start lg:justify-between lg:px-28 2xl:px-60">
      <div className="flex flex-col gap-4">
        {footerItem.map((item) => (
          <Link
            key={item.key}
            className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300"
          href="/mentions-legales"
        >
          Mentions légales
        </Link>
        <Link
          className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300"
          href="/cgv"
        >
          CGV
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {cars.map((car) => (
          <Link
            key={car.name}
            className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300"
            href={`/vehicle?brand=${car.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {car.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {moto.map((moto) => (
          <Link
            key={moto.name}
            className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300"
            href={`/vehicle?brand=${moto.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {moto.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <a
          className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300 mt-6 lg:mt-0"
          href="tel:+330769762636"
        >
          + 33 07 69 76 26 36
        </a>
        <a
          className="text-white font-roboto font-bold uppercase text-lg hover:text-primary transition-colors duration-300"
          href="mailto:contact@plpernotlocation.fr"
        >
          contact@pernotlocation.fr
        </a>
        <p className="text-white font-roboto font-bold uppercase text-lg">
          7 rue victor hugo,{" "}
          <span className="text-nowrap">33185 Le haillan</span>
        </p>
      </div>
    </div>
  );
}

export default LinkFooter;
