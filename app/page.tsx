import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { getToolStats } from "@/lib/tools";

export default function Home() {
  const stats = getToolStats();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-900/30">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Curated AI Tools Directory
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Discover the Best
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI Tools{" "}
            </span>
            for Your Projects
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Explore our carefully curated collection of cutting-edge AI tools.
            From text generation to image creation, find the perfect AI solution
            to supercharge your workflow.
          </p>

          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Browse All Tools
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              {stats.totalTools}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI Tools Available
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              {stats.avgRating}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Rating
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              {stats.totalReviews.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Reviews
            </div>
          </div>
        </div>
      </section>

      {/* About Dataset Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-12 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            About Our Dataset
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Our AI Tools Catalog features a carefully curated collection of the
            most innovative and useful AI tools available today. Each tool has
            been evaluated and categorized to help you find exactly what you
            need.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Object.entries(stats.categoryCounts).map(([category, count]) => (
              <div
                key={category}
                className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800"
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
