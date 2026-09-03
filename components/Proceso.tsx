"use client";

import { motion } from "framer-motion";
import { Search, Route, Users, CheckCircle2, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollRevealContentA, {
  type ItemContent,
} from "./ui/scroll-reveal-content-a";

/**
 * Los cuatro pasos salen del propio texto del estudio: «cada caso comienza con
 * un buen diagnóstico [...] para definir desde el inicio la estrategia más
 * adecuada. A partir de allí, acompañamos y coordinamos todo el proceso».
 *
 * REVISAR: los títulos de cada paso son nuestros, derivados de ese párrafo.
 */
const PASOS: { icono: LucideIcon; titulo: string; detalle: string }[] = [
  {
    icono: Search,
    titulo: "Diagnóstico",
    detalle:
      "Analizamos la situación, los bienes y la documentación para entender con qué estamos trabajando.",
  },
  {
    icono: Route,
    titulo: "Estrategia",
    detalle:
      "Definimos desde el inicio el camino más adecuado, anticipando riesgos y evitando pasos innecesarios.",
  },
  {
    icono: Users,
    titulo: "Coordinación",
    detalle:
      "Llevamos adelante el proceso y coordinamos con escribanos, contadores y demás profesionales cuando hace falta.",
  },
  {
    icono: CheckCircle2,
    titulo: "Resolución",
    detalle:
      "Cerramos la operación o el trámite, y te explicamos en qué estado está cada vez que lo necesitás.",
  },
];

/**
 * Espacio reservado para la foto del paso. Mientras no estén, el panel se
 * resuelve con el vino de la marca y el icono del paso.
 */
function VisualPaso({ Icono, numero }: { Icono: LucideIcon; numero: number }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[var(--radius-card)] bg-burdeos-deep">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-paper) 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icono className="h-20 w-20 text-paper/80" strokeWidth={0.9} aria-hidden="true" />
      </div>
      <span className="absolute top-6 left-6 font-display text-xs tracking-[0.24em] text-paper/45 uppercase">
        0{numero}
      </span>
      <span className="absolute bottom-6 left-6 text-[0.65rem] font-medium tracking-[0.24em] text-paper/40 uppercase">
        Foto
      </span>
    </div>
  );
}

export default function Proceso() {
  const items: ItemContent[] = PASOS.map((p, i) => ({
    title: p.titulo,
    description: p.detalle,
    visual: <VisualPaso Icono={p.icono} numero={i + 1} />,
  }));

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 pt-24 md:pt-32">
        <SectionHeading
          label="Cómo trabajamos"
          titulo="Detrás de cada consulta hay una decisión importante"
          bajada="Por eso combinamos conocimiento jurídico, estrategia y una atención cercana. Así es el recorrido."
        />
      </div>

      {/* Los pasos se encienden con el scroll. Solo en pantalla grande: en un
          celular, retener el scroll para animar molesta más de lo que aporta. */}
      <div className="hidden lg:block">
        <ScrollRevealContentA items={items} alturaPista="h-[230vh]" />
      </div>

      {/* En pantalla chica, la misma información en lista */}
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:hidden">
        <ol className="mt-14 space-y-10">
          {PASOS.map((p, i) => {
            const Icono = p.icono;
            return (
              <motion.li
                key={p.titulo}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 85, damping: 18 }}
                className="flex gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burdeos-soft text-burdeos">
                  <Icono className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <span className="font-display text-xs tracking-[0.24em] text-burdeos uppercase">
                    Paso 0{i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-medium">{p.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.detalle}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
