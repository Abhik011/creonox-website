import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getArticle(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_BACKEND_API_URL}/insights/slug/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getRelatedArticles(
  articleId: string
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/insights`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    const insights = await res.json();

    return insights
      .filter(
        (item: any) => item.id !== articleId
      )
      .slice(0, 3);
  } catch {
    return [];
  }
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles =
    await getRelatedArticles(
      article.id
    );

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden py-32">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.05] blur-[180px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-950"
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>

          <div className="mt-12">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              {article.category?.name || "General"}
            </span>

            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
              {article.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              {article.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <span>
                {article.publishedAt
                  ? new Date(
                      article.publishedAt
                    ).toLocaleDateString()
                  : new Date(
                      article.createdAt
                    ).toLocaleDateString()}
              </span>

              <span>•</span>

              <span>
                {article.readTime ||
                  "5 min read"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <img
            src={
              article.coverImage ||
              "/images/blog-placeholder.jpg"
            }
            alt={article.title}
            className="h-[600px] w-full rounded-[40px] border border-slate-100 object-cover"
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="
              prose
              prose-xl
              max-w-none
              prose-headings:text-slate-950
              prose-p:text-slate-600
              prose-p:leading-9
            "
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="pb-40">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-4xl font-semibold tracking-tight text-slate-950">
              Related Insights
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map(
                (item: any) => (
                  <Link
                    key={item.id}
                    href={`/insights/${item.slug}`}
                    className="group block rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                  >
                    <span className="text-sm font-medium text-violet-600">
                      {item.category?.name ||
                        "General"}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-slate-600">
                      {item.excerpt}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-600">
                      Read Article
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}