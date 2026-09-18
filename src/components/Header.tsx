"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { DoctolibCTA } from "./DoctolibCTA";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-line-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <Logo />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-sm tracking-wide transition-colors",
                isActive(item.href)
                  ? "text-accent-dark"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
              <span
                className={clsx(
                  "absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300",
                  isActive(item.href) ? "w-full" : "w-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <DoctolibCTA size="sm">Prendre rendez-vous</DoctolibCTA>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={clsx(
              "block h-px w-6 bg-ink transition-all duration-300",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={clsx(
              "block h-px w-6 bg-ink transition-all duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={clsx(
              "block h-px w-6 bg-ink transition-all duration-300",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-background transition-all duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav
          aria-label="Navigation mobile"
          className="flex flex-col items-center gap-8"
        >
          {NAV.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "font-display text-3xl transition-colors",
                isActive(item.href) ? "text-accent-dark" : "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <DoctolibCTA size="lg">Prendre rendez-vous</DoctolibCTA>
      </div>
    </header>
  );
}
