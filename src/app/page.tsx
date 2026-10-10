import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { company, machines, metrologyEquipment } from "@/data/company";
import { industries } from "@/data/industries";
import { capabilities } from "@/data/capabilities";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-ink)] text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Eyebrow>Precision Manufacturing · Bengaluru, India</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            State-of-the-art manufacturing for Aerospace, Railways and Semiconductor industries
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            {company.legalName} is an AS9100D-certified precision manufacturer producing machined components,
            sheet-metal parts, sub-assemblies and assemblies across {company.plantCount} manufacturing units in
            {" "}{company.city}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-accent-dark)] hover:text-white"
            >
              Start a Business Enquiry
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Proof strip — verified facts only */}
      <Section tone="paper" className="!py-10">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <ProofStat value={`${company.founded}`} label="Founded" />
          <ProofStat value={`${company.plantCount}`} label="Manufacturing Units" />
          <ProofStat value={`${company.totalFloorAreaSqFt.toLocaleString("en-IN")} sq ft`} label="Manufacturing Footprint" />
          <ProofStat value="AS9100D" label="Certified Quality System" />
        </dl>
      </Section>

      {/* Industries */}
      <Section>
        <Eyebrow>Industries Served</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          Built for mission-critical sectors
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-sm border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent)]"
            >
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">{industry.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{industry.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="paper">
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          End-to-end precision manufacturing
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap.slug} className="rounded-sm border border-[var(--color-border)] bg-white p-5">
              <h3 className="font-semibold text-[var(--color-ink)]">{cap.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{cap.description}</p>
            </div>
          ))}
        </div>
        <Link href="/capabilities" className="mt-8 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline">
          View all capabilities →
        </Link>
      </Section>

      {/* Quality & Metrology */}
      <Section>
        <Eyebrow>Engineering & Quality</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          Measured, inspected, verified
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">Machinery</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-graphite)]">
              {machines.slice(0, 6).map((m) => (
                <li key={m} className="border-b border-[var(--color-border)] pb-2">{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">Metrology & Inspection</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-graphite)]">
              {metrologyEquipment.map((m) => (
                <li key={m} className="border-b border-[var(--color-border)] pb-2">{m}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/facilities" className="mt-8 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline">
          View facilities & quality systems →
        </Link>
      </Section>

      {/* Investor Relations feature */}
      <Section tone="ink">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Eyebrow>Investor Relations</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Annual reports, notices, governance and disclosures
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              A structured, searchable archive of company filings, financial statements and corporate
              governance documents.
            </p>
          </div>
          <Link
            href="/investors"
            className="inline-flex shrink-0 items-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:bg-white/90"
          >
            Go to Investor Relations
          </Link>
        </div>
      </Section>

      {/* Enquiry CTA */}
      <Section>
        <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-paper)] p-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
            Discuss your manufacturing programme
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-steel)]">
            Tell us about your component, assembly or sourcing requirement and our engineering team will respond.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-graphite)]"
          >
            Make a Business Enquiry
          </Link>
        </div>
      </Section>
    </>
  );
}

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="tabular text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">{value}</dd>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-steel)]">{label}</p>
    </div>
  );
}
