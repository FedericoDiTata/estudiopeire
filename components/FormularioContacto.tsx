"use client";

import { useState } from "react";
import { SERVICIOS, waLink } from "@/lib/site";

/**
 * Sin backend todavía: al enviar, arma el mensaje y abre WhatsApp con todo
 * cargado. Cuando definamos el envío por mail, se cambia el submit y el resto
 * del formulario queda igual.
 */
export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const mensaje = [
      `Hola, soy ${datos.get("nombre")}.`,
      `Tema: ${datos.get("tema")}.`,
      `${datos.get("mensaje")}`,
      `Mi teléfono: ${datos.get("telefono")}`,
    ].join("\n");
    setEnviado(true);
    window.open(waLink(mensaje), "_blank", "noopener");
  }

  const campo =
    "w-full border border-line bg-paper px-4 py-3.5 text-[0.95rem] outline-none transition-colors duration-300 focus:border-ink";
  const etiqueta =
    "block text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={etiqueta}>
            Nombre
          </label>
          <input id="nombre" name="nombre" required className={`mt-2 ${campo}`} />
        </div>
        <div>
          <label htmlFor="telefono" className={etiqueta}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            inputMode="tel"
            className={`mt-2 ${campo}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={etiqueta}>
          Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`mt-2 ${campo}`}
        />
      </div>

      <div>
        <label htmlFor="tema" className={etiqueta}>
          Tema de la consulta
        </label>
        <select id="tema" name="tema" className={`mt-2 ${campo}`}>
          {SERVICIOS.map((s) => (
            <option key={s.slug}>{s.nombre}</option>
          ))}
          <option>Otro tema</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className={etiqueta}>
          Contanos tu caso
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className={`mt-2 resize-none ${campo}`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-burdeos px-8 py-4 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-burdeos-deep sm:w-auto"
      >
        Enviar consulta
      </button>

      {enviado && (
        <p role="status" className="text-sm text-muted">
          Se abrió WhatsApp con tu consulta cargada. Si no se abrió, escribinos
          al número de arriba.
        </p>
      )}
    </form>
  );
}
