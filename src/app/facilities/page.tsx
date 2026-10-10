import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { company, facilities, machines, metrologyEquipment } from "@/data/company";

export const metadata: Metadata = {
  title: "Facilities & Quality",
  description: "Manufacturing units, machinery, metrology and quality certifications at Millworks Technologies Limited.",
};

export default function FacilitiesPage() {
  return (
    <>
      <Section tone="ink" className="!py-16">
        <Eyebrow>Facilities & Quality</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          {company.plantCount} manufacturing units, {company.totalFloorAreaSqFt.toLocaleString("en-IN")} sq ft
        </h1>
      </Section>

      <Section>
        <Eyebrow>Manufacturing Footprint</Eyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {facilities.map((f) => (
            <div key={f.id} className="rounded-sm border border-[var(--color-border)] p-5">
              <h2 className="font-semibold text-[var(--color-ink)]">{f.label}</h2>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{f.address}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--color-mist)]">
          The source site states all four units are located in Peenya Industrial Area, while Unit 4&rsquo;s
          address places it in Nelamangala — a separate industrial area. This discrepancy has not been resolved
          and should be confirmed by the company before republication.
        </p>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <Eyebrow>Machinery</Eyebrow>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-graphite)]">
              {machines.map((m) => (
                <li key={m} className="border-b border-[var(--color-border)] pb-2">{m}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--color-mist)]">
              The source facility page states 52 CNC machines in total across these categories; a verified
              per-machine-type breakdown has not been published and should be confirmed before quoting the
              figure elsewhere.
            </p>
          </div>
          <div>
            <Eyebrow>Metrology & Inspection</Eyebrow>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-graphite)]">
              {metrologyEquipment.map((m) => (
                <li key={m} className="border-b border-[var(--color-border)] pb-2">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Quality Systems & Certifications</Eyebrow>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {company.certifications.map((c) => (
            <div key={c.name} className="rounded-sm border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-ink)]">{c.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{c.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--color-mist)]">
          The source site states these certifications are held by &ldquo;all three of its units,&rdquo; which
          does not reconcile with the four manufacturing units described elsewhere. Exact certificate scope,
          covered unit(s), certifying body and validity dates require confirmation before any certification mark
          or scope statement is published.
        </p>
      </Section>
    </>
  );
}
