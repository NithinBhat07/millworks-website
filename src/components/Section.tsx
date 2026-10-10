import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "paper" | "ink";
  id?: string;
}) {
  const bg =
    tone === "paper" ? "bg-[var(--color-paper)]" : tone === "ink" ? "bg-[var(--color-ink)] text-white" : "bg-white";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">{children}</p>
  );
}
