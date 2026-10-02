/**
 * Fuente única para la información institucional.
 * Completar los datos pendientes solo con información confirmada por el estudio.
 */
export const siteConfig = {
  name: "Martinez - Estudio Juridico",
  description:
    "Asesoramiento jurídico claro y cercano. Conocé al estudio y contactanos para conversar sobre tu consulta.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  email: "floorr.martinez.21@gmail.com",
  phone: "",
  location: "",
  practiceAreas: [
    { title: "Divorcios", description: "Orientación sobre el proceso de divorcio, acuerdos y cuestiones familiares relacionadas." },
    { title: "Sucesiones", description: "Asesoramiento para reunir documentación y avanzar en los trámites sucesorios." },
    { title: "Derecho laboral", description: "Consultas sobre relaciones de trabajo, conflictos y reclamos laborales." },
    { title: "Alimentos", description: "Acompañamiento en consultas sobre cuota alimentaria, acuerdos y reclamos." },
    { title: "Trámites", description: "Gestiones y trámites jurídicos. Consultanos por el alcance de cada gestión." },
  ] as { title: string; description: string }[],
  professionals: [] as {
    name: string;
    role: string;
    bio: string;
    image: string;
    imageAlt: string;
  }[],
} as const;
