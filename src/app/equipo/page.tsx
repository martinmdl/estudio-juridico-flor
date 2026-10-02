import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Equipo",
  description:
    "Conocé a los profesionales de Martinez - Estudio Juridico y sus antecedentes verificados.",
  path: "/equipo",
});

export default function EquipoPage() {
  return (
    <main id="contenido">
      <PageIntro
        eyebrow="Quiénes somos"
        title="Las personas detrás del estudio."
        description="Los perfiles profesionales se incorporarán con la información confirmada por sus titulares."
      />
      <section className="section page-section" aria-label="Profesionales del estudio">
        <div className="container">
          {siteConfig.professionals.length > 0 ? (
            <div className="professional-grid">
              {siteConfig.professionals.map((person) => (
                <article className="professional-card" key={person.name}>
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.imageAlt}
                      width={400}
                      height={480}
                      sizes="(max-width: 700px) 100vw, 400px"
                    />
                  ) : null}
                  <div>
                    <h2>{person.name}</h2>
                    <p className="professional-role">{person.role}</p>
                    <p>{person.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="content-placeholder">
              <span className="placeholder-mark" aria-hidden="true">+</span>
              <div>
                <h2>Perfiles en preparación</h2>
                <p>Pronto vas a poder conocer a quienes integran el estudio.</p>
                <Link className="text-link" href="/contacto">
                  Escribinos <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
