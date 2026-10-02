"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  endpoint: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ endpoint }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint || status === "sending") return;

    const form = event.currentTarget;
    setStatus("sending");

    try {
      const body = new URLSearchParams();
      const fields = new FormData(form);
      fields.forEach((value, key) => {
        if (typeof value === "string") body.append(key, value);
      });

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("No se pudo enviar la consulta");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" name="contacto" method="POST" action={endpoint || undefined} data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contacto" />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="bot-field">Dejá este campo vacío</label>
        <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Nombre y apellido</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Correo electrónico</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-area">Tema de la consulta</label>
        <select id="contact-area" name="area" defaultValue="" required>
          <option value="" disabled>Seleccioná una opción</option>
          <option value="Divorcios">Divorcios</option>
          <option value="Sucesiones">Sucesiones</option>
          <option value="Derecho laboral">Derecho laboral</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Trámites">Trámites</option>
          <option value="Otra consulta">Otra consulta</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Tu mensaje</label>
        <textarea id="contact-message" name="message" rows={6} minLength={10} maxLength={3000} required placeholder="Contanos brevemente cómo podemos ayudarte." />
      </div>
      <p className="content-note">Evitá incluir datos sensibles o documentos en este primer mensaje.</p>
      <button className="button button-primary" type="submit" disabled={!endpoint || status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
        {status !== "sending" ? <span aria-hidden="true">↗</span> : null}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {!endpoint
          ? "El formulario estará disponible cuando se configure el servicio de envío."
          : status === "success"
            ? "Tu consulta se envió. Gracias por escribirnos."
            : status === "error"
              ? "No pudimos enviar el mensaje. Intentá de nuevo o escribinos por correo."
              : ""}
      </p>
    </form>
  );
}
