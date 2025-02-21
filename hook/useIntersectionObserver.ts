import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        // eslint-disable-next-line prettier/prettier
        { threshold: 0.5, ...options }
      );

      observer.observe(section);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [options]);

  return { activeSection, sectionRefs };
}
