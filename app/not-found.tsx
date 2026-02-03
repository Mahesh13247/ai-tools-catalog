import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center">
            <div className="mb-8 rounded-full bg-red-100 p-6 dark:bg-red-900/20">
                <h1 className="text-6xl font-bold text-red-600 dark:text-red-400">
                    404
                </h1>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Page Not Found
            </h2>
            <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
                Sorry, we couldn't find the page you were looking for. It might have been
                moved, deleted, or never existed.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                    <Home className="h-5 w-5" />
                    Go Home
                </Link>
                <Link
                    href="/tools"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-900"
                >
                    <ArrowLeft className="h-5 w-5" />
                    Browse Tools
                </Link>
            </div>
        </div>
    );
}
