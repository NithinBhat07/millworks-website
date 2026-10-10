import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { company, facilities, investorContacts } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Business and investor contact details for Millworks Technologies Limited.",
};

export default function ContactPage() {
  return (
    <>
      <Section tone="ink" className="!py-16">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Get in touch</h1>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Business Enquiry</h2>
            <p className="mt-2 text-sm text-[var(--color-steel)]">
              For manufacturing, sourcing or partnership enquiries.
            </p>
            <div className="mt-6">
              <ContactForm enquiryType="business" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink)]">Investor Enquiry</h2>
            <p className="mt-2 text-sm text-[var(--color-steel)]">
              For shareholder, analyst or investor-relations queries. For formal grievances, contact the Company
              Secretary & Compliance Officer directly (details below).
            </p>
            <div className="mt-6">
              <ContactForm enquiryType="investor" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Eyebrow>Locations</Eyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {facilities.map((f) => (
            <div key={f.id} className="rounded-sm border border-[var(--color-border)] bg-white p-5">
              <h3 className="font-semibold text-[var(--color-ink)]">{f.label}</h3>
              <p className="mt-2 text-sm text-[var(--color-steel)]">{f.address}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Direct Contacts</Eyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border border-[var(--color-border)] p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">General</h3>
            <p className="mt-2 text-sm">
              <a href={`mailto:${company.email}`} className="text-[var(--color-accent)] hover:underline">
                {company.email}
              </a>
            </p>
          </div>
          <div className="rounded-sm border border-[var(--color-border)] p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">
              Company Secretary & Compliance Officer
            </h3>
            <p className="mt-2 text-sm text-[var(--color-graphite)]">{investorContacts.companySecretary.name}</p>
            <p className="mt-1 text-sm">
              <a href={`tel:${investorContacts.companySecretary.phone.replace(/\s/g, "")}`} className="text-[var(--color-accent)] hover:underline">
                {investorContacts.companySecretary.phone}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={`mailto:${investorContacts.companySecretary.email}`} className="text-[var(--color-accent)] hover:underline">
                {investorContacts.companySecretary.email}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
