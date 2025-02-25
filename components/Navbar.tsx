"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

import { BlurFade } from "./ui/blur-fade";

import Logo from "@/public/icon/Logo";
import { useSection } from "@/context/SectionContext";
import { siteConfig } from "@/config/site";

type ModalSize = "full";

const iconComponents = {
  IoLogoInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
};

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<ModalSize>("full");
  const { activeSection } = useSection();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsDesktop = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      checkIsDesktop();
      window.addEventListener("resize", checkIsDesktop);

      return () => window.removeEventListener("resize", checkIsDesktop);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  const handleOpen = (size: ModalSize) => {
    setSize(size);
    onOpen();
  };

  const isDarkBackground =
    activeSection === 0 ||
    activeSection === 2 ||
    activeSection === 3 ||
    pathname.includes("/vehicles/");

  const menuItems = siteConfig.navItems.map((item) => ({
    ...item,
    description: {
      title:
        item.label === "Nos voitures"
          ? "Nos voitures"
          : item.label === "Nos motos"
            ? "Nos motos"
            : item.label === "Contact"
              ? "Contactez-nous"
              : "Découvrez nos services",
      text:
        item.label === "Nos voitures"
          ? "Découvrez notre collection exceptionnelle de voitures de sport et haut de gamme, soigneusement sélectionnées pour offrir une expérience de conduite inoubliable. Réservez votre véhicule d'exception dès aujourd'hui."
          : item.label === "Nos motos"
            ? "Laissez-vous séduire par notre gamme de motos sportives haut de gamme, alliant puissance et design raffiné. Partez à l'aventure avec des modèles uniques, conçus pour les passionnés de sensations fortes."
            : item.label === "Contact"
              ? "Envie d'en savoir plus ou de réserver ? Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans votre projet de location de voiture sportive et haut de gamme."
              : "Explorez nos différentes offres et services.",
    },
  }));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex gap-3 justify-between items-center p-5 lg:p-6
        }`}
      >
        <Button
          className="bg-transparent w-fit h-fit"
          onPress={() => handleOpen("full")}
        >
          <svg
            fill="none"
            height="29"
            viewBox="0 0 36 29"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              fill={isDarkBackground ? "#F9F9F9" : "#000000"}
              height="3.98039"
              width="25.7143"
              x="10.2858"
              y="25.0196"
            />
            <rect
              fill={isDarkBackground ? "#F9F9F9" : "#000000"}
              height="3.98039"
              width="36"
              y="12.5098"
            />
            <rect
              fill={isDarkBackground ? "#F9F9F9" : "#000000"}
              height="3.98039"
              width="25.7143"
              x="10.2858"
            />
          </svg>
        </Button>
        <Link href="/">
          <Logo
            className="w-36 lg:w-52 h-auto cursor-pointer text-white hover:scale-105 transition-all duration-300"
            isDarkBackground={isDarkBackground}
          />
        </Link>
        <div className="flex gap-3">
          <Link href="tel:+33769762636">
            <FaPhoneAlt
              className={`text-4xl border-primary border-1 p-2 transition-all duration-300 ${
                isDarkBackground
                  ? "text-white hover:bg-primary hover:text-black"
                  : "text-black hover:bg-primary hover:text-white"
              }`}
            />
          </Link>
          <Link href="mailto:contact@plpernotlocation.fr">
            <IoMailSharp
              className={`text-4xl border-primary border-1 p-2 transition-all duration-300 ${
                isDarkBackground
                  ? "text-white hover:bg-primary hover:text-black"
                  : "text-black hover:bg-primary hover:text-white"
              }`}
            />
          </Link>
        </div>
      </nav>
      <Modal
        classNames={{
          closeButton:
            "absolute left-0 top-0 m-6 ml-12 lg:mt-8 text-2xl text-white hover:bg-transparent hover:bg-primary border-primary border-1 p-1 w-fit rounded-none cursor-pointer transition-all duration-300",
          base: "border-none bg-transparent",
          backdrop: "bg-black/80",
          wrapper: "overflow-hidden",
          body: "p-0",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
            },
            exit: {
              opacity: 0,
            },
          },
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        size={size}
        onClose={onClose}
      >
        <ModalContent className="text-white bg-[url('/bg-menu.png')] bg-cover bg-center bg-no-repeat ">
          <nav className="flex gap-3 justify-between ml-auto lg:ml-24 items-center p-5 lg:p-6">
            <Logo
              className="w-36 lg:w-52 h-auto mr-2 cursor-pointer hover:scale-105 lg:mx-auto transition-all duration-300"
              isDarkBackground={true}
            />
            <div className="flex gap-3">
              <FaPhoneAlt className="text-4xl border-primary border-1 p-2 text-white hover:bg-primary cursor-pointer transition-all duration-300" />
              <IoMailSharp className="text-4xl border-primary border-1 p-2 text-white hover:bg-primary cursor-pointer transition-all duration-300" />
            </div>
          </nav>
          <ModalBody className="p-8 lg:gap-12 flex flex-col justify-center items-center">
            <article className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-12">
              <header className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    className="text-white hover:text-primary transition-all duration-300 font-roboto font-bold uppercase text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl lg:leading-[4.5rem] xl:leading-[6rem] 2xl:leading-[9rem] hover:underline underline-offset-8 decoration-[5px] lg:decoration-[10px] xl:decoration-[12px] 2xl:decoration-[15px]"
                    href={item.href}
                    onClick={onClose}
                    onMouseEnter={() => isDesktop && setHoveredLink(item.href)}
                    onMouseLeave={() => isDesktop && setHoveredLink(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </header>
              <div className="w-full h-1 lg:w-1 lg:h-full bg-primary my-5" />
              <div className="w-full lg:w-[400px] xl:w-[500px] 2xl:w-[600px]">
                {isDesktop ? (
                  <div className="h-[200px] w-full">
                    {hoveredLink ? (
                      <BlurFade>
                        <h2 className="text-white font-roboto font-bold uppercase text-xl xl:text-3xl 2xl:text-4xl lg:mt-4">
                          {
                            menuItems.find((item) => item.href === hoveredLink)
                              ?.description.title
                          }
                        </h2>
                        <p className="text-white font-georgia text-lg mt-3 xl:text-2xl 2xl:text-2xl">
                          {
                            menuItems.find((item) => item.href === hoveredLink)
                              ?.description.text
                          }
                        </p>
                      </BlurFade>
                    ) : (
                      <>
                        <h2 className="text-white font-roboto font-bold uppercase text-xl xl:text-3xl 2xl:text-4xl lg:mt-4">
                          Louez le véhicule de vos rêves sur{" "}
                          <span className="text-primary">
                            PLPERNOTLOCATION.FR
                          </span>
                        </h2>
                        <p className="text-white font-georgia text-lg mt-3 xl:text-2xl 2xl:text-2xl">
                          Explorez notre sélection de voitures de luxe et de
                          prestige, ainsi que nos motos sportives pour une
                          expérience de conduite ultime.
                        </p>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <h2 className="text-white font-roboto font-bold uppercase text-xl mt-4">
                      Louez le véhicule de vos rêves sur{" "}
                      <span className="text-primary">PLPERNOTLOCATION.FR</span>
                    </h2>
                    <p className="text-white font-georgia text-lg mt-3">
                      Explorez notre sélection de voitures de luxe et de
                      prestige, ainsi que nos motos sportives pour une
                      expérience de conduite ultime.
                    </p>
                  </>
                )}
              </div>
            </article>
            <footer className="flex mt-10 gap-2 lg:justify-center lg:mt-4">
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
            </footer>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
