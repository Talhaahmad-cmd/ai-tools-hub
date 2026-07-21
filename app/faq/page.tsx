const faqs = [
  {
    question: "What is AI Tools Hub?",
    answer:
      "AI Tools Hub is a directory that helps you discover the best AI tools for writing, coding, design, productivity, and more.",
  },
  {
    question: "Are the AI tools free?",
    answer:
      "Some tools are completely free, while others offer free plans with optional paid upgrades.",
  },
  {
    question: "How do I save favorite tools?",
    answer:
      "Click the heart icon on any tool. Your favorites will be saved and shown on the Favorites page.",
  },
  {
    question: "How often are new tools added?",
    answer:
      "We regularly update the directory with new and trending AI tools.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border p-6"
            >
              <h2 className="text-2xl font-semibold">
                {faq.question}
              </h2>

              <p className="mt-4 text-gray-600 dark:text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}