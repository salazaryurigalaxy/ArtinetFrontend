import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-container px-4 pt-10 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-3xl shadow-card sm:grid-cols-2">
        <ContactForm />
        <ContactInformation />
      </div>
    </section>
  );
}
