import { Flag, TrendingUp } from "lucide-react";
import { InfoCard } from "./InfoCard";
import { ValuesCard } from "./ValuesCard";

const values = [
  "Autenticidad en cada pieza",
  "Comercio justo con los artesanos",
  "Preservación de técnicas tradicionales",
  "Compromiso con la comunidad",
  "Calidad y dedicación artesanal",
];

export function MissionVisionValues() {
  return (
    <section className="mx-auto max-w-container px-4 pt-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard
          icon={Flag}
          title="Misión"
          description="Conectar a los artesanos nicaragüenses con el mundo, ofreciendo una plataforma justa y accesible para mostrar y vender su arte hecho a mano."
        />
        <InfoCard
          icon={TrendingUp}
          title="Visión"
          description="Ser la comunidad digital líder en artesanía nicaragüense, reconocida por impulsar el crecimiento y la visibilidad del arte local a nivel internacional."
        />
        <ValuesCard values={values} />
      </div>
    </section>
  );
}
