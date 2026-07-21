export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          Contact Us
        </h1>

        <p className="text-center mt-6 text-gray-600 dark:text-slate-400">
          We'd love to hear from you. Send us your questions, feedback, or AI tool suggestions.
        </p>

        <form className="mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border p-4 bg-transparent"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border p-4 bg-transparent"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full rounded-xl border p-4 bg-transparent"
          />

          <button
            type="submit"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}