import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/config/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "El estudio",
  description:
    "Conocé la forma de trabajo de Martinez - Estudio Juridico y cómo acercar tu consulta.",
  path: "/estudio",
});

export default function EstudioPage() {
  return (
    <main id="contenido">
      <PageIntro
        eyebrow="El estudio"
        title="Lo legal, explicado con claridad."
        description="Una consulta jurídica merece escucha, información comprensible y atención a sus circunstancias."
      />
      <section className="section page-section" aria-labelledby="estudio-enfoque">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Nuestra forma de trabajo</p>
            <h2 id="estudio-enfoque">Escuchar antes de avanzar.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Creemos que una buena orientación empieza por comprender la situación
              y explicar las alternativas posibles con palabras claras.
            </p>
            <p className="content-note">
              Este texto institucional es preliminar y debe revisarse con el estudio antes de publicar.
            </p>
            <Link className="text-link" href="/equipo">
              Conocé al equipo <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="page-cta">
        <div className="container page-cta-inner">
          <div>
            <p className="eyebrow">Tu consulta</p>
            <h2>El primer paso es conversar.</h2>
          </div>
          <Link className="button button-primary" href="/contacto">
            Ir a contacto <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
