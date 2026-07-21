import tools from "../../data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "../../components/FavoriteButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/tools"
          className="text-cyan-400 hover:underline"
        >
          ← Back to Tools
        </Link>

        <div className="flex items-center justify-between mt-6">
          <h1 className="text-5xl font-bold">
            {tool.name}
          </h1>

          <FavoriteButton toolId={tool.id} />
        </div>

        <p className="text-slate-300 mt-6 text-lg">
          {tool.description}
        </p>

        <p className="mt-4 text-cyan-400">
          Category: {tool.category}
        </p>

        <p className="mt-2 text-yellow-400">
          ⭐ {tool.rating}
        </p>

        <div className="mt-10">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
          >
            Visit {tool.name}
          </a>
        </div>
      </div>
    </main>
  );
}