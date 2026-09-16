"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/site";

// Foto del equipo completo en la oficina (sesión de septiembre de 2026). Es
// lo primero que se ve: quien entra conoce a las personas que lo van a
// atender. La otra toma con las ocho está en Quiénes somos.
//
// `grupo` marca la franja de la foto que tiene que quedar a la vista, en
// fracción del alto: desde la cabeza más alta hasta el mentón de la
// integrante sentada al centro, que es la que queda más cerca del texto.
const FOTO = {
  src: "/img/hero/equipo-oficina-1.webp",
  alt: "Las ocho integrantes de Estudio Peiré en la oficina del estudio",
  ancho: 2400,
  alto: 1600,
  grupo: { arriba: 0.21, abajo: 0.58 },
  // Centro de cada cara, en fracción del ancho. En celular y tablet la foto
  // entra recortada a lo ancho y el borde tiene que caer entre dos personas,
  // nunca sobre una cara.
  caras: [0.121, 0.238, 0.346, 0.463, 0.493, 0.579, 0.729, 0.863],
};

// Media cabeza, con pelo, en fracción del ancho de la foto.
const RADIO_CARA = 0.045;

const ZOOM_MAX = 1.05;
// El pelo puede llegar al borde inferior de la barra de navegación, que es
// transparente: los links quedan más arriba.
const TOPE_NAV = 72;

/**
 * Elige qué franja horizontal de la foto se ve.
 *
 * En pantallas altas y angostas (celular, tablet vertical) solo entra una
 * parte del ancho: si el corte cae sobre alguien, se ve media cara pegada al
 * borde. Acá se prueban los desplazamientos posibles y se elige el que deja
 * los dos bordes más lejos de cualquier cara, contemplando el acercamiento.
 */
function elegirHorizontal(ventana: number) {
  if (ventana >= 1) return "50%";

  let mejor = { x: 0.5, puntaje: -Infinity };
  for (let i = 0; i <= 200; i++) {
    const izquierda = (i / 200) * (1 - ventana);
    const centro = izquierda + ventana / 2;
    let claro = Infinity;
    for (const zoom of [1, ZOOM_MAX]) {
      const mitad = ventana / (2 * zoom);
      for (const borde of [centro - mitad, centro + mitad]) {
        for (const cara of FOTO.caras) {
          claro = Math.min(claro, Math.abs(borde - cara));
        }
      }
    }
    // Primero que los bordes estén libres; entre los que lo están, el que
    // muestre más caras y, a igualdad, el más centrado.
    const adentro = FOTO.caras.filter(
      (c) => c > izquierda && c < izquierda + ventana,
    ).length;
    const puntaje =
      Math.min(claro, RADIO_CARA) * 100 +
      adentro * 0.05 -
      Math.abs(centro - 0.5) * 0.01;
    if (puntaje > mejor.puntaje) mejor = { x: izquierda / (1 - ventana), puntaje };
  }
  return `${(mejor.x * 100).toFixed(2)}%`;
}

/**
 * Elige qué franja vertical de la foto se ve, según la pantalla.
 *
 * Un encuadre fijo no alcanza: según el ancho y el alto de la ventana (y el
 * zoom del navegador) el título y los botones caen a distinta altura de la
 * foto, y en algunas pantallas quedaban sobre la cara de quien está sentada
 * al centro. Acá se mide dónde empieza el texto y se desplaza la foto para que
 * todas las caras queden por encima, contemplando el acercamiento lento.
 *
 * Si no entra el grupo entero, primero se cuida que el texto no tape ninguna
 * cara. Devuelve el valor de `object-position`.
 */
