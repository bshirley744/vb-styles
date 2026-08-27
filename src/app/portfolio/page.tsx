import type { Metadata } from "next";
import Link from "next/link";
import { portfolio, site } from "@/content";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: `Portfolio — ${site.name}`,
  description: portfolio.intro,
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <Container>
          <SectionHeading
            eyebrow={portfolio.eyebrow}
            heading={portfolio.heading}
            intro={portfolio.intro}
          />

          {/* Jump links — the categories double as the page's table of contents. */}
          <nav
            aria-label="Portfolio categories"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {portfolio.categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {portfolio.categories.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`py-20 sm:py-24 ${
            index % 2 === 1 ? "border-y border-line bg-mist" : ""
          }`}
        >
          <Container>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight font-light sm:text-4xl">
                {category.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {category.blurb}
              </p>
            </div>

            <div className="mt-12">
              <PortfolioGrid images={category.images} priority={index === 0} />
            </div>

            {category.quote && (
              <figure className="mx-auto mt-16 max-w-2xl text-center">
                <blockquote className="font-display text-xl leading-snug font-light text-balance italic sm:text-2xl">
                  &ldquo;{category.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-muted">
                  {category.quote.attribution}
                </figcaption>
              </figure>
            )}
          </Container>
        </section>
      ))}

      <section className="pt-20 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading
              eyebrow="Inquire"
              heading="See something that fits?"
              intro="Tell me about the occasion and the timeline, and I'll come back with a plan."
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
                href="/services"
                className="border border-ink px-10 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-bone"
              >
                View services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
