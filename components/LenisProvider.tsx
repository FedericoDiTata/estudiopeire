"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Scroll suave. Duración corta y sin rebote: el sitio tiene que sentirse
 * fluido, no blando.
 *
 * Lenis toma el control del scroll y con eso pisa el salto al inicio que hace
 * Next al cambiar de página: si entrabas a otra sección desde la mitad de la
 * home, aparecías en la mitad de la nueva. Por eso, en cada cambio de ruta se
 * lo manda arriba de forma inmediata.
 */
export default function LenisProvider() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Al cambiar de página, siempre desde el principio.
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
