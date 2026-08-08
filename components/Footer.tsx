import Link from "next/link";
import { CONTACTO, SERVICIOS, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold">Estudio Peiré</p>
            <p className="mt-1 text-[0.55rem] font-medium tracking-[0.42em] text-paper/50 uppercase">
              Abogados
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/70">
              Sucesiones y derecho inmobiliario en {CONTACTO.zona}. Atención
              presencial y virtual.
            </p>
            <a
              href={waLink("Hola, quiero hacer una consulta")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-paper px-6 py-3 text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-petrol hover:text-paper"
            >
              Escribinos
            </a>
          </div>

          <nav className="text-sm">
            <p className="text-[0.65rem] font-medium tracking-[0.24em] text-paper/45 uppercase">
              Servicios
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICIOS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-9 text-[0.65rem] font-medium tracking-[0.24em] text-paper/45 uppercase">
              El sitio
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/estudio" className="text-paper/75 transition-colors hover:text-paper">
                  El Estudio
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-paper/75 transition-colors hover:text-paper">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-paper/75 transition-colors hover:text-paper">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="text-[0.65rem] font-medium tracking-[0.24em] text-paper/45 uppercase">
              Contacto
            </p>
            <ul className="mt-5 space-y-4 text-paper/75">
              <li>
                <a href={`tel:${CONTACTO.telefonoLink}`} className="transition-colors hover:text-paper">
                  {CONTACTO.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACTO.email}`} className="transition-colors hover:text-paper">
                  {CONTACTO.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {CONTACTO.direccion}
                <br />
                {CONTACTO.ciudad}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Estudio Peiré. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
