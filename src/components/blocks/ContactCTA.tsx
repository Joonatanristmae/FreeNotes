import Image from "next/image";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  const mailto = `mailto:${siteConfig.email}`;

  return (
    <section className="relative overflow-hidden border-t border-ink/8 bg-forest">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to reach students?
          </h2>
          <p className="mt-8 text-sm text-sand/60 sm:text-base">Contact us:</p>
          <a
            href={mailto}
            className="mt-2 inline-block text-xl font-medium tracking-tight text-white transition-colors hover:text-sand sm:text-2xl"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-lg lg:mx-0 lg:max-w-none">
          <Image
            src="/vihku-ut-avakaan-Photoroom.png"
            alt="University of Tartu FreeNotes notebook cover"
            fill
            unoptimized
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
