"use client";

import { useEffect, useRef } from "react";

interface UseMagneticProps {
  distance?: number;
  strength?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLElement>({
  distance = 100,
  strength = 0.3,
}: UseMagneticProps = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const center = {
        x: left + width / 2,
        y: top + height / 2,
      };

      const distanceFromCenter = Math.hypot(
        clientX - center.x,
        clientY - center.y
      );

      if (distanceFromCenter < distance) {
        const magneticPull = (distance - distanceFromCenter) / distance;
        const moveX = (clientX - center.x) * magneticPull * strength;
        const moveY = (clientY - center.y) * magneticPull * strength;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        element.style.transform = "";
      }
    };

    const handlePointerLeave = () => {
      element.style.transform = "";
    };

    document.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [distance, strength]);

  return ref;
}
