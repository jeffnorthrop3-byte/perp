"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          BioStack
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link
            href="/get-started"
            className="text-sm bg-accent hover:bg-accent-light text-white px-5 py-2 rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-card-border bg-background px-6 py-4 flex flex-col gap-4">
          <Link href="/about" className="text-sm text-muted hover:text-foreground" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="text-sm text-muted hover:text-foreground" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="/get-started"
            className="text-sm bg-accent text-white px-5 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
