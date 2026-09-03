"use client";

import {
  Scale,
  KeyRound,
  Handshake,
  Building2,
  ShieldCheck,
  Briefcase,
  FileSignature,
  Gavel,
  FileText,
  HardHat,
} from "lucide-react";
import { ExpandingCards, type CardItem } from "@/components/ui/expanding-cards";
import type { Caso, IconoCaso } from "@/lib/servicios";

const ICONOS: Record<IconoCaso, typeof Scale> = {
  sucesion: Scale,
  venta: KeyRound,
  acuerdo: Handshake,
  empresa: Building2,
  patrimonio: ShieldCheck,
  partner: Briefcase,
  operacion: FileSignature,
  conflicto: Gavel,
  contrato: FileText,
  desarrollo: HardHat,
};

/**
 * Puente entre los casos que mandó el estudio y el componente de paneles.
 * El panel abierto muestra el detalle y la ampliación completos, así el
 * contenido vive en un solo lugar y no se repite más abajo.
 */
export default function CasosExpandibles({ casos }: { casos: Caso[] }) {
  const items: CardItem[] = casos.map((caso, i) => {
    const Icono = ICONOS[caso.icono];
    return {
      id: `${i}-${caso.titulo}`,
      title: caso.titulo,
      label: caso.etiqueta,
      description: caso.detalle,
      extra: caso.ampliacion,
      icon: <Icono className="h-7 w-7" strokeWidth={1.4} aria-hidden="true" />,
    };
  });

  return <ExpandingCards items={items} />;
}
