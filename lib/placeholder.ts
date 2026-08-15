/**
 * Textos de relleno.
 *
 * El sitio se presenta con la estructura armada pero sin dar por sentado qué
 * dice el estudio ni cómo lo dice. Todo lo que sea contenido propio (casos,
 * pasos, biografía, respuestas) va en lorem hasta que ellos lo definan.
 *
 * Lo que NO es relleno y queda como está: los nombres de las secciones y de
 * los servicios, porque son la estructura que ya se acordó con el estudio.
 */

export const LOREM_CORTO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.";

export const LOREM_MEDIO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

export const LOREM_LARGO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.";

/** Genera una lista de títulos numerados: «Pregunta 1», «Paso 2», etc. */
export function numerados(prefijo: string, cantidad: number) {
  return Array.from({ length: cantidad }, (_, i) => `${prefijo} ${i + 1}`);
}
