/* eslint-disable prettier/prettier */
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Checkbox } from "@heroui/checkbox";

import { BlurFade } from "./ui/blur-fade";
import { TextAnimate } from "./ui/text-animate";

import { vehicles } from "@/data/vehicle";

interface ContactSectionProps {
  forwardedRef: (el: HTMLElement | null) => void;
}

const driverOptions = [
  { value: "with", label: "Avec chauffeur" },
  { value: "without", label: "Sans chauffeur" },
];

const ContactSection: React.FC<ContactSectionProps> = ({ forwardedRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDriverOpen, setIsDriverOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState("");
  const driverDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        driverDropdownRef.current &&
        !driverDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDriverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      ref={forwardedRef}
      className={clsx(
        // Layout
        "snap-section flex flex-col lg:pl-32 xl:pl-40 2xl:pl-60",
        "justify-center items-start ",
        // Background
        'bg-[url("/bg-form.webp")] bg-cover bg-center lg:bg-[url("/bg-form-dsktp.webp")]',
        // Text & Spacing
        "text-white py-16 px-10"
      )}
      id="contact"
    >
      <TextAnimate
        animation="slideUp"
        as="h2"
        className={clsx(
          // Typography
          "text-4xl font-bold uppercase text-nowrap font-roboto",
          // Layout
          "flex flex-col items-end",
          // Spacing
          "mb-8",
          // Border effect
          "after:content-[''] after:block after:h-[4px] after:bg-primary after:w-[9rem] after:mt-2"
        )}
        duration={0.75}
      >
        Contactez-nous
      </TextAnimate>
      <BlurFade inView delay={0.25 * 2} duration={0.5}>
        <p className="font-bold mb-8">
          Réserver dès aujourd&apos;hui le véhicule de vos rêves
        </p>
      </BlurFade>
      <BlurFade inView delay={0.25 * 3} duration={0.5}>
        <form className="w-full max-w-md 2xl:max-w-xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Nom
              </label>
              <input
                className="input focus"
                id="name"
                placeholder="Nom*"
                type="text"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="firstname">
                Prénom
              </label>
              <input
                className="input focus"
                id="firstname"
                placeholder="Prénom*"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="sr-only" htmlFor="phone">
                Téléphone
              </label>
              <input
                className="input focus"
                id="phone"
                placeholder="Téléphone*"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="input focus"
                id="email"
                placeholder="Email*"
                type="email"
              />
            </div>
            <div>
              <label className="uppercase" htmlFor="date">
                Date de départ
              </label>
              <input
                className="bg-transparent border-b border-white focus w-full h-10"
                data-placeholder="Date de départ*"
                id="date"
                type="date"
              />
            </div>
            <div>
              <label className="uppercase" htmlFor="date">
                Date de retour
              </label>
              <input
                className="bg-transparent border-b border-white focus w-full h-10"
                data-placeholder="Date de retour*"
                id="date"
                type="date"
              />
            </div>
          </div>
          <div ref={dropdownRef} className="relative w-full mb-4">
            <button
              className="w-full input mt-8 py-2 pl-2 pr-8 uppercase font-roboto font-bold appearance-none flex items-center justify-between"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>
                {selectedVehicle
                  ? vehicles.find((v) => v.id.toString() === selectedVehicle)
                      ?.brand +
                    " " +
                    vehicles.find((v) => v.id.toString() === selectedVehicle)
                      ?.model
                  : "Choisir son véhicule*"}
              </span>
              <FaChevronDown
                className={`absolute right-2 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 border border-white flex flex-col gap-2 font-roboto font-bold">
                {vehicles.map((vehicle) => (
                  <Checkbox
                    key={vehicle.id}
                    className="p-2 hover:bg-white/10 cursor-pointer"
                    color="primary"
                    isSelected={selectedVehicle === vehicle.id.toString()}
                    onChange={() => {
                      setSelectedVehicle(vehicle.id.toString());
                      setIsOpen(false);
                    }}
                  >
                    <span className="text-white uppercase">
                      {vehicle.brand} {vehicle.model}
                    </span>
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
          <div ref={driverDropdownRef} className="relative w-full mb-4">
            <button
              className="w-full input bg-white py-2 pl-2 pr-8 uppercase font-roboto font-bold appearance-none flex items-center justify-between "
              type="button"
              onClick={() => setIsDriverOpen(!isDriverOpen)}
            >
              <span>
                {selectedDriver
                  ? driverOptions.find((d) => d.value === selectedDriver)?.label
                  : "Avec ou sans chauffeur ?*"}
              </span>
              <FaChevronDown
                className={`absolute right-2 transition-transform duration-300 ${
                  isDriverOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                isDriverOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 border border-white flex flex-col gap-2 font-roboto font-bold">
                {driverOptions.map((option) => (
                  <Checkbox
                    key={option.value}
                    className="p-2 hover:bg-white/10 cursor-pointer"
                    color="primary"
                    isSelected={selectedDriver === option.value}
                    onChange={() => {
                      setSelectedDriver(option.value);
                      setIsDriverOpen(false);
                    }}
                  >
                    <span className="text-white uppercase">{option.label}</span>
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
          <button
            className="bg-primary text-white px-6 py-3 uppercase font-roboto font-bold focus focus:ring-white"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </BlurFade>
    </section>
  );
};

export default ContactSection;
