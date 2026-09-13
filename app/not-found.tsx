import Link from "next/link";
import { waLink } from "@/lib/site";

export const metadata = { title: "Página no encontrada" };

export default function NoEncontrada() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 pt-32 pb-24">
      <span aria-hidden="true" className="block h-0.5 w-12 bg-burdeos" />
      <h1 className="mt-6 font-display text-4xl leading-[1.1] font-light tracking-[-0.02em] sm:text-5xl">
        Esta página no existe
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
        Puede que el link esté mal escrito o que la página se haya movido. Desde el
        inicio podés llegar a todo el sitio.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="bg-burdeos px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep"
        >
          Volver al inicio
        </Link>
        <a
          href={waLink("Hola, quiero hacer una consulta")}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink/20 px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:border-ink"
        >
          Escribinos
        </a>
      </div>
    </section>
  );
}
