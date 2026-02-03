import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { AITool } from "@/types/tool";

interface ToolCardProps {
    tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
    return (
        <Link
            href={`/tools/${tool.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.15)] dark:border-gray-800 dark:bg-gray-900/50 dark:shadow-none dark:hover:border-blue-900/50 dark:hover:bg-gray-900 dark:hover:shadow-blue-900/10"
        >
            {/* Header: Logo & Badge */}
            <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-2xl shadow-inner dark:from-blue-900/20 dark:to-indigo-900/20">
                    {tool.logo}
                </div>
                <span className="inline-flex items-center rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20">
                    {tool.category}
                </span>
            </div>

            {/* Content */}
            <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                {tool.name}
            </h3>

            <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {tool.description}
            </p>

            {/* Footer: Metrics & Pricing */}
            <div className="flex items-center justify-between border-t border-gray-50 pt-4 dark:border-gray-800">
                <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                        {tool.rating}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                        ({tool.reviewCount})
                    </span>
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {tool.pricingModel}
                </span>
            </div>

            {/* Hover Indicator */}
            <div className="absolute right-6 bottom-6 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
        </Link>
    );
}
