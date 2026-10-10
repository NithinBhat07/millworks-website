import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { company, facilities } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-paper)]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/brand/logo-dark.png" alt="Millworks" width={2048} height={228} className="h-7 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-[var(--color-steel)]">
            {company.legalName} — precision manufacturing for aerospace, railways and semiconductor industries,
            based in {company.city}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-steel)]">
            <li><Link href="/about" className="hover:text-[var(--color-accent)]">About Us</Link></li>
            <li><Link href="/industries" className="hover:text-[var(--color-accent)]">Industries</Link></li>
            <li><Link href="/capabilities" className="hover:text-[var(--color-accent)]">Capabilities</Link></li>
            <li><Link href="/facilities" className="hover:text-[var(--color-accent)]">Facilities & Quality</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">Investor Relations</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-steel)]">
            <li><Link href="/investors" className="hover:text-[var(--color-accent)]">Investor Overview</Link></li>
            <li><Link href="/investors#documents" className="hover:text-[var(--color-accent)]">Document Library</Link></li>
            <li><Link href="/investors#governance" className="hover:text-[var(--color-accent)]">Corporate Governance</Link></li>
            <li><Link href="/investors#contact" className="hover:text-[var(--color-accent)]">Investor Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-ink)]">Registered Office</h3>
          <p className="mt-3 text-sm text-[var(--color-steel)]">{facilities[0].address}</p>
          <p className="mt-3 text-sm text-[var(--color-steel)]">
            <a href={`mailto:${company.email}`} className="hover:text-[var(--color-accent)]">{company.email}</a>
          </p>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-[var(--color-border)] py-6 text-xs text-[var(--color-mist)] sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 {company.legalName}. All rights reserved.</p>
        <p>
          Company, facility, leadership and investor-document details on this site are reproduced from{" "}
          <a href="https://millworksindia.com/" className="underline hover:text-[var(--color-accent)]">
            millworksindia.com
          </a>{" "}
          and have not been independently re-verified beyond the public record. Figures and claims are subject
          to company confirmation.
        </p>
      </Container>
    </footer>
  );
}
