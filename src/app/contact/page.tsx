"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        {/* Left column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Contact us.
          </h1>
          <p className="text-muted mb-2">
            Email us at{" "}
            <a
              href="mailto:team@getbiostack.com"
              className="text-accent hover:underline"
            >
              team@getbiostack.com
            </a>
          </p>
          <p className="text-muted">
            Follow us on{" "}
            <a
              href="https://x.com/getbiostack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              X (@getbiostack)
            </a>
          </p>
        </div>

        {/* Right column — Form */}
        <div>
          {submitted ? (
            <div className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p className="text-muted">
                We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-accent hover:bg-accent-light text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
