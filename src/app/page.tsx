import Image from "next/image";
import Link from "next/link";
import { home, portfolio, site } from "@/content";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[78vh] items-end sm:min-h-[86vh]">
        <Image
          src={home.hero.image.src}
          alt={home.hero.image.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Two scrims: one anchors the type to the left, one lifts it off the floor. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        <Container className="relative pb-16 sm:pb-24">
          <p className="eyebrow text-bone/85">{home.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-light text-balance text-bone sm:text-6xl md:text-7xl">
            {home.hero.heading}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-bone/85">
            {home.hero.sub}
          </p>
          <Link
            href={home.hero.cta.href}
            className="mt-10 inline-block border border-bone px-8 py-3.5 text-xs uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-ink"
          >
            {home.hero.cta.label}
          </Link>
        </Container>
      </section>

      {/* ── Intro / about ────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative aspect-4/5 overflow-hidden bg-sand md:order-last">
              <Image
                src={home.intro.portrait.src}
                alt={home.intro.portrait.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow={home.intro.eyebrow}
                heading={home.intro.heading}
              />
              <div className="mt-8 space-y-5">
                {home.intro.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Category teasers ─────────────────────────────── */}
      <section className="border-y border-line bg-mist py-24 sm:py-32">
        <Container>
          <SectionHeading heading={home.categoriesHeading} align="center" />
          <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/portfolio#${category.slug}`} className="group">
                  <div className="relative aspect-3/4 overflow-hidden bg-bone">
                    <Image
                      src={category.images[0].src}
                      alt={category.images[0].alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl transition-colors group-hover:text-accent">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {category.blurb}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Testimonial ──────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="font-display text-2xl leading-snug font-light text-balance italic sm:text-3xl md:text-4xl">
              &ldquo;{home.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-xs uppercase tracking-[0.18em] text-muted">
              {home.testimonial.attribution}
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ── Inquire ──────────────────────────────────────── */}
      <section id="inquire" className="border-t border-line pt-24 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <SectionHeading
              eyebrow="Inquire"
              heading={home.cta.heading}
              intro={home.cta.body}
              align="center"
            />
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                "Styling inquiry",
              )}`}
              className="mt-10 inline-block bg-ink px-10 py-4 text-xs uppercase tracking-[0.18em] text-bone transition-opacity hover:opacity-85"
            >
              {home.cta.label}
            </a>
            <p className="mt-6 text-sm text-muted">
              or find me on{" "}
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4"
              >
                Instagram
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
