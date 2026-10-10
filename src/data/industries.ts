export type Industry = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  applications: string[];
};

export const industries: Industry[] = [
  {
    slug: "aerospace",
    name: "Aerospace",
    summary:
      "Precision-machined components for aero engine, aero structure, and engine blade applications.",
    detail:
      "Millworks manufactures precision machined components, sub-assemblies, and assemblies for the aerospace sector under its AS9100D-certified quality system. Capability spans aero engine parts, aero structure parts, and engine blade components.",
    applications: ["Aero engine parts", "Aero structure parts", "Engine blade components"],
  },
  {
    slug: "railways",
    name: "Railways",
    summary: "Machined components for rail transport, including train door parts and braking systems.",
    detail:
      "Millworks supplies precision machined and fabricated components for rail transport applications, including parts used in train door mechanisms and braking systems.",
    applications: ["Train door parts", "Braking system components"],
  },
  {
    slug: "semiconductor",
    name: "Semiconductor",
    summary: "Precision machining support for semiconductor industry equipment.",
    detail:
      "Millworks serves semiconductor-sector customers with precision machined components manufactured to tight tolerances under its established quality and metrology processes.",
    applications: [],
  },
];

// Listed on the source site's homepage alongside the three primary industries, without a dedicated
// industry page. Kept as a capability/product note rather than a full industry page until confirmed.
export const otherProductCategories = [
  "Automation machinery components",
  "Turbocharger parts",
  "Actuators",
  "Couplers",
];
