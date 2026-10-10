import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { DocumentLibrary } from "@/components/DocumentLibrary";
import { documentCategories } from "@/data/investorDocuments";
import { investorContacts, leadership, sourceInvestorPageUrl } from "@/data/company";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Annual reports, financial statements, notices, corporate governance and investor contacts for Millworks Technologies Limited.",
};

export default function InvestorsPage() {
  const board = leadership.filter((p) => p.group === "Board");
  const kmp = leadership.filter((p) => p.group === "Key Managerial Personnel");

  return (
    <>
      <Section tone="ink" className="!py-16">
        <Eyebrow>Investor Relations</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Millworks Technologies Limited</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Company filings, financial statements, notices and corporate governance documents. This page
          reproduces the public document listing from the company&rsquo;s official investor page; original
          filings remain hosted there.
        </p>
        <a
          href={sourceInvestorPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:bg-white/90"
        >
          View official filings on millworksindia.com ↗
        </a>
      </Section>

      <Section id="documents">
        <Eyebrow>Document Library</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          Search filings by category
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-steel)]">
          Historical offer-document and price-band-advertisement categories are clearly labelled and should be
          read as issue-stage/historical material, not current company information.
        </p>
        <div className="mt-8">
          <DocumentLibrary categories={documentCategories} />
        </div>
      </Section>

      <Section tone="paper" id="governance">
        <Eyebrow>Corporate Governance</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          Board of Directors & Key Managerial Personnel
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">Board of Directors</h3>
            <ul className="mt-4 space-y-3">
              {board.map((p) => (
                <li key={p.name} className="rounded-sm border border-[var(--color-border)] bg-white px-4 py-3">
                  <p className="font-medium text-[var(--color-ink)]">{p.name}</p>
                  <p className="text-sm text-[var(--color-steel)]">{p.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">Key Managerial Personnel</h3>
            <ul className="mt-4 space-y-3">
              {kmp.map((p) => (
                <li key={p.name} className="rounded-sm border border-[var(--color-border)] bg-white px-4 py-3">
                  <p className="font-medium text-[var(--color-ink)]">{p.name}</p>
                  <p className="text-sm text-[var(--color-steel)]">{p.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <Eyebrow>Investor Contact</Eyebrow>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <ContactCard
            title="Company Secretary & Compliance Officer"
            name={investorContacts.companySecretary.name}
            lines={[
              investorContacts.companySecretary.address,
              investorContacts.companySecretary.phone,
              investorContacts.companySecretary.email,
            ]}
          />
          <ContactCard
            title="Chief Financial Officer"
            name={investorContacts.cfo.name}
            lines={[investorContacts.cfo.phone, investorContacts.cfo.email]}
          />
          <ContactCard
            title="Investor Grievance"
            name="Investor Relations"
            lines={[investorContacts.investorRelationsEmail]}
          />
          <ContactCard
            title="Registrar & Transfer Agent"
            name={investorContacts.registrarAndTransferAgent.name}
            lines={[
              investorContacts.registrarAndTransferAgent.address,
              investorContacts.registrarAndTransferAgent.phone,
              investorContacts.registrarAndTransferAgent.email,
              `SEBI Reg. No.: ${investorContacts.registrarAndTransferAgent.sebiRegistrationNo}`,
            ]}
          />
        </div>
        <p className="mt-6 text-xs text-[var(--color-mist)]">
          No stock exchange, trading symbol, ISIN or share-price data is shown on this page. The source investor
          page does not state a listing venue despite describing offer documents, underwriting and market-making
          agreements — this must be confirmed with the company before any market data is published.
        </p>
      </Section>
    </>
  );
}

function ContactCard({ title, name, lines }: { title: string; name: string; lines: string[] }) {
  return (
    <div className="rounded-sm border border-[var(--color-border)] p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">{title}</h3>
      <p className="mt-2 font-medium text-[var(--color-ink)]">{name}</p>
      <ul className="mt-2 space-y-1 text-sm text-[var(--color-steel)]">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
