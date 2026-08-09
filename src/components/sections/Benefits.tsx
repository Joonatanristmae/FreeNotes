import { SectionTitle } from "@/components/ui/SectionTitle";
import { benefits } from "@/data/site";

export function Benefits() {
  return (
    <section className="border-y border-ink/8 bg-sand/50 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Why advertise with FreeNotes"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className="border-t-2 border-forest bg-paper p-6"
            >
              <p className="font-display text-4xl text-forest/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-xl tracking-tight text-ink">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
