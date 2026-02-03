import Link from "next/link";
import { Github, Twitter, Linkedin, Sparkles, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950/50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand / About */}
                    <div className="space-y-4 text-center md:text-left">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                AI Tools
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            Discover and explore the cutting-edge of Artificial Intelligence.
                            Your gateway to the best AI tools and resources.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tools"
                                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    Browse Tools
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    Categories
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* Legal / Resources - Example addition for 3rd/4th col
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* Contact & Social */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            Stay Connected
                        </h3>
                        <div className="mb-4 flex justify-center gap-4 md:justify-start">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Questions? Email us at <br />
                            <span className="font-medium text-gray-900 dark:text-white">support@aitools.com</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                            © {currentYear} AI Tools Catalog. All rights reserved.
                        </p>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                            Made With ❤️ By <span className="font-medium text-gray-900 dark:text-white">K Mahesh Kumar Achary</span>
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
                            {/* Optional bottom links if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
