// Source: https://millworksindia.com/ — verified from the live public site on 2026-10-10.
// Figures with known inconsistencies on the source site are flagged in comments, not silently resolved.

export const company = {
  legalName: "Millworks Technologies Limited",
  shortName: "Millworks",
  tagline: "Machining your Concept",
  founded: 2021,
  city: "Bengaluru, India",
  email: "madhu@millworksindia.com",
  totalFloorAreaSqFt: 40000,
  plantCount: 4,
  // Source site states certifications are held by "all three of its units" while
  // separately describing four plants. Discrepancy — not resolved here, flagged for client verification.
  certifications: [
    {
      name: "AS9100D",
      description: "Aerospace quality management system standard (based on ISO 9001 with aerospace-specific requirements).",
    },
    {
      name: "ISO 9001:2015",
      description: "Quality management systems.",
    },
    {
      name: "ISO 14001",
      description: "Environmental management systems.",
    },
    {
      name: "ISO 18001",
      description:
        "Listed on the source site as \"ISO 18001.\" This designation is unusual — the commonly referenced occupational health & safety standard is OHSAS 18001 (now superseded by ISO 45001). Scope, certifying body, and certificate validity require verification before this is restated publicly.",
    },
  ],
} as const;

export const values = [
  "Commitment to Quality",
  "Customer Centric",
  "Engineering Excellence",
  "On Time Delivery",
  "Business Ethics",
] as const;

export const mission =
  "To be among the top 10 precision manufacturing suppliers in India.";

export type Facility = {
  id: string;
  label: string;
  isRegisteredOffice?: boolean;
  address: string;
};

export const facilities: Facility[] = [
  {
    id: "unit-1",
    label: "Registered Office & Unit 1",
    isRegisteredOffice: true,
    address:
      "458/1, 10th A Cross, 4th Phase, Peenya Industrial Area, Near Brundavan Bus Stop, Bangalore 560058",
  },
  {
    id: "unit-2",
    label: "Unit 2",
    address: "B165, Peenya Industrial Area Phase IV, Peenya, Bengaluru, Karnataka 560058",
  },
  {
    id: "unit-3",
    label: "Unit 3",
    address:
      "270/2, 3rd Main Road, Peenya Industrial Area Stage 4, Bengaluru, Bengaluru Urban, Karnataka 560058",
  },
  {
    id: "unit-4",
    label: "Unit 4",
    address:
      "No. 77/1, Binnamangala, Arisinakunte Village, NH 48, next to Paragon Factory, Vijaya Vittala Nagar, Nelamangala, Bengaluru Rural, Karnataka 562123",
  },
];

export const machines = [
  "5th Axis Vertical Milling Machine",
  "4th Axis Vertical Milling Machine",
  "3rd Axis Vertical Milling Machine",
  "Horizontal Milling Machine",
  "CNC Turning Center",
  "CNC Turn-Mill",
  "Wire EDM",
  "Fiber Laser Machine",
  "CNC Bending Machine",
  "160-ton Press",
  "50-ton Press",
];

export const metrologyEquipment = [
  "Carl Zeiss Coordinate Measuring Machine (CMM)",
  "Profile Projector",
  "Video Measuring System",
  "Roughness Tester",
  "2D & 3D Height Gauges",
];

export type LeadershipPerson = {
  name: string;
  title: string;
  group: "Board" | "Key Managerial Personnel" | "Senior Management" | "Leadership Team";
};

export const leadership: LeadershipPerson[] = [
  { name: "Sridhar Acharya", title: "Managing Director", group: "Board" },
  { name: "Madhu H K", title: "Whole-Time Director", group: "Board" },
  { name: "Rashmi Acharya", title: "Non-Executive Director", group: "Board" },
  { name: "Soumya Madhu", title: "Whole-Time Director", group: "Board" },
  { name: "Ashwath Narayana H M", title: "Chief Financial Officer", group: "Key Managerial Personnel" },
  { name: "Srivathsan K N", title: "Company Secretary & Compliance Officer", group: "Key Managerial Personnel" },
  { name: "Ram H H", title: "Head of Business Development", group: "Senior Management" },
  { name: "Satish P V N", title: "Head of Quality Management", group: "Senior Management" },
  { name: "Anantha Subramanya", title: "General Manager", group: "Leadership Team" },
  { name: "Kaushik Prashanth", title: "Unit-4 Plant Head", group: "Leadership Team" },
  { name: "Gururaj", title: "Business Advisor", group: "Leadership Team" },
  { name: "Kiran U", title: "Manager, Production Planning & Control", group: "Leadership Team" },
];

export const investorContacts = {
  companySecretary: {
    name: "Mr. Srivathsan K N",
    title: "Company Secretary & Compliance Officer",
    address: facilities[0].address,
    phone: "+91 91870 45959",
    email: "cs@millworksindia.com",
  },
  cfo: {
    name: "Mr. Ashwath Narayana H M",
    title: "Chief Financial Officer",
    phone: "+91 91870 45858",
    email: "cfo@millworksindia.com",
  },
  investorRelationsEmail: "Investor.Relations@millworksindia.com",
  registrarAndTransferAgent: {
    name: "Purva Sharegistry (India) Pvt. Ltd",
    address: "Unit no. 9, Shiv Shakti Industrial Estate, J. R. Boricha Marg, Lower Parel (E), Mumbai 400 011",
    phone: "+91 22 4961 4132",
    email: "newissue@purvashare.com",
    website: "https://www.purvashare.com",
    contactPerson: "Ms. Deepali Dhuri",
    sebiRegistrationNo: "INR000001112",
  },
};

export const sourceInvestorPageUrl = "https://millworksindia.com/investors/";
