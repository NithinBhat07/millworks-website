import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { capabilities } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Precision machining, fabrication, assembly and sourcing capabilities at Millworks Technologies Limited.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <Section tone="ink" className="!py-16">
        <Eyebrow>Capabilities</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Precision manufacturing capabilities</h1>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div key={cap.slug} className="rounded-sm border border-[var(--color-border)] p-6">
              <h2 className="text-lg font-semibold text-[var(--color-ink)]">{cap.name}</h2>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{cap.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/contact" className="inline-flex items-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-graphite)]">
            Discuss a manufacturing requirement
          </Link>
        </div>
      </Section>
    </>
  );
}
