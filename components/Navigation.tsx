/* eslint-disable prettier/prettier */
import React from "react";
import clsx from "clsx";

interface NavigationProps {
  currentSection: number;
  onNavigate: (section: number) => void;
  totalSections: number;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onNavigate,
  totalSections,
}) => {
  return (
    <nav
      className={clsx(
        // Position
        "fixed top-1/2 right-4",
        // Transform
        "transform -translate-y-1/2",
        // Spacing & Visibility
        "p-4 z-50",
        // Responsive
        "hidden md:block"
      )}
    >
      <ul
        className={clsx(
          // Layout
          "flex flex-col",
          // Spacing
          "space-y-2"
        )}
      >
        {Array.from({ length: totalSections }, (_, index) => (
          <li key={index}>
            <button
              className={`w-1 h-10 block ${
                currentSection === index ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => onNavigate(index)}
            >
              <span className="sr-only">Section {index + 1}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
