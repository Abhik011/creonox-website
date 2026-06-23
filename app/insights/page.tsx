import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Newsletter from "@/components/sections/newsletter";
export const metadata: Metadata = {
    title: "Insights | Creonox",
    description:
        "Research, product thinking, AI, operations and the future of industry software.",
};

async function getInsights() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/insights`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!res.ok) {
        return [];
    }

    const data = await res.json();

    return data.filter(
        (article: any) =>
            article.status === "published"
    );
}

async function getCategories() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export default async function InsightsPage() {
    const [articles, categories] =
        await Promise.all([
            getInsights(),
            getCategories(),
        ]);

    const featuredArticle = articles?.[0];

    return (
        <main className="relative overflow-hidden bg-white">
            {/* Background */}
            <div
                className="
          absolute
          left-1/2
          top-0
          h-[1000px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.05]
          blur-[180px]
        "
            />

            {/* Hero */}
            <section className="relative py-32 md:py-40">
                <div className="mx-auto max-w-7xl px-6">
                    <p
                        className="
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-violet-600
            "
                    >
                        Insights
                    </p>

                    <h1
                        className="
              mt-8
              max-w-6xl
              text-5xl
              font-semibold
              tracking-[-0.06em]
              text-slate-950
              md:text-8xl
            "
                    >
                        Thoughts on AI,
                        <br />

                        <span
                            className="
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
                        >
                            operations and industry software.
                        </span>
                    </h1>

                    <p
                        className="
              mt-10
              max-w-3xl
              text-lg
              md:text-xl
              leading-8
              text-slate-600
            "
                    >
                        Research, product thinking,
                        industry trends and the future
                        of operational intelligence.
                    </p>
                </div>
            </section>

            {/* Featured */}
            {featuredArticle && (
                <section className="pb-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <Link
                            href={`/insights/${featuredArticle.slug}`}
                        >
                            <div
                                className="
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-slate-100
                  bg-white
                  
                "
                            >
                                <div className="relative h-[400px] overflow-hidden">
                                    {featuredArticle.coverImage && (
                                        <img
                                            src={
                                                featuredArticle.coverImage
                                            }
                                            alt={
                                                featuredArticle.title
                                            }
                                            className="
                        h-full
                        w-full
                        object-cover
                      "
                                        />
                                    )}

                                    <div
                                        className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                    
                      to-transparent
                    "
                                    />

                                    <div className="absolute left-8 top-8">
                                        <span
                                            className="
                        rounded-full
                        bg-white/90
                        px-4
                        py-2
                        text-sm
                        font-medium
                      "
                                        >
                                            {
                                                featuredArticle
                                                    ?.category?.name
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div className="p-10 md:p-14">
                                    <span
                                        className="
                      inline-flex
                      rounded-full
                      bg-violet-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-violet-700
                    "
                                    >
                                        Featured Insight
                                    </span>

                                    <h2
                                        className="
                      mt-8
                      max-w-4xl
                      text-4xl
                      font-semibold
                      tracking-[-0.05em]
                      text-slate-950
                      md:text-6xl
                    "
                                    >
                                        {featuredArticle.title}
                                    </h2>

                                    <p
                                        className="
                      mt-6
                      max-w-3xl
                      text-lg
                      leading-8
                      text-slate-600
                    "
                                    >
                                        {
                                            featuredArticle.excerpt
                                        }
                                    </p>

                                    <div className="mt-8">
                                        <span className="text-slate-500">
                                            {featuredArticle.readTime ||
                                                "5 min read"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Categories */}
            <section className="pb-12">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/insights"
                            className="
          rounded-full
          border
          border-violet-200
          bg-violet-50
          px-5
          py-2.5
          text-sm
          font-medium
          text-violet-700
        "
                        >
                            All
                        </Link>

                        {categories.map((category: any) => (
                            <Link
                                key={category.id}
                                href={`/insights?category=${category.slug}`}
                                className="
            rounded-full
            border
            border-slate-200
            bg-white
            px-5
            py-2.5
            text-sm
            text-slate-700
            transition-all
            hover:border-violet-200
            hover:text-violet-600
          "
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="pb-40">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                        {articles.map(
                            (
                                article: any,
                                index: number
                            ) => (
                                <Link
                                    key={article.id}
                                    href={`/insights/${article.slug}`}
                                >
                                    <div
                                        className="
    group
    flex
    h-full
    flex-col

    overflow-hidden

    rounded-[32px]

    border
    border-slate-100

    bg-white

    shadow-[0_10px_40px_rgba(15,23,42,0.03)]

    transition-all
    duration-500

    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
  "
                                    >

                                        <div className="relative h-60 overflow-hidden">
                                            {article.coverImage ? (
                                                <img
                                                    src={
                                                        article.coverImage
                                                    }
                                                    alt={
                                                        article.title
                                                    }
                                                    className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                                                />
                                            ) : (
                                                <div
                                                    className="
                            h-full
                            w-full
                            bg-gradient-to-br
                            from-violet-100
                            via-white
                            to-blue-100
                          "
                                                />
                                            )}
                                        </div>

                                        <div
  className="
    flex
    flex-1
    flex-col
    p-8
  "
>
                                            <div className="text-sm text-slate-500">
                                                {article.author
                                                    ?.name ||
                                                    "Creonox Team"}
                                            </div>

                                          <h3
  className="
    mt-4

    line-clamp-3

    min-h-[90px]

    text-2xl
    font-semibold
    tracking-tight
    text-slate-950
  "
>
                                                {article.title}
                                            </h3>

                                           <p
  className="
    mt-4

    line-clamp-3

    min-h-[72px]

    text-slate-600
  "
>
                                                {article.excerpt}
                                            </p>

                                           <div
  className="
    mt-auto

    flex
    items-center
    justify-between

    pt-8
  "
>
                                                <span className="text-sm text-slate-500">
                                                    {article.readTime ||
                                                        "5 min read"}
                                                </span>

                                                <ArrowRight
                                                    size={18}
                                                    className="text-violet-600"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <Newsletter />
        </main>
    );
}