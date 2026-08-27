import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/content";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
  description: services.intro,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <Container>
          <SectionHeading
            eyebrow={services.eyebrow}
            heading={services.heading}
            intro={services.intro}
          />
        </Container>
      </section>

      {/* ── Packages ─────────────────────────────────────── */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {services.packages.map((pkg) => (
              <li key={pkg.name} className="flex flex-col bg-bone p-8 sm:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-2xl sm:text-3xl">
                    {pkg.name}
                  </h2>
                  <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-accent">
                    {pkg.price}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {pkg.summary}
                </p>
                <ul className="mt-7 space-y-3 border-t border-line pt-7">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="border-y border-line bg-mist py-24 sm:py-32">
        <Container>
          <SectionHeading heading={services.process.heading} align="center" />
          <ol className="mt-16 grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {services.process.steps.map((step, i) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-sm uppercase tracking-[0.18em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <SectionHeading eyebrow="Questions" heading="Good to know" />
            <dl className="divide-y divide-line border-y border-line">
              {services.faq.map((item) => (
                <div key={item.q} className="py-7">
                  <dt className="font-display text-xl">{item.q}</dt>
                  <dd className="mt-3 text-base leading-relaxed text-muted">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ── Inquire ──────────────────────────────────────── */}
      <section className="border-t border-line pt-24 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading
              eyebrow="Inquire"
              heading="Ready when you are."
              intro="Send a note with the occasion, the date, and anything you already know you want."
              align="center"
            />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  "Styling inquiry",
                )}`}
                className="bg-ink px-10 py-4 text-xs uppercase tracking-[0.18em] text-bone transition-opacity hover:opacity-85"
              >
                Inquire now
              </a>
              <Link
                href="/portfolio"
                className="border border-ink px-10 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-bone"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
