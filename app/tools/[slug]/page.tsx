import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    Star,
    ExternalLink,
    Calendar,
    DollarSign,
    Tag,
    ArrowLeft,
} from "lucide-react";
import { getAllTools, getToolBySlug } from "@/lib/tools";

interface ToolDetailPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
    const tools = getAllTools();
    return tools.map((tool) => ({
        slug: tool.slug,
    }));
}

// Generate metadata for SEO
// Generate metadata for SEO
export async function generateMetadata({
    params,
}: ToolDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const tool = getToolBySlug(slug);

    if (!tool) {
        return {
            title: "Tool Not Found | AI Tools Catalog",
            description: "The requested AI tool could not be found in our catalog.",
            robots: {
                index: false,
                follow: true,
            },
        };
    }

    const title = `${tool.name} - AI Tool Review & Features | AI Tools Catalog`;
    const description = tool.description;
    const url = `/tools/${slug}`;

    return {
        title,
        description,
        keywords: [
            tool.name,
            tool.category,
            ...tool.tags,
            `${tool.name} review`,
            `${tool.name} features`,
            `${tool.name} pricing`,
            "AI tools",
        ],
        authors: [{ name: "AI Tools Catalog" }],
        openGraph: {
            title,
            description,
            type: "website",
            url,
            siteName: "AI Tools Catalog",
            images: [
                {
                    url: "/og-image.jpg", // Ideally this would be dynamic if we had tool screenshots
                    width: 1200,
                    height: 630,
                    alt: `${tool.name} - AI Tool`,
                },
            ],
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.jpg"],
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
    const { slug } = await params;
    const tool = getToolBySlug(slug);

    if (!tool) {
        notFound();
    }

    const launchDate = new Date(tool.launchDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/tools"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Tools
                </Link>

                {/* Tool Header */}
                <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-6 flex items-start gap-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-5xl dark:from-blue-950 dark:to-purple-950">
                            {tool.logo}
                        </div>
                        <div className="flex-1">
                            <div className="mb-2 flex flex-wrap items-center gap-3">
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    {tool.name}
                                </h1>
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                    {tool.category}
                                </span>
                            </div>
                            <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                                {tool.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {tool.rating}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-500">
                                        ({tool.reviewCount.toLocaleString()} reviews)
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <DollarSign className="h-5 w-5" />
                                    <span className="text-sm font-medium">
                                        {tool.pricingModel}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-sm">Launched {launchDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visit Website Button */}
                    <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                        Visit Website
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </div>

                {/* About Section */}
                <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                        About {tool.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {tool.longDescription}
                    </p>
                </div>

                {/* Features Section */}
                <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                        Key Features
                    </h2>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {tool.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                            >
                                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    ✓
                                </span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags Section */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-4 flex items-center gap-2">
                        <Tag className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Tags
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
