import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { ContactSection } from "@/components/contactanos/ContactSection";
import { VisitUs } from "@/components/contactanos/VisitUs";

export const metadata: Metadata = {
  title: "Contáctanos — Artinet",
  description:
    "Escríbenos, consulta nuestra información de contacto o visítanos en Masaya, Nicaragua.",
};

export default function ContactanosPage() {
  return (
    <>
      <PageBanner title="Contáctanos" />
      <ContactSection />
      <VisitUs />
    </>
  );
}
