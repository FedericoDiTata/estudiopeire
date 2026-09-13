"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [menuAbierto, setMenuAbierto] = useState(false);
  const botonMenu = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú de celular abierto, la página de atrás no se mueve y Escape lo cierra.
  useEffect(() => {
    if (!menuAbierto) return;
    const html = document.documentElement;
    const overflowAnterior = html.style.overflow;
    html.style.overflow = "hidden";
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuAbierto(false);
      botonMenu.current?.focus();
    };
    window.addEventListener("keydown", alTeclear);
    return () => {
      html.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", alTeclear);
    };
  }, [menuAbierto]);

  const cerrarMenu = () => setMenuAbierto(false);

  // Transparente solo sobre el hero de la home. En el resto siempre sólido,
  // para que el texto nunca quede blanco sobre fondo claro.
  const transparent = pathname === "/" && !scrolled && !menuAbierto;
  const servicioActivo = pathname.startsWith("/servicios");

  const enlace = `group relative py-2 text-sm whitespace-nowrap transition-colors duration-500 ${
    transparent ? "text-paper" : "text-ink"
  }`;

  const subrayado = (activo: boolean) =>
    `absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ease-[var(--ease-out-quint)] ${
      transparent ? "bg-paper" : "bg-burdeos"
    } ${activo ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`;

  const linkMenu = "block py-2.5 font-display text-2xl font-light tracking-[-0.01em] text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          transparent
            ? "bg-transparent"
            : "border-b border-line bg-paper/90 backdrop-blur-md"
        }`}
      >
        {/* El logo va pegado al borde izquierdo y el botón al derecho. El menú se
            posiciona aparte, centrado sobre el ancho de la página, para que no lo
            corran los anchos distintos del logo y del botón. */}
        <div className="relative flex h-20 items-center justify-between px-6 lg:px-8">
          <Link href="/" aria-label="Estudio Peiré, inicio" className="shrink-0" onClick={cerrarMenu}>
            <Image
              src={transparent ? "/img/logo-blanco.png" : "/img/logo-negro.png"}
              alt="Estudio Peiré · Abogados"
              width={5441}
              height={1238}
              priority
              className="h-9 w-auto transition-opacity duration-500 sm:h-10"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
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

            {/* Menú de celular y tablet: debajo de 1024px la nav de arriba no entra. */}
            <button
              ref={botonMenu}
              type="button"
              onClick={() => setMenuAbierto((abierto) => !abierto)}
              aria-expanded={menuAbierto}
              aria-controls="menu-celular"
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
              className={`-mr-2 ml-4 flex h-11 w-11 items-center justify-center transition-colors duration-500 lg:hidden ${
                transparent ? "text-paper" : "text-ink"
              }`}
            >
              <span aria-hidden="true" className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ease-[var(--ease-out-quint)] ${
                    menuAbierto ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ease-[var(--ease-out-quint)] ${
                    menuAbierto ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fuera del header: su desenfoque de fondo encerraría un panel fijo adentro. */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            id="menu-celular"
            data-lenis-prevent
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-line bg-paper px-6 pt-8 pb-10 lg:hidden"
          >
            <nav aria-label="Menú principal">
              <p className="text-[0.75rem] font-medium tracking-[0.24em] text-burdeos uppercase">
                Servicios
              </p>
              <ul className="mt-2 border-b border-line pb-5">
                {SERVICIOS.map((s, i) => (
                  <motion.li
                    key={s.slug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={`/servicios/${s.slug}`}
                      onClick={cerrarMenu}
                      aria-current={pathname === `/servicios/${s.slug}` ? "page" : undefined}
                      className={linkMenu}
                    >
                      {s.nombre}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <ul className="mt-3">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.17 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={cerrarMenu}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={linkMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={waLink("Hola, quiero hacer una consulta")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={cerrarMenu}
                className="bg-burdeos px-6 py-4 text-center text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep"
              >
                Escribinos por WhatsApp
              </a>
              <a
                href={`tel:${CONTACTO.telefonoLink}`}
                className="border border-ink/20 px-6 py-4 text-center text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:border-ink"
              >
                Llamar al {CONTACTO.telefono}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
