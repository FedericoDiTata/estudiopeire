import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Confianza from "@/components/Confianza";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import SilvinaBreve from "@/components/SilvinaBreve";
import VideoRecomendacion from "@/components/VideoRecomendacion";
import Testimonios from "@/components/Testimonios";
import CierreContacto from "@/components/CierreContacto";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Confianza />
      <Servicios />
      <Proceso />
      <SilvinaBreve />
      <VideoRecomendacion />
      <Testimonios />
      <CierreContacto texto="Escribinos por WhatsApp y coordinamos una entrevista para conocer tu situación. Atendemos en la oficina de Puerto Madero o de manera virtual." />
    </>
  );
}
