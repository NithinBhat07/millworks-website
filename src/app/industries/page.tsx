import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { industries, otherProductCategories } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries served by Millworks Technologies Limited: aerospace, railways and semiconductor.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section tone="ink" className="!py-16">
        <Eyebrow>Industries</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Sectors we serve</h1>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-sm border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <h2 className="text-lg font-semibold text-[var(--color-ink)]">{industry.name}</h2>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{industry.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-[var(--color-border)] bg-[var(--color-paper)] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">
            Other product categories
          </h2>
          <p className="mt-2 text-sm text-[var(--color-graphite)]">
            Also referenced on the company&rsquo;s public site, without a dedicated industry page:{" "}
            {otherProductCategories.join(", ")}.
          </p>
        </div>
      </Section>
    </>
  );
}
