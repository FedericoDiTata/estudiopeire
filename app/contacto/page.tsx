import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FormularioContacto from "@/components/FormularioContacto";
import { CONTACTO, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos por WhatsApp, llamanos o dejanos tu consulta. Atención presencial en CABA y virtual para todo el país.",
};

/** REVISAR: horarios de atención y dirección definitiva, pendientes de confirmar. */
export default function PaginaContacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        titulo="Escribinos"
        bajada="Contanos brevemente qué necesitás y coordinamos una consulta."
        imagen="/img/estudio_peire-homepage-background.jpg"
        imagenAlt="Escritorio del estudio"
      />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl leading-tight font-light tracking-[-0.01em] sm:text-3xl">
              Dejanos tu consulta
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Completá el formulario y seguimos la conversación por WhatsApp, que
              es donde más rápido respondemos.
            </p>
            <div className="mt-10">
              <FormularioContacto />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-line bg-surface p-8 md:p-10">
              <h2 className="text-[0.7rem] font-medium tracking-[0.24em] text-burdeos uppercase">
                Datos directos
              </h2>

              <dl className="mt-8 space-y-7">
                <div>
                  <dt className="text-sm text-muted">WhatsApp</dt>
                  <dd className="mt-1 text-lg">
                    <a
                      href={waLink("Hola, quiero hacer una consulta")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-burdeos"
                    >
                      {CONTACTO.telefono}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted">Teléfono</dt>
                  <dd className="mt-1 text-lg">
                    <a
                      href={`tel:${CONTACTO.telefonoLink}`}
                      className="transition-colors hover:text-burdeos"
                    >
                      {CONTACTO.telefono}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted">Mail</dt>
                  <dd className="mt-1 break-all text-lg">
                    <a
                      href={`mailto:${CONTACTO.email}`}
                      className="transition-colors hover:text-burdeos"
                    >
                      {CONTACTO.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted">Oficina</dt>
                  <dd className="mt-1 leading-relaxed">
                    {CONTACTO.direccion}
                    <br />
                    {CONTACTO.ciudad}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted">Atención</dt>
                  <dd className="mt-1 leading-relaxed">
                    Presencial con turno previo, y virtual por Google Meet, Skype
                    o videollamada de WhatsApp para todo el país.
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="relative h-[380px] w-full bg-surface md:h-[460px]">
          <iframe
            title="Ubicación del estudio en el mapa"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${CONTACTO.direccion}, ${CONTACTO.ciudad}`,
            )}&output=embed`}
            className="h-full w-full border-0 grayscale-[0.35]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
