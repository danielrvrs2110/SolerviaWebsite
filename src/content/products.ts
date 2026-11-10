export type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  tagline: string;
  description: string;
  problem: string;
  audience: string;
  implemented: string[];
  inDevelopment: string[];
  availability: string;
};

// Descriptions are limited to what each project's repository documents.
// Neither application is offered here as a ready-to-buy service.
export const products: Product[] = [
  {
    slug: "pedidoflow",
    name: "PedidoFlow",
    category: "Operación de pedidos B2B",
    status: "Producto en desarrollo",
    tagline: "De pedidos recibidos en distintos formatos a un flujo revisable para el equipo.",
    description:
      "PedidoFlow está diseñado para distribuidores mexicanos de alimentos y suministros para restaurantes. Su objetivo es convertir pedidos no estructurados en borradores que una persona pueda revisar antes de confirmar y surtir.",
    problem:
      "Los pedidos llegan con datos y formatos distintos. Capturarlos, identificar productos y confirmar cantidades exige trabajo manual y revisión cuidadosa.",
    audience: "Distribuidores B2B de alimentos y suministros para restaurantes.",
    implemented: [
      "Acceso autenticado y separación de datos por organización.",
      "Catálogo de productos y alias manuales, con interfaz responsive.",
      "Estructura de navegación para el trabajo operativo.",
    ],
    inDevelopment: [
      "Clientes y direcciones de entrega.",
      "Interpretación de mensajes, revisión de incertidumbre y confirmación de pedidos.",
      "Flujos posteriores de surtido, entrega y pago.",
    ],
    availability: "Aún no se ofrece como servicio listo para contratar.",
  },
  {
    slug: "solervia-sales-agent",
    name: "Solervia Sales Agent",
    category: "Operación comercial asistida",
    status: "Demostración privada",
    tagline: "Un espacio de trabajo para preparar y revisar la prospección comercial.",
    description:
      "Aplicación privada para un administrador. Permite organizar prospectos, productos, guiones y campañas, con revisión humana antes de ejecutar acciones.",
    problem:
      "La búsqueda, calificación y seguimiento de prospectos pueden quedar dispersos entre herramientas y tareas manuales.",
    audience: "Uso interno de un administrador; no es una plataforma multiempresa ni una suscripción pública.",
    implemented: [
      "CRM de prospectos con estados, notas, filtros y seguimiento.",
      "Preparación, edición y aprobación de borradores y campañas.",
      "Modo demostración con simulaciones y métricas basadas en registros del entorno seleccionado.",
    ],
    inDevelopment: [
      "Verificación con cuentas reales de proveedores externos.",
      "Activación comercial de correo, voz, agenda y notificaciones.",
      "Revisión de cumplimiento y autorización para cualquier contacto real.",
    ],
    availability: "No está disponible para registro ni para ejecutar campañas reales desde esta web.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
