"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { sendContactMessage } from "@/services/contact.service";
import type { ContactFormData, ContactFormErrors } from "@/types/contact";

const EMPTY_FORM: ContactFormData = { name: "", email: "", phone: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\s()-]{7,20}$/;

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) errors.name = "El nombre completo es obligatorio.";
  if (!data.email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }
  if (!data.phone.trim()) {
    errors.phone = "El teléfono es obligatorio.";
  } else if (!PHONE_PATTERN.test(data.phone.trim())) {
    errors.phone = "Ingresa un número de teléfono válido.";
  }
  if (!data.message.trim()) errors.message = "El mensaje es obligatorio.";

  return errors;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: Conectar EndPoint
      await sendContactMessage(formData);
      setStatus("success");
      setFormData(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex h-full flex-col justify-center rounded-3xl bg-brand-dark px-6 py-10 text-white sm:px-10">
      <h2 className="text-3xl font-bold">Hola,</h2>
      <p className="mt-1 text-white/85">Envíanos un mensaje</p>

      <form className="mt-8 space-y-6" noValidate onSubmit={handleSubmit}>
        <Field
          id="contact-name"
          label="Nombre completo"
          value={formData.name}
          onChange={(value) => handleChange("name", value)}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="contact-email"
          label="Correo electrónico"
          type="email"
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="contact-phone"
          label="Teléfono"
          type="tel"
          value={formData.phone}
          onChange={(value) => handleChange("phone", value)}
          error={errors.phone}
          autoComplete="tel"
        />
        <TextAreaField
          id="contact-message"
          label="Mensaje"
          value={formData.message}
          onChange={(value) => handleChange("message", value)}
          error={errors.message}
        />

        <Button type="submit" variant="primary" className="w-full justify-center" disabled={status === "submitting"}>
          {status === "submitting" ? "Enviando..." : "Enviar"}
        </Button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="text-brand-light">¡Gracias! Tu mensaje fue registrado.</span>
          )}
          {status === "error" && (
            <span className="text-accent-pink">
              Ocurrió un problema al enviar tu mensaje. Inténtalo de nuevo.
            </span>
          )}
        </p>
      </form>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}

function Field({ id, label, value, onChange, error, type = "text", autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg border border-white/30 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 focus:border-brand-light focus:outline-none focus:ring-1 focus:ring-brand-light"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-accent-pink">
          {error}
        </p>
      )}
    </div>
  );
}

function TextAreaField({ id, label, value, onChange, error }: Omit<FieldProps, "type" | "autoComplete">) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full resize-none rounded-lg border border-white/30 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 focus:border-brand-light focus:outline-none focus:ring-1 focus:ring-brand-light"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-accent-pink">
          {error}
        </p>
      )}
    </div>
  );
}
