import tools from "../data/tools";

const categories = [
  "All",
  "Writing",
  "Coding",
  "Images",
  "Video",
  "Design",
  "Productivity",
];

export default function Features() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Popular AI Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-2xl bg-slate-800 p-6 hover:-translate-y-2 hover:bg-slate-700 transition duration-300"
            >
              <div className="text-5xl">{tool.logo}</div>

              <h3 className="mt-4 text-2xl font-bold">
                {tool.name}
              </h3>

              <p className="text-cyan-400">
                ⭐ {tool.rating}
              </p>

              <span className="inline-block mt-3 rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                {tool.category}
              </span>

              <p className="mt-4 text-slate-300">
                {tool.description}
              </p>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-cyan-500 py-3 text-center font-semibold hover:bg-cyan-600 transition"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}