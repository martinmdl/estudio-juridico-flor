import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { faqItems } from "@/config/faq";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Preguntas frecuentes",
  description:
    "Respuestas a preguntas frecuentes sobre cómo contactar a Martinez - Estudio Juridico y preparar una consulta.",
  path: "/preguntas-frecuentes",
});

export default function PreguntasFrecuentesPage() {
  return (
    <main id="contenido">
      <PageIntro
        eyebrow="Información útil"
        title="Preguntas frecuentes"
        description="Respuestas breves para dar el primer paso con información clara."
      />
      <section className="section page-section" aria-label="Respuestas a preguntas frecuentes">
        <div className="container faq-layout">
          <div className="faq-list">
            {faqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <aside className="faq-aside">
            <p className="eyebrow">¿Tenés otra pregunta?</p>
            <h2>Escribinos.</h2>
            <p>Podés acercar tu consulta al estudio por correo electrónico.</p>
            <Link className="text-link" href="/contacto">
              Ir a contacto <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
