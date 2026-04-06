import Link from "next/link";

const offerings = [
  { title: "Build RL envs for post-training", icon: "🧬" },
  { title: "Get high quality ML-ready datasets", icon: "📊" },
  { title: "Annotate novel / public data", icon: "🏷️" },
  { title: "Access multi-agent reasoning infra", icon: "🤖" },
];

const backers = ["Afore Capital", "Y Combinator", "Heroic Ventures", "Verdict"];

const useCases = [
  {
    segment: "Biotech Startups",
    description:
      "Use custom data to fine-tune and deploy the best industry-wide AI models. Better data = Better models.",
  },
  {
    segment: "Universities",
    description:
      "Get your research groups up to speed with the best datasets curated from around the world. Find model ready datasets and deploy in <24 hours.",
  },
  {
    segment: "Big Pharma",
    description:
      "Save up to 8X in data acquisition costs and push drug candidates forward by state of the art ADMET / Tox data generated in continuous cycles.",
  },
  {
    segment: "AI Tech Companies",
    description:
      "Enhance the performance of bio-focused AI models by leveraging domain-specific datasets and craft data-rich reward functions for your RL tasks.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understanding the problem",
    description:
      "We produce a one-page document clarifying your challenges, goals, and constraints.",
  },
  {
    step: "02",
    title: "Aligning competencies",
    description:
      "We select a team lead based on expertise and timeline to guide your project.",
  },
  {
    step: "03",
    title: "Solution and feedback",
    description:
      "We interface with you to discuss solutions, address pitfalls, and iterate until it's right.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Differentiated data that{" "}
              <span className="highlight">10X-es AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
              Get novel pre-clinical and medical datasets, perform causal
              inference, and generate data points for pre / post training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="border border-card-border hover:border-muted text-foreground px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Offering cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-card-bg border border-card-border rounded-xl p-5 text-center hover:border-accent/50 transition-colors"
              >
                <div className="text-2xl mb-2">{o.icon}</div>
                <p className="text-sm font-medium">{o.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backed by */}
      <section className="border-y border-card-border bg-card-bg/50">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <p className="text-center text-sm text-muted mb-6 uppercase tracking-wider">
            Backed by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {backers.map((b) => (
              <span
                key={b}
                className="text-lg md:text-xl font-semibold text-muted/60"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Who we serve
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          From early-stage startups to global pharma, our platform adapts to
          your data needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.segment}
              className="bg-card-bg border border-card-border rounded-xl p-8 hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{uc.segment}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-card-border bg-card-bg/30">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our process
          </h2>
          <p className="text-muted text-center mb-12 max-w-xl mx-auto">
            One platform: analyse, annotate, customise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center md:text-left">
                <div className="text-accent font-mono text-sm mb-2">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted text-sm">
              Have questions?{" "}
              <Link href="/contact" className="text-accent hover:underline">
                Check out our FAQ page!
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need datasets for modeling, validation, or discovery &mdash; and
            tired of hunting for them across 100 places?
          </h2>
          <p className="text-muted text-lg mb-4">
            We supply the highest quality data across domains.
          </p>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            From proteomics to perturbation screens, we help you source,
            structure, and produce the high-quality data your team needs to move
            fast.
          </p>
          <h3 className="text-2xl font-bold mb-8">
            <span className="animate-draw-underline">
              Never doubt your data again
            </span>
          </h3>
          <Link
            href="/get-started"
            className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full text-sm font-medium transition-colors inline-block"
          >
            Get a free consultation today!
          </Link>
        </div>
      </section>
    </div>
  );
}
