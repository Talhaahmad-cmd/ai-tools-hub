import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-extrabold text-cyan-500">404</h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 dark:text-slate-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-400 transition"
          >
            Go Home
          </Link>

          <Link
            href="/tools"
            className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
          >
            Browse AI Tools
          </Link>
        </div>
      </div>
    </main>
  );
}