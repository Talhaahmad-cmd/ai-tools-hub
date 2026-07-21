export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>

        <p className="mt-6 text-white text-lg">
          Loading AI Tools...
        </p>
      </div>
    </main>
  );
}