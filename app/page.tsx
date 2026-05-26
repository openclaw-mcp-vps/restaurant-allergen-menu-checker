export default function Home() {
  const faqs = [
    {
      q: "Which allergens does it check for?",
      a: "All 14 major EU allergens plus the FDA's Big 9, including gluten, nuts, dairy, shellfish, soy, and more."
    },
    {
      q: "Can it scan both PDFs and live websites?",
      a: "Yes. Upload a menu PDF or paste a URL and our AI will extract text, identify dishes, and flag any missing or incomplete allergen disclosures."
    },
    {
      q: "Is the $17/mo plan a one-time fee or recurring?",
      a: "It is a monthly subscription. Cancel any time from your billing portal with no penalties."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Allergen Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Verify Restaurant Menus for{" "}
          <span className="text-[#58a6ff]">Allergen Compliance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload a menu PDF or paste a website URL. Our AI scans every dish, flags missing allergen warnings, and suggests legally compliant descriptions — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $17 / month
        </a>
        <p className="text-xs text-[#8b949e] mt-3">No contracts. Cancel anytime.</p>
      </section>

      {/* Feature pills */}
      <section className="flex flex-wrap justify-center gap-3 mb-20">
        {["PDF & URL scanning", "14 EU + FDA Big 9 allergens", "AI-suggested rewrites", "Compliance reports", "Instant results"].map((f) => (
          <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">
            {f}
          </span>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu scans",
              "PDF upload & URL scanning",
              "AI-powered allergen detection",
              "Compliant description suggestions",
              "Downloadable compliance reports",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} AllergenCheck. All rights reserved.
      </footer>
    </main>
  );
}
