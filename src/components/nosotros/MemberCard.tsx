import Image from "next/image";
import type { Member } from "@/types/member";

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-brand-mint">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 bg-brand-dark px-4 py-4 text-white">
        <p className="text-sm font-semibold">{member.name}</p>
        {member.description && <p className="text-xs text-white/75">{member.description}</p>}
      </div>
    </article>
  );
}
