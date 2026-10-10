// Category and title listing reproduced from https://millworksindia.com/investors/ (verified 2026-10-10).
// This site does not host copies of the underlying PDFs — original filings remain on the
// official investor page. No fabricated file links are created here.

export type DocumentCategory = {
  id: string;
  title: string;
  items: string[];
  historical?: boolean;
};

export const documentCategories: DocumentCategory[] = [
  {
    id: "offer-documents",
    title: "Offer Documents",
    historical: true,
    items: ["Draft Red Herring Prospectus (DRHP)", "Red Herring Prospectus (RHP) — dated 07.07.2026", "Abridged Prospectus", "Prospectus", "General Information Document (GID)"],
  },
  {
    id: "advertisement",
    title: "Advertisement",
    historical: true,
    items: ["Newspaper Advertisement"],
  },
  {
    id: "price-bands",
    title: "Price Band Advertisements",
    historical: true,
    items: [
      "Financial Express — Ahmedabad, Bengaluru, Chandigarh, Chennai, Hyderabad, Kochi, Mumbai, Kolkata, Delhi, Pune editions (08-07-2026)",
      "Jansatta — Chandigarh, Delhi, Kolkata, Lucknow editions (08-07-2026)",
      "Kolaravani (08-07-2026)",
    ],
  },
  {
    id: "annual-reports",
    title: "Annual Reports",
    items: ["FY 2021-22", "FY 2022-23", "FY 2023-24", "FY 2024-25", "FY 2025-26"],
  },
  {
    id: "annual-returns",
    title: "Annual Returns",
    items: ["FY 2021-22", "FY 2022-23", "FY 2023-24", "FY 2024-25"],
  },
  {
    id: "general-meeting",
    title: "General Meeting",
    items: ["Proceedings of AGM", "Scrutinizer Report"],
  },
  {
    id: "notices",
    title: "Notices",
    items: ["AGM Notice (5th AGM)"],
  },
  {
    id: "financial-statements",
    title: "Financial Statements",
    items: [
      "Auditor's Report FY 2021-22",
      "Auditor's Report FY 2022-23",
      "Auditor's Report FY 2023-24",
      "Auditor's Report FY 2024-25",
      "Restated Financial Statement (March 2026)",
    ],
  },
  {
    id: "policies",
    title: "Corporate Governance Policies",
    items: [
      "CSR Policy",
      "Archival Policy",
      "Code for Independent Directors",
      "Code for Directors & Senior Management",
      "Familiarization Programme",
      "Nomination & Remuneration Policy",
      "Insider Trading Policy",
      "Related Party Transactions Policy",
      "Whistle Blower Policy",
      "Risk Management Policy",
      "Materiality Policy",
      "Dividend Policy",
    ],
  },
  {
    id: "material-documents",
    title: "Material Documents",
    items: [
      "Memorandum of Association (MOA)",
      "Articles of Association (AOA)",
      "Certificate of Incorporation — Private Limited",
      "Certificate of Incorporation — Public Limited",
      "Board & Shareholder Resolutions",
      "DRHP and RHP Resolutions",
      "Examination Report",
    ],
  },
  {
    id: "material-contracts",
    title: "Material Contracts",
    items: [
      "Issue Agreement",
      "Registrar Agreement",
      "Escrow Agreement",
      "Tripartite Agreements (CDSL, NSDL)",
      "Market Making Agreement",
      "Underwriting Agreement",
      "Syndicate Agreement",
      "Sub-Syndicate Agreement",
      "Monitoring Agency Agreement",
    ],
  },
];
