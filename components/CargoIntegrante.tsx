import { Fragment } from "react";

/**
 * Cargo con el área separada por un punto: «Líder · Litigios».
 *
 * Cada parte va entera: nunca corta en el medio de «Proptech e IA». En
 * pantallas angostas las partes se apilan sin el punto, que si no quedaba
 * colgado al final del renglón. Un cargo de una sola parte se reparte parejo
 * para no dejar una palabra sola abajo.
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
          {k > 0 && (
            <span
              aria-hidden="true"
              className="mx-1.5 hidden text-grey sm:inline"
            >
              ·
            </span>
          )}
          <span className="block whitespace-nowrap sm:inline">{parte}</span>
        </Fragment>
      ))}
    </p>
  );
}
