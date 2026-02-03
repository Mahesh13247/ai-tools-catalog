"use client";

import Link from "next/link";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800/60 dark:bg-gray-950/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                            <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            AI Tools
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href="/tools"
                            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            Browse Tools
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Toggle theme"
                        >
                            {!mounted ? (
                                <div className="h-5 w-5" />
                            ) : resolvedTheme === "dark" ? (
                                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
