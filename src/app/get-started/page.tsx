"use client";

import { useState, type FormEvent } from "react";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
          Get started
        </h1>
        <p className="text-muted text-center mb-10">
          Reach out to us and we will arrange a free consultation.
        </p>

        {submitted ? (
          <div className="bg-card-bg border border-card-border rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
            <p className="text-muted">
              We&apos;ll be in touch shortly to schedule your consultation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="First name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1"
                >
                  Last Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full bg-card-bg border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Last name"
                />
              </div>
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
                placeholder="Tell us about your project and data needs..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-accent hover:bg-accent-light text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
