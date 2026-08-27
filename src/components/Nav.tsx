"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content";
import Container from "./Container";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bone/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="font-display text-xl tracking-wide sm:text-2xl"
          >
            {site.name}
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-10 sm:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-accent ${
                  pathname === item.href ? "text-accent" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.18em] transition-colors hover:text-accent"
            >
              Instagram
            </a>
            <a
              href={`mailto:${site.email}`}
              className="border border-ink px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-bone"
            >
              Inquire
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 p-2 sm:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
              {open ? (
                <g stroke="currentColor" strokeWidth="1.25">
                  <line x1="3" y1="1" x2="19" y2="13" />
                  <line x1="19" y1="1" x2="3" y2="13" />
                </g>
              ) : (
                <g stroke="currentColor" strokeWidth="1.25">
                  <line x1="0" y1="1" x2="22" y2="1" />
                  <line x1="0" y1="7" x2="22" y2="7" />
                  <line x1="0" y1="13" x2="22" y2="13" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bone sm:hidden"
        >
          <Container>
            <nav className="flex flex-col gap-1 py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 font-display text-2xl"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 font-display text-2xl"
              >
                Instagram
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 border border-ink px-5 py-3 text-center text-xs uppercase tracking-[0.18em]"
              >
                Inquire
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
