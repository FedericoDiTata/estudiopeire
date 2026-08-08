import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
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
      <body className={`${fraunces.variable} ${instrument.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
