import { siteConfig } from "@/config/site";

export const faqItems = [
  {
    question: "¿Cómo puedo comunicarme con el estudio?",
    answer:
      "Podés escribir a " +
      siteConfig.email +
      " y contar brevemente el motivo de tu consulta. Podés pedir información sobre los próximos pasos.",
  },
  {
    question: "¿Qué información conviene incluir en el primer mensaje?",
    answer:
      "Una descripción breve de la situación, las fechas importantes y la localidad donde ocurrió. Si existe un plazo urgente, mencioná su vencimiento. Evitá enviar documentación sensible hasta acordar un canal adecuado.",
  },
  {
    question: "¿La consulta inicial tiene costo?",
    answer:
      "Consultá por correo electrónico las condiciones y honorarios aplicables antes de coordinar una reunión.",
  },
  {
    question: "¿Qué temas atiende el estudio?",
    answer:
      "Las áreas de práctica se publicarán cuando el estudio las confirme. Mientras tanto, podés escribir para consultar si pueden orientarte sobre tu situación.",
  },
  {
    question: "¿La información del sitio reemplaza el asesoramiento profesional?",
    answer:
      "No. El contenido del sitio es general y no evalúa los hechos particulares de cada caso. Para recibir orientación sobre tu situación, contactá al estudio.",
  },
] as const;
