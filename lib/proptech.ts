import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BrainCircuit,
  Coins,
  FileCode2,
  Megaphone,
  Presentation,
  ShieldCheck,
} from "lucide-react";

/**
 * Proptech e IA. Textos del estudio, del documento «INFO WEB» (septiembre de
 * 2026).
 */
export const PROPTECH = {
  lema: "La innovación abre nuevas oportunidades. Nuestro trabajo es aportar el marco jurídico para desarrollarlas con seguridad.",
  deQueSeTrata: [
    "Brindamos asesoramiento legal estratégico para la incorporación de nuevas tecnologías en el sector inmobiliario.",
    "Acompañamos a empresas, desarrolladores y profesionales del Real Estate frente a los nuevos desafíos jurídicos que surgen de la transformación digital, anticipando riesgos y aportando seguridad legal a nuevos modelos, procesos y herramientas.",
  ],
  waMensaje: "Hola, quiero consultar por un tema de proptech o IA",
};

export type AreaProptech = {
  titulo: string;
  detalle: string;
  icono: LucideIcon;
};

/** En el orden del documento. La última, capacitación, cierra la grilla. */
export const AREAS_PROPTECH: AreaProptech[] = [
  {
    titulo: "Inteligencia Artificial aplicada al Real Estate",
    detalle:
      "Análisis de riesgos legales, responsabilidad, uso de información y decisiones automatizadas.",
    icono: BrainCircuit,
  },
  {
    titulo: "Protección de datos y privacidad",
    detalle: "En el uso de herramientas digitales e IA.",
    icono: ShieldCheck,
  },
  {
    titulo: "Smart Contracts",
    detalle:
      "Análisis y estructuración jurídica de contratos y procesos automatizados.",
    icono: FileCode2,
  },
  {
    titulo: "Tokenización de activos inmobiliarios",
    detalle:
      "Análisis legal de nuevos modelos de inversión y comercialización.",
    icono: Coins,
  },
  {
    titulo: "Blockchain y tecnologías de registro distribuido",
    detalle: "Implicancias jurídicas en operaciones y trazabilidad.",
    icono: Blocks,
  },
  {
    titulo: "Marketing y experiencias digitales",
    detalle:
      "Prevención de contingencias vinculadas con publicidad, contenidos generados por IA y representación virtual de inmuebles.",
    icono: Megaphone,
  },
  {
    titulo: "Capacitación y protocolos internos",
    detalle:
      "Para el uso responsable de IA y nuevas tecnologías por equipos inmobiliarios.",
    icono: Presentation,
  },
];
