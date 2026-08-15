"use client";

import Link from "next/link";
import { useState } from "react";

export type ItemAcordeon = {
  pregunta: string;
  respuesta: string;
  verMas?: { texto: string; href: string };
};

export default function Acordeon({ items }: { items: ItemAcordeon[] }) {
  // Arrancan todas cerradas: el visitante elige qué abrir.
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const activo = abierto === i;
        return (
          <div key={item.pregunta} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setAbierto(activo ? null : i)}
                aria-expanded={activo}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-burdeos"
              >
                <span className="text-[1.05rem] leading-snug font-medium">
                  {item.pregunta}
                </span>
                <span
                  className={`mt-1 shrink-0 text-xl leading-none font-light transition-transform duration-300 ease-[var(--ease-out-quint)] ${
                    activo ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-quint)] ${
                activo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-7">
                  <p className="leading-relaxed text-muted">{item.respuesta}</p>
                  {item.verMas && (
                    <Link
                      href={item.verMas.href}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-burdeos uppercase"
                    >
                      {item.verMas.texto}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
