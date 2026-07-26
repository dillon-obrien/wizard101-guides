import type { Metadata } from "next";
import { FaqEnhancer } from "@/components/FaqEnhancer";
import { Inline } from "@/components/Inline";
import { faqs } from "@/content/faq";
import { slugify } from "@/lib/text";

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

export const metadata: Metadata = {
  title: "FAQ — quick answers to the big questions",
  description:
    "Is Wizard101 free? Best school? Max level? Fastest gold? Quick, honest answers with links to the deep dives.",
};

export default function FaqPage() {
  const categories = [...new Set(faqs.map((f) => f.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.map(stripMarkdown).join(" "),
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="font-display text-4xl font-bold text-slate-900">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-lg text-slate-600">
        The questions every wizard asks, answered fast — each one links to the
        full guide when you want depth.
      </p>
      <div className="mt-6">
        <FaqEnhancer />
      </div>

      <div className="mt-10 space-y-12">
        {categories.map((cat) => (
          <section key={cat} aria-label={cat}>
            <h2 className="mb-4 font-display text-xl font-bold text-slate-900">{cat}</h2>
            <div className="space-y-3">
              {faqs
                .filter((f) => f.category === cat)
                .map((f) => {
                  const id = slugify(f.q);
                  return (
                    <details
                      key={id}
                      id={id}
                      className="faq-item group rounded-xl border border-slate-200 bg-white target:border-indigo-400"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span
                          aria-hidden
                          className="shrink-0 text-indigo-600 transition-transform group-open:rotate-45"
                        >
                          ＋
                        </span>
                      </summary>
                      <div className="space-y-3 border-t border-slate-200 p-4 text-[0.95rem] leading-relaxed text-slate-600">
                        {f.a.map((p, i) => (
                          <p key={i}>
                            <Inline text={p} />
                          </p>
                        ))}
                      </div>
                    </details>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
