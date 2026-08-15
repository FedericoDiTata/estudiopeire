"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACTO, SERVICIOS, waLink } from "@/lib/site";

const NAV = [
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

  const enlace = `group relative py-2 text-sm whitespace-nowrap transition-colors duration-500 ${
    transparent ? "text-paper" : "text-ink"
  }`;

  const subrayado = (activo: boolean) =>
    `absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ease-[var(--ease-out-quint)] ${
      transparent ? "bg-paper" : "bg-burdeos"
    } ${activo ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent"
          : "border-b border-line bg-paper/90 backdrop-blur-md"
      }`}
    >
      {/* Tres columnas: logo a la izquierda, menú centrado, botón a la derecha.
          La grilla mantiene el menú centrado en la página aunque el logo y el
          botón tengan anchos distintos. */}
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
        <Link href="/" aria-label="Estudio Peiré, inicio" className="shrink-0">
          <Image
            src={transparent ? "/img/logo-blanco.png" : "/img/logo-negro.png"}
            alt="Estudio Peiré · Abogados"
            width={5441}
            height={1238}
            priority
            className="h-9 w-auto transition-opacity duration-500 sm:h-10"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenServicios(true)}
            onMouseLeave={() => setOpenServicios(false)}
          >
            <button
              type="button"
              aria-expanded={openServicios}
              className={enlace}
            >
              Servicios
              <span className={subrayado(servicioActivo || openServicios)} />
            </button>

            {openServicios && (
              <div className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3">
                <div className="border border-line bg-surface py-2 shadow-[0_18px_50px_-20px_rgba(14,14,12,0.35)]">
                  {SERVICIOS.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="block px-5 py-3 text-sm text-ink transition-colors duration-300 hover:bg-burdeos-soft hover:text-burdeos"
                    >
                      {s.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={enlace}>
              {item.label}
              <span className={subrayado(pathname === item.href)} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <a
            href={waLink("Hola, quiero hacer una consulta")}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden shrink-0 px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 sm:block ${
              transparent
                ? "border border-paper/60 text-paper hover:bg-paper hover:text-ink"
                : "bg-burdeos text-paper hover:bg-burdeos-deep"
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
      </div>
    </header>
  );
}
