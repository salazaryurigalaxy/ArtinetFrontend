import Image from "next/image";

const ADDRESS_QUERY = encodeURIComponent(
  "Sector El Arenal, Iglesia Magdalena, Masaya, Nicaragua"
);

export function VisitUs() {
  return (
    <section className="mx-auto max-w-container px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-brand-mint-light px-6 py-10 sm:px-10">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">Visítanos</h2>

        <div className="mt-8 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/logo/artinet-logo.png"
              alt="ARTINET — Hecho en Masaya, hecho con el alma"
              width={220}
              height={220}
              className="h-auto w-40 sm:w-52"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-card">
            {/*
              Free Google Maps embed — no API key required. If richer
              interactivity (custom markers, styling) is needed later,
              swap this iframe for the Google Maps JS API using
              NEXT_PUBLIC_MAPS_API_KEY from the environment; never
              hardcode a key here.
            */}
            <iframe
              title="Ubicación de Artinet en Masaya, Nicaragua"
              src={`https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
