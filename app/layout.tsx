import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={barlow.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
