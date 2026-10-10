# Millworks Technologies Limited — Website

A premium corporate website for Millworks Technologies Limited, built with Next.js (App Router), TypeScript,
and Tailwind CSS.

## What this is

This is a working starter rebuild of https://millworksindia.com/ covering the public-facing pages (Home,
About, Industries, Capabilities, Facilities & Quality, Investor Relations, Contact), built from content
verified directly against the live site on 2026-10-10. It is **not** the full agency engagement described in
`millworks_premium_website_master_system_prompt.md` — that scope requires company-side access (legal/company
secretary sign-off, original source files, brand assets, photography, certification documents, exchange/listing
confirmation) that isn't available in this environment.

## Known open items (do not treat as resolved)

- **Certification scope conflict:** the source site states certifications (AS9100D, ISO 9001:2015, ISO 14001,
  "ISO 18001") are held by "all three of its units" while separately describing four manufacturing plants.
- **"ISO 18001"** is not a standard ISO designation Claude could resolve — the commonly referenced standard is
  OHSAS 18001 (superseded by ISO 45001). Needs confirmation from the company.
- **Unit 4 address** is in Nelamangala, while the source site's narrative text describes all four units as
  being in Peenya Industrial Area.
- **Director Identification Number** for Sridhar Acharya appears as two different values (05341880 vs
  05341180) in two different tables on the source investors page.
- **No stock exchange, ticker, ISIN or listing venue** is stated on the source site despite offer documents,
  underwriting and market-making agreements being listed — not fabricated here, needs company confirmation.
- Investor document **titles/categories** are reproduced as text; this project does not host copies of the
  underlying PDFs. The investor page links out to the official site for original filings.

## Contact form

`src/app/api/contact/route.ts` validates submissions server-side and sends mail via the
[Resend](https://resend.com) API when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set as environment variables
(see `.env.example`). Without those set, the API returns a clear error instead of pretending to deliver the
enquiry — no enquiry is silently dropped.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed via Vercel. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `INVESTOR_TO_EMAIL`, and `CONTACT_FROM_EMAIL` as
Vercel project environment variables to enable real enquiry delivery.
