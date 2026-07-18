export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Tools Hub
      </h1>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="/">Home</a>
        <a href="/tools">Tools</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}