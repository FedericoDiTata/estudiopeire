/**
 * Espacio reservado para una foto que todavía no definimos con el estudio.
 * Se ve claramente como un hueco a completar, no como una decisión de diseño.
 */
export default function Placeholder({
  ratio = "aspect-[4/3]",
  etiqueta = "Foto",
  className = "",
}: {
  ratio?: string;
  etiqueta?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden bg-burdeos-soft ${className}`}
      role="img"
      aria-label={`Espacio reservado para ${etiqueta.toLowerCase()}`}
    >
      {/* Trama diagonal suave, para que se lea como hueco y no como bloque de color */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-burdeos) 0 1px, transparent 1px 11px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[0.65rem] font-medium tracking-[0.24em] text-burdeos uppercase">
          {etiqueta}
        </span>
      </div>
    </div>
  );
}
