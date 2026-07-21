export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          About AI Tools Hub
        </h1>

        <p className="mt-8 text-lg text-center text-gray-600 dark:text-slate-400">
          AI Tools Hub is a modern directory that helps users discover the best
          AI tools for writing, coding, image generation, video editing,
          productivity, design, and much more.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-6">
            <h2 className="text-2xl font-bold">🚀 Mission</h2>
            <p className="mt-4 text-gray-600 dark:text-slate-400">
              Help everyone find the right AI tool quickly and easily.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h2 className="text-2xl font-bold">🌍 Vision</h2>
            <p className="mt-4 text-gray-600 dark:text-slate-400">
              Become one of the world's best AI tools directories.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h2 className="text-2xl font-bold">💡 Why Us?</h2>
            <p className="mt-4 text-gray-600 dark:text-slate-400">
              Clean design, verified tools, categories, favorites, and powerful
              search.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}