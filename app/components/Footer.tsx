export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AI Tools Hub
        </h2>


        <p className="text-slate-400 mt-4">
          Discover the best AI tools for your future.
        </p>


        <div className="flex justify-center gap-6 mt-6">

          <span className="hover:text-cyan-400 transition cursor-pointer">
            AI Tools
          </span>

          <span className="hover:text-purple-400 transition cursor-pointer">
            About
          </span>

          <span className="hover:text-cyan-400 transition cursor-pointer">
            Contact
          </span>

        </div>


        <p className="text-slate-500 mt-8 text-sm">
          © 2026 AI Tools Hub. All rights reserved.
        </p>


      </div>

    </footer>
  );
}