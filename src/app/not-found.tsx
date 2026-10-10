import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="!py-32 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)]">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-[var(--color-steel)]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="inline-flex items-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-graphite)]">
          Go to homepage
        </Link>
        <Link href="/investors" className="inline-flex items-center rounded-sm border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-accent)]">
          Investor Relations
        </Link>
      </div>
    </Section>
  );
}
