import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
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
  // Netlify habilita Forms al desplegar; otros hosts requieren un endpoint compatible.
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
    ?? (process.env.NETLIFY === "true" ? "/" : "");

  return (
    <>
    <main id="contenido">
      <PageIntro
        eyebrow="Contacto"
        title="Conversemos sobre tu consulta."
        description="Contanos brevemente el motivo de tu mensaje. Si hay un plazo urgente, incluí la fecha."
      />
      <section className="section page-section" aria-labelledby="contacto-title">
        <div className="container contact-page-grid">
          <div className="contact-side">
            <p className="eyebrow">Escribinos</p>
            <h2 id="contacto-title">Estamos para <em>escucharte.</em></h2>
            <p>Completá el formulario y el estudio recibirá tu consulta cuando esté configurado el servicio de envío.</p>
            <div className="contact-direct">
              <h3>También podés escribirnos por email</h3>
              <a className="contact-email" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
              {siteConfig.phone ? <p>Teléfono: <a href={"tel:" + siteConfig.phone}>{siteConfig.phone}</a></p> : null}
              {siteConfig.location ? <p>{siteConfig.location}</p> : null}
            </div>
          </div>
          <div className="contact-card">
            <h3>Envianos tu consulta</h3>
            <ContactForm endpoint={endpoint} />
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
