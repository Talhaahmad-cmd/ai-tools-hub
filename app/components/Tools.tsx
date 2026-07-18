export default function Tools() {
const tools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    emoji: "🤖",
    price: "Free",
    rating: "★★★★★",
    trending: true,
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    emoji: "🎨",
    price: "Paid",
    rating: "★★★★★",
    trending: true,
  },
  {
    name: "GitHub Copilot",
    category: "Code Assistant",
    emoji: "💻",
    price: "Paid",
    rating: "★★★★☆",
    trending: false,
  },
  {
    name: "Runway",
    category: "Video AI",
    emoji: "🎬",
    price: "Free",
    rating: "★★★★★",
    trending: true,
  },
  {
    name: "Perplexity",
    category: "AI Search",
    emoji: "🔍",
    price: "Free",
    rating: "★★★★☆",
    trending: false,
  },
  {
    name: "ElevenLabs",
    category: "AI Voice",
    emoji: "🎤",
    price: "Free",
    rating: "★★★★★",
    trending: false,
  },
];
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Popular AI Tools
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Discover the most popular AI tools used by creators and developers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{tool.emoji}</div>
{tool.trending && (
  <span className="inline-block mb-3 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">
    🔥 Trending
  </span>
)}
              <h3 className="text-2xl font-semibold">{tool.name}</h3>

              <p className="text-slate-400 mt-2">{tool.category}</p>

              <div className="mt-3 text-yellow-400">
                {tool.rating}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    tool.price === "Free"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {tool.price}
                </span>

                <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl transition">
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}