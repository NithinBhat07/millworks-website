"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";

const nav = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/facilities", label: "Facilities & Quality" },
  { href: "/investors", label: "Investor Relations" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Millworks Technologies Limited — home">
          <Image
            src="/brand/logo-dark.png"
            alt="Millworks"
            width={2048}
            height={228}
            priority
            sizes="(min-width: 640px) 120px, 100px"
            className="h-4 w-auto sm:h-5"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-[var(--color-graphite)] transition-colors hover:text-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-graphite)]"
          >
            Business Enquiry
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-[var(--color-border)] p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-2.5 text-base font-medium text-[var(--color-graphite)] hover:bg-[var(--color-paper)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-[var(--color-ink)] px-4 py-2.5 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Business Enquiry
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
