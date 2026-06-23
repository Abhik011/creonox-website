"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch insights");
  }

  const data = await res.json();

  return data
    .filter(
      (article: any) =>
        article.status === "published"
    )
    .slice(0, 3);
};

export default function Insights() {
  const {
    data: articles = [],
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/insights`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      revalidateOnReconnect: false,
    }
  );

  return (
    <section className="relative overflow-hidden py-40">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.04]
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-violet-600
            "
          >
            Insights
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-semibold
              tracking-[-0.06em]
              text-slate-950
              md:text-7xl
            "
          >
            Ideas shaping the future
            <span
              className="
                block
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              of operational software.
            </span>
          </h2>
        </div>

        <div className="pt-20">
          {/* Loading State */}
          {isLoading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="
                    h-[460px]
                    animate-pulse
                    rounded-[28px]
                    bg-slate-100
                  "
                />
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div
              className="
                rounded-3xl
                border
                border-red-100
                bg-red-50
                p-6
                text-center
                text-red-600
              "
            >
              Failed to load insights.
            </div>
          )}

          {/* Articles */}
          {!isLoading && !error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map(
                (article: any, index: number) => (
                  <Link
                    key={article.id}
                    href={`/insights/${article.slug}`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      className="
                        group
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-slate-100
                        bg-white
                        shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                      "
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        {article.coverImage ? (
                          <img
                            src={article.coverImage}
                            alt={article.title}
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
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              bg-gradient-to-br
                              from-violet-100
                              via-white
                              to-blue-100
                            "
                          />
                        )}

                        <div className="absolute left-4 top-4">
                          <span
                            className="
                              rounded-full
                              bg-white/90
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                            "
                          >
                            {article.category?.name ||
                              "Insight"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="text-sm text-slate-500">
                          {article.author?.name ||
                            "Creonox Team"}
                        </div>

                        <h3
                          className="
                            mt-4
                            line-clamp-2
                            text-xl
                            font-semibold
                            text-slate-950
                          "
                        >
                          {article.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            line-clamp-3
                            text-slate-600
                          "
                        >
                          {article.excerpt}
                        </p>

                        <div
                          className="
                            mt-6
                            flex
                            items-center
                            justify-between
                          "
                        >
                          <span className="text-sm text-slate-500">
                            {article.readTime ||
                              "5 min read"}
                          </span>

                          <ArrowRight
                            size={18}
                            className="
                              text-violet-600
                              transition-transform
                              group-hover:translate-x-1
                            "
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              )}
            </div>
          )}

          {/* Mobile CTA */}
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/insights"
              className="
                inline-flex
                items-center
                gap-2
                text-violet-600
              "
            >
              View All Insights
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}