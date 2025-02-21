/* eslint-disable prettier/prettier */
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { clsx } from "clsx";

import LinkFooter from "./LinkFooter";

import { siteConfig } from "@/config/site";

const iconComponents = {
  IoLogoInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
};

function Footer() {
  return (
    <footer>
      <div
        className={clsx(
          // Background & Text
          "bg-secondary text-white",
          // Spacing
          "py-10 px-8"
        )}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mt-10 lg:pb-10 lg:px-28">
          <div className="container mx-auto">
            <Image
              alt="Logo"
              height={200}
              src="/icon/logo-footer.svg"
              width={200}
            />
          </div>
          <div
            className={clsx(
              // Layout
              "flex gap-2",
              // Spacing
              "mt-10 lg:mt-0"
            )}
          >
            {Object.entries(siteConfig.links).map(([key, link]) => {
              const IconComponent =
                iconComponents[link.icon as keyof typeof iconComponents];

              return (
                <Link
                  key={key}
                  className="text-white font-roboto font-bold uppercase text-3xl"
                  href={link.url}
                >
                  <div className="bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer transition-all duration-300">
                    <IconComponent className="text-2xl" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="bg-white h-[1px] w-full mt-10" />
        <LinkFooter />
      </div>
    </footer>
  );
}

export default Footer;
