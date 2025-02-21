"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SectionContextProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }

  return context;
};