function encuadrar(anchoCaja: number, altoCaja: number, topeTexto: number) {
  const escala = Math.max(anchoCaja / FOTO.ancho, altoCaja / FOTO.alto);
  const altoFoto = FOTO.alto * escala;
  const anchoFoto = FOTO.ancho * escala;
  const x = elegirHorizontal(anchoCaja / anchoFoto);
  const sobra = altoFoto - altoCaja;
  if (sobra < 1) return `${x} 50%`;

  const limiteArriba = TOPE_NAV;
  const limiteAbajo = topeTexto - 10;
  const centro = altoCaja / 2;

  // Con el desplazamiento d, un punto a la fracción f queda en
  // centro + (f * altoFoto - d - centro) * zoom. Se despeja d para los dos
  // extremos del acercamiento y se toma el caso más exigente.
  let desdeMin = -Infinity;
  let desdeMax = Infinity;
  for (const zoom of [1, ZOOM_MAX]) {
    desdeMin = Math.max(
      desdeMin,
      FOTO.grupo.abajo * altoFoto - centro - (limiteAbajo - centro) / zoom,
    );
    desdeMax = Math.min(
      desdeMax,
      FOTO.grupo.arriba * altoFoto - centro - (limiteArriba - centro) / zoom,
    );
  }

  const deseado = desdeMin <= desdeMax ? (desdeMin + desdeMax) / 2 : desdeMin;
  const desplazamiento = Math.min(Math.max(deseado, 0), sobra);
  return `${x} ${((desplazamiento / sobra) * 100).toFixed(2)}%`;
}

export default function Hero() {
  const reducido = useReducedMotion();
  const seccionRef = useRef<HTMLElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);
  const [posicion, setPosicion] = useState("50% 40%");

  useEffect(() => {
    const seccion = seccionRef.current;
    const texto = textoRef.current;
    if (!seccion || !texto) return;

    const medir = () => {
      const caja = seccion.getBoundingClientRect();
      const tope = texto.getBoundingClientRect().top - caja.top;
      setPosicion(encuadrar(caja.width, caja.height, tope));
    };

    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(seccion);
    observador.observe(texto);
    return () => observador.disconnect();
  }, []);

  return (
    <section
      ref={seccionRef}
      className="relative flex min-h-[92svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={reducido ? false : { opacity: 0, scale: 1 }}
        animate={reducido ? undefined : { opacity: 1, scale: ZOOM_MAX }}
        transition={{
          opacity: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
          scale: { duration: 16, ease: "linear" },
        }}
      >
        <Image
          src={FOTO.src}
          alt={FOTO.alt}
          fill
          priority
          sizes="100vw"
          data-hero-foto
          className="object-cover"
          style={{ objectPosition: posicion }}
        />
      </motion.div>

      {/* La foto muestra al equipo: el velo es liviano arriba, donde están
          las caras, y carga la oscuridad abajo, donde va el texto. La franja
          superior mantiene legible el menú transparente. */}
      <div className="absolute inset-0 bg-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-burdeos-deep/25 via-transparent to-burdeos-deep/25" />

      {/* Bloque bajo y compacto, más todavía en pantallas de poca altura */}
      <div
        ref={textoRef}
        data-hero-texto
        className="relative mx-auto w-full max-w-3xl px-6 pb-8 text-center [@media(max-height:760px)]:pb-6"
      >
        {/* Sin logo: ya está en la barra de navegación y acá tapaba parte de
            la foto del equipo, que es lo que tiene que verse al entrar. */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[1.6rem] leading-[1.15] font-light tracking-[-0.01em] text-paper sm:text-3xl md:text-4xl md:[@media(max-height:760px)]:text-3xl"
          >
            Derecho Inmobiliario y Sucesiones
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row [@media(max-height:760px)]:mt-5"
        >
          <a
            href={waLink("Hola, quiero hacer una consulta")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-burdeos px-8 py-4 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep sm:w-auto"
          >
            Consultá tu caso
          </a>
          {/* En celulares de poca altura se muestra solo la consulta: con los
              dos botones apilados, el bloque de texto sube sobre una cara. */}
          <a
            href="#servicios"
            className="w-full border border-paper/50 px-8 py-4 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:border-paper hover:bg-paper/10 sm:w-auto [@media(max-width:639px)_and_(max-height:700px)]:hidden"
          >
            Ver especialidades
          </a>
        </motion.div>
      </div>
    </section>
  );
}
