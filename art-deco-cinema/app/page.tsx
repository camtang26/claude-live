import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] cinema-grade letterbox">
      <div className="floating-bg" />
      <section className="relative h-[56.5svh] sm:h-[60svh] md:h-[68svh] lg:h-[72svh] xl:h-[76svh] overflow-hidden spotlight">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="Art Deco cinematic backdrop"
            fill
            priority
            className="object-cover scale-105 will-change-transform [animation:kenburns_28s_ease-in-out_infinite]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="deco-border pattern-fan px-8 py-10 sm:px-12 sm:py-14 bg-black/20 backdrop-blur-[2px] max-w-[90vw]">
            <h1 className="font-serif text-gold text-center text-3xl sm:text-4xl md:text-5xl tracking-[0.08em] typewriter">
              Maison Lumière
            </h1>
            <p className="mt-4 text-center text-[0.95rem] sm:text-base text-cream/90 max-w-prose">
              A luxury house of modern cinema and timeless Art Deco craft.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 text-center text-cream/80 text-xs uppercase tracking-[0.3em]">
          Enter the picture
        </div>
      </section>

      <section className="relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-gold tracking-[0.05em]">The House Philosophy</h2>
            <p className="mt-4 text-[0.95rem] text-warm-gray/90 max-w-prose">
              Symmetry, proportion, and the poetry of shadow. Our design language
              is a dialogue between the grand theaters of the 1920s and the
              measured cadence of contemporary cinema.
            </p>
          </div>
          <div className="deco-border pattern-chevron min-h-[220px] sm:min-h-[280px] md:min-h-[320px] bg-cream/60" />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative aspect-[1.618/1] deco-border overflow-hidden group">
              <Image
                src={`/stills/still-${(i % 3) + 1}.jpg`}
                alt={`Film still ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover brightness-[0.92] contrast-[0.95] sepia-[0.04] saturate-[0.9] group-hover:brightness-100 transition duration-[1200ms] ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 cinematic-transition" />
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 px-6 sm:px-10 md:px-14 py-12">
        <div className="deco-border px-6 py-8 bg-cream/70">
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="font-serif text-gold tracking-[0.08em]">Maison</div>
              <div className="text-sm text-warm-gray/90">Lumière Studios</div>
            </div>
            <div className="text-sm text-warm-gray/80">
              © {new Date().getFullYear()} Maison Lumière. All Rights Reserved.
            </div>
            <div className="text-sm text-warm-gray/80 text-right">Paris · New York</div>
          </div>
        </div>
      </footer>


    </div>
  );
}
