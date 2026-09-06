interface PageBannerProps {
  title: string;
}

/**
 * Shared page title banner: light-green rounded panel with a centered
 * heading and decorative organic shapes in the corners. Used by every
 * secondary page (Nosotros, Contactanos, and future screens) so the
 * visual language stays identical across the site.
 */
export function PageBanner({ title }: PageBannerProps) {
  return (
    <section className="mx-auto max-w-container px-4 pt-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-brand-mint px-6 py-16 sm:py-20">
        <span
          className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/40"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/40"
          aria-hidden="true"
        />
        <h1 className="relative text-center text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}
