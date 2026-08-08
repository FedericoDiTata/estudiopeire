"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACTO, SERVICIOS, waLink } from "@/lib/site";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/estudio", label: "El Estudio" },
  { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openServicios, setOpenServicios] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparente solo sobre el hero de la home. En el resto siempre sólido,
  // para que el texto nunca quede blanco sobre fondo claro.
  const transparent = pathname === "/" && !scrolled;

  const servicioActivo = pathname.startsWith("/servicios");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent"
          : "border-b border-line bg-paper/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-8 px-6">
        <Link
          href="/"
          className={`font-display text-xl leading-none font-semibold tracking-tight transition-colors duration-500 ${
            transparent ? "text-paper" : "text-ink"
          }`}
        >
          Estudio Peiré
          <span
            className={`mt-1 block font-sans text-[0.5rem] font-medium tracking-[0.42em] uppercase transition-colors duration-500 ${
              transparent ? "text-paper/70" : "text-faint"
            }`}
          >
            Abogados
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenServicios(true)}
            onMouseLeave={() => setOpenServicios(false)}
          >
            <button
              type="button"
              aria-expanded={openServicios}
              className={`group relative py-2 text-sm transition-colors duration-500 ${
                transparent ? "text-paper" : "text-ink"
              }`}
            >
              Servicios
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-[var(--ease-out-quint)] ${
                  servicioActivo || openServicios
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>

            {openServicios && (
              <div className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3">
                <div className="border border-line bg-paper py-2 shadow-[0_18px_50px_-20px_rgba(20,40,50,0.35)]">
                  {SERVICIOS.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="block px-5 py-3 text-sm text-ink transition-colors hover:bg-shell"
                    >
                      {s.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV.filter((n) => n.href !== "/").map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-sm transition-colors duration-500 ${
                  transparent ? "text-paper" : "text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-[var(--ease-out-quint)] ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <a
          href={waLink("Hola, quiero hacer una consulta")}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden shrink-0 px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 sm:block ${
            transparent
              ? "border border-paper/60 text-paper hover:bg-paper hover:text-ink"
              : "bg-petrol text-paper hover:bg-petrol-deep"
          }`}
        >
          Escribinos
        </a>

        <a
          href={`tel:${CONTACTO.telefonoLink}`}
          className={`text-sm sm:hidden ${transparent ? "text-paper" : "text-ink"}`}
        >
          Llamar
        </a>
      </div>
    </header>
  );
}
