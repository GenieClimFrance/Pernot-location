/* eslint-disable prettier/prettier */
import { BsArrowRight } from "react-icons/bs";
import { clsx } from "clsx";
import Link from "next/link";

import { BlurFade } from "./ui/blur-fade";

interface HeroSectionProps {
  forwardedRef: (el: HTMLElement | null) => void;
  backgroundImage?: string;
  title: string;
  highlightedText: string;
  description?: string;
  isHomePage?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  forwardedRef,
  backgroundImage,
  title,
  highlightedText,
  description,
  isHomePage,
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
        "lg:items-start lg:px-40 lg:pr-[20rem] lg:pb-10",
        // Text
        "text-white"
      )}
    >
      <BlurFade delay={0.25} duration={0.5}>
        <h1
          className={clsx(
            // Typography
            "text-4xl lg:text-6xl font-black font-roboto uppercase",
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
            "mb-8"
          )}
        >
          {description}
          {isHomePage && (
            <span className="inline-flex items-center">
              d&apos;exceptions.
              <Link
                className={clsx(
                  // Typography & Colors
                  "text-primary text-4xl",
                  // Spacing
                  "ml-4",
                  // Hover effects
                  "hover:translate-x-2",
                  // Transition
                  "transition-all duration-300"
                )}
                href="/vehicle"
              >
                <BsArrowRight />
              </Link>
            </span>
          )}
        </p>
      </BlurFade>
    </section>
  );
};

export default HeroSection;
