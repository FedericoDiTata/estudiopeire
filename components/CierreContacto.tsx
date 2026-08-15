import { CONTACTO, waLink } from "@/lib/site";
import Reveal from "./Reveal";

type Props = {
  titulo?: string;
  texto?: string;
  waMensaje?: string;
};

/** Cierre común a todas las páginas. */
export default function CierreContacto({
  titulo = "Contanos tu caso",
  texto = "Escribinos y te decimos si hay algo para hacer, cómo sería el trámite y cuánto puede demorar.",
  waMensaje = "Hola, quiero hacer una consulta",
}: Props) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-[1.1] font-light tracking-[-0.02em] text-paper sm:text-4xl md:text-5xl">
            {titulo}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-paper/75">{texto}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(waMensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper px-8 py-4 text-center text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-burdeos hover:text-paper"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href={`tel:${CONTACTO.telefonoLink}`}
              className="border border-paper/40 px-8 py-4 text-center text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:border-paper hover:bg-paper/10"
            >
              {CONTACTO.telefono}
            </a>
          </div>

          <div className="mt-12 grid gap-6 border-t border-paper/15 pt-8 text-sm text-paper/65 sm:grid-cols-2">
            <p>
              {CONTACTO.direccion}
              <br />
              {CONTACTO.ciudad}
            </p>
            <p>
              <a
                href={`mailto:${CONTACTO.email}`}
                className="transition-colors hover:text-paper"
              >
                {CONTACTO.email}
              </a>
              <br />
              Atención presencial y virtual
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
