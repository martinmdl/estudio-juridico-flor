import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
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
      <section className="section page-section" aria-labelledby="contacto-title">
        <div className="container contact-page-grid">
          <div className="contact-side">
            <p className="eyebrow">Escribinos</p>
            <h1 id="contacto-title">Estamos para <em>escucharte.</em></h1>
            <p>Contanos brevemente el motivo de tu mensaje. Si hay un plazo urgente, incluí la fecha.</p>
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
