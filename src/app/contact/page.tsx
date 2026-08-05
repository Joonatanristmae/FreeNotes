import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FreeNotes for advertising packages, partnership opportunities, and media kits.",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Request advertising information"
            subtitle="Tell us about your company and campaign goals. Our team will follow up with package options and timelines."
          />
          <div className="mt-10 space-y-4 border-t border-ink/10 pt-8 text-sm text-muted">
            <p>
              <span className="font-medium text-ink">Email</span>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-forest transition-colors hover:text-forest-light"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="font-medium text-ink">Audience</span>
              <br />
              Advertisers and marketing managers
            </p>
            <p>
              <span className="font-medium text-ink">Response time</span>
              <br />
              Typically within 1–2 business days
            </p>
          </div>
        </div>

        <div className="border border-ink/8 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
