"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Initialisation de Lenis avec vitesse ralentie et amortie (sensation charismatique)
    const lenis = new Lenis({
      duration: 1.5, // Défilement ralenti et feutré
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing exponentiel soigné
      smoothWheel: true,
      wheelMultiplier: 0.75, // Réduction de la vitesse de molette pour une sensation de prestance
      touchMultiplier: 1.2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
