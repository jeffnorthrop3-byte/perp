import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-lg mb-2">BioStack</h3>
          <p className="text-sm text-muted">
            Differentiated data that 10X-es AI.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/get-started" className="hover:text-foreground transition-colors">
                Get Started
              </Link>
            </li>
            <li>
              <span className="cursor-default">Services</span>
            </li>
            <li>
              <span className="cursor-default">Customer Use Cases</span>
            </li>
            <li>
              <span className="cursor-default">Blog</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Questions?</h4>
          <p className="text-sm text-muted mb-4">
            Reach out and we&apos;ll arrange a free consultation.
          </p>
          <Link
            href="/get-started"
            className="text-sm bg-accent hover:bg-accent-light text-white px-5 py-2 rounded-full transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="border-t border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-muted">
          <p>BioStack Platforms, Inc. 2026 &mdash; All rights reserved</p>
          <a
            href="https://x.com/getbiostack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors mt-2 md:mt-0"
          >
            @getbiostack
          </a>
        </div>
      </div>
    </footer>
  );
}
