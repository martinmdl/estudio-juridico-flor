import Link from "next/link";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/config/faq";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function HomePage() {
  return (
    <main id="contenido">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionEyebrow>Estudio jurídico</SectionEyebrow>
            <h1 id="hero-title">Claridad para avanzar.<br /><em>Cercanía para decidir.</em></h1>
            <p className="hero-description">
              Asesoramiento jurídico con una mirada humana, comunicación directa
              y atención dedicada a cada consulta.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#estudio">Conocé el estudio <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/#areas">Explorar áreas <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-frame">
              <div className="art-disc" />
              <div className="art-column" />
              <div className="art-caption">Estudio jurídico<br />Martinez</div>
              <span className="art-number">01</span>
            </div>
            <span className="art-note">EST. EN ARGENTINA</span>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>Asesoramiento con propósito</span>
          <span className="hero-line" aria-hidden="true" />
          <span>Personas primero</span>
        </div>
      </section>

      <section className="intro section" id="estudio" aria-labelledby="intro-title">
        <div className="container intro-grid">
          <div>
            <SectionEyebrow>El estudio</SectionEyebrow>
            <h2 id="intro-title">Lo legal, explicado con <em>claridad.</em></h2>
          </div>
          <div className="intro-copy">
            <p>
              Creemos que una buena orientación empieza por escuchar. Trabajamos
              para que cada persona entienda sus opciones y pueda tomar decisiones
              con información y confianza.
            </p>
            <p className="content-note">Texto institucional preliminar: revisar con el estudio antes de publicar.</p>
            <Link className="text-link" href="/#equipo">Conocé al equipo <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="areas section" id="areas" aria-labelledby="areas-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionEyebrow>Cómo podemos acompañarte</SectionEyebrow>
              <h2 id="areas-title">Áreas de <em>práctica</em></h2>
            </div>
            <p>Una atención enfocada en comprender cada situación y explicar los próximos pasos.</p>
          </div>
          <div className="area-grid">
            {siteConfig.practiceAreas.map((area, index) => (
              <article className="area-card" key={area.title}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <Link href="/contacto" aria-label={`Consultar sobre ${area.title}`}>Consultar <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team section" id="equipo" aria-labelledby="team-title">
        <div className="container team-grid">
          <div className="team-visual" aria-hidden="true">
            <div className="team-visual-inner">
              <span className="team-initials">M<span>+</span></span>
              <span className="team-label">ESTUDIO<br />JURÍDICO</span>
            </div>
          </div>
          <div className="team-copy">
            <SectionEyebrow>Quiénes somos</SectionEyebrow>
            <h2 id="team-title">Un equipo presente en cada <em>paso.</em></h2>
            {siteConfig.professionals.length > 0 ? (
              <div className="professional-list">
                {siteConfig.professionals.map((person) => (
                  <article className="professional" key={person.name}>
                    <h3>{person.name}</h3>
                    <p className="professional-role">{person.role}</p>
                    <p>{person.bio}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p>Los perfiles profesionales y sus antecedentes se publicarán una vez confirmados por sus titulares.</p>
            )}
            <Link className="text-link" href="/contacto">Contactar al estudio <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="faq section" id="preguntas-frecuentes" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div>
            <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
            <h2 id="faq-title">Respuestas para empezar con <em>claridad.</em></h2>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="faq-aside">
            <p className="eyebrow">Tu consulta</p>
            <h3>¿Tenés otra pregunta?</h3>
            <p>Contanos lo esencial de tu situación y cómo podemos contactarte.</p>
            <Link className="text-link" href="/contacto">Escribinos <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </section>

      <section className="contact section" aria-labelledby="contact-title">
        <div className="container contact-panel">
          <div>
            <SectionEyebrow>Contacto</SectionEyebrow>
            <h2 id="contact-title">¿Querés conversar<br />sobre tu situación?</h2>
            <p>Escribinos para coordinar una primera conversación.</p>
          </div>
          <div className="contact-action">
            <Link className="button button-light" href="/contacto">Ir a contacto <span aria-hidden="true">↗</span></Link>
            <a className="contact-home-email" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
            {siteConfig.location ? <p className="contact-detail">{siteConfig.location}</p> : null}
          </div>
          <span className="contact-watermark" aria-hidden="true">M</span>
        </div>
      </section>
    </main>
  );
}
