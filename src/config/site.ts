/**
 * Fuente única para la información institucional.
 * Reemplazar los valores vacíos únicamente con datos confirmados por el estudio.
 */
export const siteConfig = {
  name: "Estudio Jurídico Flor",
  description:
    "Asesoramiento jurídico claro y cercano. Conocé al estudio y contactanos para conversar sobre tu consulta.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  email: "",
  phone: "",
  location: "",
  practiceAreas: [] as { title: string; description: string }[],
  professionals: [] as {
    name: string;
    role: string;
    bio: string;
    image: string;
    imageAlt: string;
  }[],
} as const;
