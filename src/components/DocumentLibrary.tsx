"use client";

import { useMemo, useState } from "react";
import type { DocumentCategory } from "@/data/investorDocuments";

export function DocumentLibrary({ categories }: { categories: DocumentCategory[] }) {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => categoryId === "all" || c.id === categoryId)
      .map((c) => ({
        ...c,
        items: q ? c.items.filter((item) => item.toLowerCase().includes(q)) : c.items,
      }))
      .filter((c) => c.items.length > 0);
  }, [categories, query, categoryId]);

  const resultCount = filtered.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documents by title…"
          aria-label="Search investor documents"
          className="w-full rounded-sm border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-mist)] focus:border-[var(--color-accent)]"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          aria-label="Filter by category"
          className="w-full shrink-0 rounded-sm border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-ink)] sm:w-64"
        >
          <option value="all">All categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>
      </div>

      <p className="mt-3 text-xs text-[var(--color-mist)]">
        {resultCount} document{resultCount === 1 ? "" : "s"} listed.
      </p>

      <div className="mt-6 space-y-10">
        {filtered.length === 0 && (
          <p className="rounded-sm border border-dashed border-[var(--color-border)] p-6 text-sm text-[var(--color-steel)]">
            No documents match your search. Try a different term or category.
          </p>
        )}

        {filtered.map((category) => (
          <div key={category.id} id={category.id}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-steel)]">
              {category.title}
              {category.historical && (
                <span className="rounded-sm bg-[var(--color-mist)]/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-steel)]">
                  Historical / Issue-stage
                </span>
              )}
            </h3>
            <ul className="mt-3 divide-y divide-[var(--color-border)] rounded-sm border border-[var(--color-border)] bg-white">
              {category.items.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-[var(--color-graphite)]">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
