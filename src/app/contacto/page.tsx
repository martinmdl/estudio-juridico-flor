import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/config/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Escribí a Martinez - Estudio Juridico para acercar tu consulta y coordinar una conversación.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main id="contenido">
      <PageIntro
        eyebrow="Contacto"
        title="Conversemos sobre tu consulta."
        description="Contanos brevemente el motivo de tu mensaje. Si hay un plazo urgente, incluí la fecha."
      />
      <section className="section page-section" aria-labelledby="contacto-email">
        <div className="container contact-page-grid">
          <div>
            <p className="eyebrow">Escribinos</p>
            <h2 id="contacto-email">Estamos para escucharte.</h2>
            <p>
              El correo abre tu aplicación de email. Incluí en tu mensaje cómo preferís que el estudio se comunique con vos.
            </p>
          </div>
          <div className="contact-card">
            <h3>Correo electrónico</h3>
            <a className="contact-email" href={"mailto:" + siteConfig.email}>
              {siteConfig.email}
            </a>
            <a className="button button-primary" href={"mailto:" + siteConfig.email}>
              Enviar un email <span aria-hidden="true">↗</span>
            </a>
            {siteConfig.phone ? (
              <p>Teléfono: <a href={"tel:" + siteConfig.phone}>{siteConfig.phone}</a></p>
            ) : null}
            {siteConfig.location ? <p>{siteConfig.location}</p> : null}
            <p className="content-note">
              Evitá incluir datos sensibles o documentos en el primer mensaje.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
