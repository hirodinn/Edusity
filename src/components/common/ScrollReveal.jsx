import React, { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  animation = "reveal-up",
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    let observer = null;

    const reveal = () => {
      // tiny delay ensures smooth first-load animation
      setTimeout(() => setIsVisible(true), 50);
      if (observer) observer.disconnect();
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold }
    );

    // double requestAnimationFrame ensures layout is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        try {
          if (observer) observer.observe(element);
        } catch (e) {
          // ignore if observation fails on some browsers/environments
        }
      });
    });

    // fallback if element is already visible on mount
    try {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
      }
    } catch (e) {
      // element may be detached; ignore
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-container ${animation} ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}
