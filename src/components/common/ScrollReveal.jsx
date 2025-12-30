import React, { useState, useEffect, useRef } from "react";

/**
 * ScrollReveal component that animates its children when they enter the viewport.
 */
export function ScrollReveal({
  children,
  animation = "reveal-up",
  threshold = 0.15,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element fully enters
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? "reveal-visible" : ""}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}
