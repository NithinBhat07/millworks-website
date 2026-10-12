import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { industries } from "@/data/industries";
import { industryArt } from "@/components/IndustryArt";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.summary };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();
  const Art = industryArt[industry.slug];

  return (
    <>
      <Section tone="ink" className="!py-16">
        <nav className="text-sm text-white/60">
          <Link href="/industries" className="hover:text-white">Industries</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{industry.name}</span>
        </nav>
        <Eyebrow>Industry</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{industry.name}</h1>
        <p className="mt-4 max-w-2xl text-white/70">{industry.summary}</p>
      </Section>

      {Art && (
        <div className="h-48 w-full sm:h-64">
          <Art />
        </div>
      )}

      <Section>
        <p className="max-w-2xl text-[var(--color-graphite)]">{industry.detail}</p>

        {industry.applications.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">
              Approved application areas
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {industry.applications.map((a) => (
                <li key={a} className="rounded-sm border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-graphite)]">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12">
          <Link href="/contact" className="inline-flex items-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-graphite)]">
            Discuss {/^[aeiou]/i.test(industry.name) ? "an" : "a"} {industry.name.toLowerCase()} requirement
          </Link>
        </div>
      </Section>
    </>
  );
}
