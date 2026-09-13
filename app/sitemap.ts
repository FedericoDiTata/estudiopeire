import type { MetadataRoute } from "next";
import { SERVICIOS } from "@/lib/site";

const SITIO = "https://estudiopeire.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    "",
    ...SERVICIOS.map((s) => `/servicios/${s.slug}`),
    "/estudio",
    "/preguntas-frecuentes",
    "/contacto",
  ];
  return rutas.map((ruta) => ({
    url: `${SITIO}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: ruta === "" ? 1 : 0.8,
  }));
}
