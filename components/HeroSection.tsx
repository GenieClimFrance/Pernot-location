/* eslint-disable prettier/prettier */
import { BsChevronDoubleDown } from "react-icons/bs";
import { clsx } from "clsx";
import { motion } from "framer-motion";

import { BlurFade } from "./ui/blur-fade";

interface HeroSectionProps {
  forwardedRef: (el: HTMLElement | null) => void;
  backgroundImage?: string;
  title: string;
  highlightedText: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  forwardedRef,
  backgroundImage,
  title,
  highlightedText,
  description,
}) => {
  return (
    <section
      ref={forwardedRef}
      className={clsx(
        // Layout & Background
        `snap-section flex flex-col bg-cover bg-center ${backgroundImage}`,
        // Positioning & Spacing
        "justify-end items-center",
        "px-6 pt-20",
        // Responsive
        "lg:items-start lg:px-40 lg:pr-[20rem] lg:pb-10 2xl:pl-[20rem] 2xl:pb-28",
        // Text
        "text-white",
        // Position relative pour le positionnement de la flèche
        "relative"
      )}
    >
      <BlurFade delay={0.25} duration={0.5}>
        <h1
          className={clsx(
            // Typography
            "text-4xl lg:text-6xl font-black uppercase font-roboto",
            // Spacing
            "mb-4",
            // Line height
            "leading-relaxed lg:leading-[1.3]"
          )}
        >
          {title}{" "}
          <span
            className={clsx(
              // Background & Typography
              "bg-primary font-black italic text-nowrap",
              // Spacing
              "pr-3 pl-2 pt-1"
            )}
          >
            {highlightedText}
          </span>
        </h1>
      </BlurFade>
      <BlurFade inView delay={0.25 * 2} duration={0.5}>
        <p
          className={clsx(
            // Typography
            "text-xl font-georgia",
            // Spacing
            "mb-24 md:mb-16"
          )}
        >
          {description}
        </p>
      </BlurFade>

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="absolute bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full lg:w-auto flex justify-center items-center"
        initial={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          className="flex flex-col items-center"
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <span className="text-xs font-roboto uppercase text-white">
            Scroll
          </span>

          <BsChevronDoubleDown className="text-primary text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
