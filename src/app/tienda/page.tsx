import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Tienda — Artinet",
};

// The Store is intentionally left unimplemented for now (built last, per
// project instructions). Route exists so the Navbar works end-to-end.
export default function TiendaPage() {
  return <ComingSoon title="Tienda" />;
}
