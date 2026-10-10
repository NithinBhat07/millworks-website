import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { company, values, mission, leadership } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company overview, leadership and values of Millworks Technologies Limited.",
};

const groups = ["Board", "Key Managerial Personnel", "Senior Management", "Leadership Team"] as const;

export default function AboutPage() {
  return (
    <>
      <Section tone="ink" className="!py-16">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{company.legalName}</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Founded in {company.founded} and based in {company.city}, Millworks is an AS9100D-certified precision
          manufacturer producing machined components, sheet-metal parts, sub-assemblies and assemblies for
          aerospace, railways and semiconductor customers.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-3 text-lg text-[var(--color-graphite)]">{mission}</p>
          </div>
          <div>
            <Eyebrow>Values</Eyebrow>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-[var(--color-graphite)] sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="rounded-sm border border-[var(--color-border)] px-3 py-2 text-sm">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Eyebrow>Leadership & Governance</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Our people</h2>
        <div className="mt-10 space-y-10">
          {groups.map((group) => {
            const people = leadership.filter((p) => p.group === group);
            if (people.length === 0) return null;
            return (
              <div key={group}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">{group}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {people.map((p) => (
                    <div key={p.name} className="rounded-sm border border-[var(--color-border)] bg-white p-4">
                      <p className="font-semibold text-[var(--color-ink)]">{p.name}</p>
                      <p className="mt-1 text-sm text-[var(--color-steel)]">{p.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-xs text-[var(--color-mist)]">
          Names and designations reproduced from the company&rsquo;s public About Us and Investors pages as of
          2026-10-10. Director Identification Numbers were observed to be inconsistent between two tables on the
          source site and require confirmation from the Company Secretary before republication elsewhere.
        </p>
      </Section>
    </>
  );
}
