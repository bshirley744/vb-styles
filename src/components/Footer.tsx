import Link from "next/link";
import { nav, site } from "@/content";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-sand">
      <Container className="py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-muted">{site.location}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              {site.instagram.handle}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-muted transition-colors hover:text-ink"
            >
              {site.email}
            </a>
            {site.phone && (
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="text-muted transition-colors hover:text-ink"
              >
                {site.phone}
              </a>
            )}
          </div>
        </div>

        <p className="mt-14 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
