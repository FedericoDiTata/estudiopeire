"use client";

import { useState } from "react";
import Acordeon from "./Acordeon";
import { FAQ, TEMAS, type Tema } from "@/lib/faq";

export default function FaqNavegable() {
  const [tema, setTema] = useState<Tema | "todas">("todas");

  const visibles = tema === "todas" ? FAQ : FAQ.filter((f) => f.tema === tema);

  const opciones = [{ id: "todas" as const, label: "Todas" }, ...TEMAS];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {opciones.map((o) => {
          const activo = tema === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setTema(o.id)}
              aria-pressed={activo}
              className={`px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                activo
                  ? "bg-ink text-paper"
                  : "border border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        <Acordeon key={tema} items={visibles} />
      </div>
    </div>
  );
}
