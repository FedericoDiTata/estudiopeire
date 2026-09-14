"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Route,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import StepsCarousel, { type StepItem } from "./ui/steps-carousel";

/**
 * Los cuatro pasos salen del propio texto del estudio: «cada caso comienza con
 * un buen diagnóstico [...] para definir desde el inicio la estrategia más
 * adecuada. A partir de allí, acompañamos y coordinamos todo el proceso».
 *
 * REVISAR: los títulos de cada paso son nuestros, derivados de ese párrafo.
 */
const PASOS: {
  icono: LucideIcon;
  titulo: string;
  detalle: string;
  foto: string;
}[] = [
  {
    icono: Search,
    titulo: "Diagnóstico",
    detalle:
      "Analizamos la situación, los bienes y la documentación para entender con qué estamos trabajando.",
    foto: "/img/stock/pasos/diagnostico.webp",
  },
  {
    icono: Route,
    titulo: "Estrategia",
    detalle:
      "Definimos desde el inicio el camino más adecuado, anticipando riesgos y evitando pasos innecesarios.",
    foto: "/img/stock/pasos/estrategia.webp",
  },
  {
    icono: Users,
    titulo: "Coordinación",
    detalle:
      "Llevamos adelante el proceso y coordinamos con escribanos, contadores y demás profesionales cuando hace falta.",
    foto: "/img/stock/pasos/coordinacion.webp",
  },
  {
    icono: CheckCircle2,
    titulo: "Resolución",
    detalle:
      "Cerramos la operación o el trámite, y te explicamos en qué estado está cada vez que lo necesitás.",
    foto: "/img/stock/pasos/resolucion.webp",
  },
];

/**
 * Foto de stock de cada paso, relacionada con lo que dice (créditos en
 * brief/fotos-stock.md). Decorativa: el paso ya está escrito al lado.
 */
function VisualPaso({ foto }: { foto: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-card)] bg-line">
      <Image src={foto} alt="" fill sizes="40vw" className="object-cover" />
    </div>
  );
}

export default function Proceso() {
  const items: StepItem[] = PASOS.map((p) => ({
    titulo: p.titulo,
    detalle: p.detalle,
    icono: p.icono,
    visual: <VisualPaso foto={p.foto} />,
  }));

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Detrás de cada consulta hay una decisión importante"
          bajada="Por eso combinamos conocimiento jurídico, estrategia y una atención cercana. Así es el recorrido."
        />

        {/* Rota solo y se puede elegir cada paso con un clic */}
        <div className="mt-10 hidden lg:block">
          <StepsCarousel items={items} />
        </div>

        {/* En pantalla chica, todo desplegado: no hay lugar para la columna
            visual y esconder el texto detrás de un clic solo estorba. */}
        <ol className="mt-12 space-y-9 lg:hidden">
          {PASOS.map((p, i) => {
            const Icono = p.icono;
            return (
              <motion.li
                key={p.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100% 0px -18% 0px" }}
                transition={{ type: "spring", stiffness: 85, damping: 18 }}
                className="flex gap-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burdeos text-paper">
                  <Icono
                    className="h-[1.15rem] w-[1.15rem]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <span className="font-display text-[0.75rem] tracking-[0.24em] text-burdeos uppercase">
                    Paso 0{i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-medium">{p.titulo}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {p.detalle}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
