import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CONTACTO } from "@/lib/site";

// Sustituto libre de DIN Next (comercial). El logo juega con el contraste
// entre un peso liviano y uno bold: el sitio repite ese recurso.
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estudiopeire.com.ar"),
  title: {
    default: "Estudio Peiré · Abogados en derecho inmobiliario y sucesiones",
    template: "%s · Estudio Peiré",
  },
  description:
    "Estudio jurídico especializado en sucesiones y derecho inmobiliario en CABA y GBA. Atención presencial y virtual.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Estudio Peiré",
    title: "Estudio Peiré · Abogados en derecho inmobiliario y sucesiones",
    description:
      "Estudio jurídico especializado en sucesiones y derecho inmobiliario en CABA y GBA. Atención presencial y virtual.",
  },
};

/**
 * Datos estructurados de estudio jurídico. El sitio actual no tiene ninguno,
 * y es lo que le permite a Google entender quiénes son, dónde atienden y de
 * qué se ocupan.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Estudio Peiré",
  description:
    "Estudio jurídico especializado en sucesiones y derecho inmobiliario en CABA y GBA.",
  url: "https://estudiopeire.com.ar",
  telephone: CONTACTO.telefonoLink,
  email: CONTACTO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACTO.direccion,
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: "Área Metropolitana de Buenos Aires",
  knowsAbout: [
    "Sucesiones",
    "Derecho inmobiliario",
    "Propiedad horizontal",
    "Fideicomisos inmobiliarios",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={barlow.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
