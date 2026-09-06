import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { AboutSection } from "@/components/nosotros/AboutSection";
import { MissionVisionValues } from "@/components/nosotros/MissionVisionValues";
import { MembersSection } from "@/components/nosotros/MembersSection";
import { mockMembers } from "@/mocks/members";

export const metadata: Metadata = {
  title: "Nosotros — Artinet",
  description:
    "Conoce la misión, visión y valores de Artinet, y a los artesanos nicaragüenses que forman nuestra comunidad.",
};

export default function NosotrosPage() {
  // TODO: Conectar EndPoint
  const members = mockMembers;

  return (
    <>
      <PageBanner title="Sobre Nosotros" />
      <AboutSection />
      <MissionVisionValues />
      <MembersSection members={members} />
    </>
  );
}
