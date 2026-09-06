interface ComingSoonProps {
  title: string;
}

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-container flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-navy/70">
        Esta sección se implementará próximamente. La ruta ya está lista para conectarse a su
        diseño y a los datos del backend.
      </p>
    </section>
  );
}
