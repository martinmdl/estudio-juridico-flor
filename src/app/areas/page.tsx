import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Áreas de práctica",
  description:
    "Consultá las áreas de práctica de Martinez - Estudio Juridico y encontrá cómo contactar al estudio.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <main id="contenido">
      <PageIntro
        eyebrow="Servicios"
        title="Áreas de práctica"
        description="Cada asunto requiere una mirada concreta. Las especialidades del estudio se publicarán cuando estén confirmadas."
      />
      <section className="section page-section" aria-label="Áreas de práctica del estudio">
        <div className="container">
          {siteConfig.practiceAreas.length > 0 ? (
            <div className="area-grid">
              {siteConfig.practiceAreas.map((area, index) => (
                <article className="area-card" key={area.title}>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{area.title}</h2>
                  <p>{area.description}</p>
                  <Link href="/contacto">
                    Consultar <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="content-placeholder">
              <span className="placeholder-mark" aria-hidden="true">+</span>
              <div>
                <h2>Especialidades pendientes de confirmar</h2>
                <p>Podés escribirnos para consultar si el estudio puede orientarte.</p>
                <Link className="text-link" href="/contacto">
                  Ir a contacto <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
