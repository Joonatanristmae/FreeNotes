"use client";

import { useState } from "react";
import { countries } from "@/data/countries";
import { Button } from "@/components/ui/Button";

const campaignSizes = [
  "Small (under 10,000 notebooks)",
  "Medium (10,000–30,000 notebooks)",
  "Large (30,000+ notebooks)",
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest/20 bg-sand/50 p-8 text-center sm:p-12">
        <h3 className="font-display text-2xl text-ink">Thank you</h3>
        <p className="mt-3 text-muted">
          We received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name" name="company" required />
        <Field label="Name" name="name" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-medium text-ink">
            Country
          </label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country.slug} value={country.slug}>
                {country.name}
                {!country.active ? " (coming soon)" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="campaignSize" className="mb-2 block text-sm font-medium text-ink">
          Estimated campaign size
        </label>
        <select
          id="campaignSize"
          name="campaignSize"
          required
          defaultValue=""
          className="w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
        >
          <option value="" disabled>
            Select campaign size
          </option>
          {campaignSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
          placeholder="Tell us about your campaign goals..."
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Contact FreeNotes
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
      />
    </div>
  );
}
