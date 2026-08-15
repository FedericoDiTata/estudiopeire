/**
 * Testimonios de clientes.
 *
 * VACÍO A PROPÓSITO. En un sitio de un estudio jurídico no se publican
 * testimonios de relleno: si no son reales, no van. El bloque de la home se
 * oculta solo mientras esta lista esté vacía y aparece en cuanto se carguen.
 *
 * Requisitos acordados con el estudio: reales, actuales, con nombre y con
 * autorización del cliente. Lo ideal es uno por cada área.
 */

export type Testimonio = {
  texto: string;
  nombre: string;
  detalle: string;
};

export const TESTIMONIOS: Testimonio[] = [];
