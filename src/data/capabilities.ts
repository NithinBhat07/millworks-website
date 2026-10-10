export type Capability = {
  slug: string;
  name: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    slug: "cnc-turning",
    name: "CNC Turning",
    description: "Precision turned components produced on CNC turning centers.",
  },
  {
    slug: "turn-milling",
    name: "Turn-Milling",
    description: "Combined turning and milling operations for complex geometries in a single setup.",
  },
  {
    slug: "milling",
    name: "Vertical & Horizontal Milling",
    description: "3rd, 4th, and 5th axis vertical milling plus horizontal milling for complex machined parts.",
  },
  {
    slug: "sheet-metal",
    name: "Sheet Metal Fabrication",
    description: "CNC bending and press operations (160-ton and 50-ton presses) for sheet metal parts.",
  },
  {
    slug: "wire-edm-laser",
    name: "Wire EDM & Laser Processing",
    description: "Wire EDM and fiber laser processing for precision cutting and forming.",
  },
  {
    slug: "assemblies",
    name: "Sub-Assemblies & Assemblies",
    description: "Build of sub-assemblies and assemblies from machined and sourced components.",
  },
  {
    slug: "global-sourcing",
    name: "Global Supply Chain & Sourcing",
    description:
      "A dedicated Global Supply Chain Wing sources forgings, die castings, sheet metal, and fasteners alongside machined parts for overseas customers — supplying components individually, as assemblies, or as a full bill-of-materials package.",
  },
];
