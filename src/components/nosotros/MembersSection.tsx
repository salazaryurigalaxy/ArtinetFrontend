import type { Member } from "@/types/member";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MemberCard } from "./MemberCard";

interface MembersSectionProps {
  members: Member[];
}

export function MembersSection({ members }: MembersSectionProps) {
  return (
    <section className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        title="Miembros de Artinet"
        description="Conoce a los talleres y artesanos que dan vida a cada pieza de nuestra comunidad."
      />

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
