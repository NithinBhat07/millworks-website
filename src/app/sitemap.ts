import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";

const base = "https://millworks-website.vercel.app";
const lastModified = new Date("2026-10-10");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/industries",
    "/capabilities",
    "/facilities",
    "/investors",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...industryRoutes];
}
