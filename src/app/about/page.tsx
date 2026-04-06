import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BioStack",
  description: "Learn about BioStack's mission, approach, and origins.",
};

const pillars = [
  {
    title: "Accurate Analysis, Always",
    description:
      "We provide personalized suggestions rather than typical approaches, creating systems designed around your specific bioinformatics and biostatistics challenges.",
  },
  {
    title: "A Modern Approach",
    description:
      "BioStack prioritizes data confidentiality using access controls and encryption to keep your data secure and under your oversight.",
  },
  {
    title: "Data Confidentiality",
    description:
      "We work with you to ensure all necessary privacy steps are covered, from ingestion to delivery.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            We have you covered{" "}
            <span className="highlight">end-to-end.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            BioStack&apos;s analysts enhance biostatistics by streamlining data
            analysis and providing predictive modeling. We leverage proprietary
            algorithms to identify patterns difficult to detect manually.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-card-border bg-card-bg/30">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-card-bg border border-card-border rounded-xl p-8"
              >
                <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etymology */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why &ldquo;BioStack&rdquo;?</h2>
          <p className="text-muted leading-relaxed mb-6">
            The name &ldquo;BioStack&rdquo; references the Apollo missions&apos;
            Biostack experiments, which studied cosmic radiation effects on
            organisms. This reflects our commitment to exploration, precision,
            and boundary-pushing science in modern bioinformatics.
          </p>
          <p className="text-muted leading-relaxed">
            Just as those experiments stacked biological samples to understand
            fundamental processes, we stack data layers to unlock insights for
            today&apos;s most pressing biotech challenges.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-card-border bg-card-bg/30">
        <div className="max-w-[1400px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Get started today!</h2>
          <p className="text-muted mb-8">
            Book a consultation and see how BioStack can accelerate your work.
          </p>
          <Link
            href="/get-started"
            className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full text-sm font-medium transition-colors inline-block"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
