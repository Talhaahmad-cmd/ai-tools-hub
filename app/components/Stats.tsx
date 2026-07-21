export default function Stats() {
  const stats = [
    { number: "12+", label: "AI Tools" },
    { number: "4.9★", label: "Average Rating" },
    { number: "10K+", label: "Monthly Visitors" },
  ];

  return (
    <section className="py-16 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-700 p-8"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              {stat.number}
            </h2>

            <p className="mt-3 text-slate-300 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}