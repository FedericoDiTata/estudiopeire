import { Fragment } from "react";

/**
 * Cargo con el área separada por un punto: «Líder · Litigios».
 *
 * Cada parte va entera: si no entra en un renglón, corta después del punto
 * y no en el medio de «Proptech e IA». Un cargo de una sola parte se reparte
 * parejo para no dejar una palabra sola abajo.
 */
export default function CargoIntegrante({
  cargo,
  className,
}: {
  cargo: string;
  className?: string;
}) {
  const partes = cargo.split(" | ");

  if (partes.length === 1) {
    return <p className={`text-balance ${className ?? ""}`}>{cargo}</p>;
  }

  return (
    <p className={className}>
      {partes.map((parte, k) => (
        <Fragment key={k}>
          <span className="whitespace-nowrap">
            {parte}
            {k < partes.length - 1 && (
              <span aria-hidden="true" className="mx-1.5 text-grey">
                ·
              </span>
            )}
          </span>
          {k < partes.length - 1 && " "}
        </Fragment>
      ))}
    </p>
  );
}
