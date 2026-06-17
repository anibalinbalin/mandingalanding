"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function ContactForm() {
  const [msg, setMsg] = useState("");

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    const form = ev.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement)?.value.trim();

    if (!nombre || !email || !mensaje) {
      ev.preventDefault();
      setMsg("Completá nombre, email y mensaje.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      ev.preventDefault();
      setMsg("Revisá el email.");
      return;
    }
    setMsg("");
  }

  return (
    <form
      action="https://formsubmit.co/info@mandinga.info"
      method="POST"
      noValidate
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="Nuevo contacto desde mandinga.info" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://mandinga.info/#contacto" />

      <div className="field">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="tu@email.com" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="empresa">Empresa</label>
        <input type="text" id="empresa" name="empresa" placeholder="Tu empresa" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" placeholder="Contanos sobre tu proyecto" />
      </div>
      <button type="submit" className="btn">Enviar</button>
      <div className="form-msg" aria-live="polite">{msg}</div>
    </form>
  );
}
