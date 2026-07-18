export default function Hero() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
          🚀 AI Tools Directory
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-8">
          Discover the Best AI Tools
        </h1>

        <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
          Search hundreds of AI tools for writing, coding, image generation,
          video editing, marketing, productivity, and more.
        </p>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search AI tools..."
            className="w-full max-w-xl rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 text-white outline-none focus:border-cyan-500"
          />
        </div>

      </div>
    </section>
  );
}