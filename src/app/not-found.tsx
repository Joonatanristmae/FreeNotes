import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        This market or page is not available yet. Explore our active countries or
        return home.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Go home</Button>
        <Button href="/countries" variant="outline">
          View countries
        </Button>
      </div>
      <Link href="/contact" className="mt-6 text-sm text-forest hover:underline">
        Contact FreeNotes
      </Link>
    </section>
  );
}
