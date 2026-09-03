import Hero from "@/components/Hero";
import Confianza from "@/components/Confianza";
import Servicios from "@/components/Servicios";
import Marquee from "@/components/Marquee";
import Proceso from "@/components/Proceso";
import SilvinaBreve from "@/components/SilvinaBreve";
import VideoRecomendacion from "@/components/VideoRecomendacion";
import Testimonios from "@/components/Testimonios";
import CierreContacto from "@/components/CierreContacto";

const AREAS = [
  "Sucesiones",
  "Compraventas",
  "Fideicomisos",
  "Propiedad horizontal",
  "Desarrollos inmobiliarios",
  "Contratos",
  "Planificación patrimonial",
  "Proptech e IA",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Confianza />
      <Servicios />
      <Marquee items={AREAS} className="border-y border-line bg-burdeos text-paper" />
      <Proceso />
      <SilvinaBreve />
      <VideoRecomendacion />
      <Testimonios />
      <CierreContacto />
    </>
  );
}
