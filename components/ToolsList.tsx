"use client";

import { useState, useMemo } from "react";
import { getAllTools, filterTools, sortTools } from "@/lib/tools";
import { Category, PricingModel, SortOption } from "@/types/tool";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import SortDropdown from "@/components/SortDropdown";
import { Search } from "lucide-react";

export default function ToolsList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category>();
    const [selectedPricing, setSelectedPricing] = useState<PricingModel>();
    const [sortBy, setSortBy] = useState<SortOption>("rating");

    const allTools = getAllTools();

    // Memoized filtering and sorting for performance
    const filteredAndSortedTools = useMemo(() => {
        const filtered = filterTools(allTools, {
            searchQuery,
            category: selectedCategory,
            pricingModel: selectedPricing,
        });
        return sortTools(filtered, sortBy);
    }, [allTools, searchQuery, selectedCategory, selectedPricing, sortBy]);

    const hasActiveFilters = searchQuery || selectedCategory || selectedPricing;

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                    Browse AI Tools
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Discover the perfect AI tool for your needs
                </p>
            </div>

            {/* Search and Sort - Responsive Grid */}
            <div className="mb-8 grid gap-4 md:grid-cols-[1fr,auto]">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <div className="w-full md:w-64">
                    <SortDropdown value={sortBy} onChange={setSortBy} />
                </div>
            </div>

            {/* Filters - Responsive */}
            <div className="sticky top-20 z-40 mb-10 bg-gray-50/95 py-4 backdrop-blur-sm dark:bg-gray-950/95">
                <FilterBar
                    selectedCategory={selectedCategory}
                    selectedPricing={selectedPricing}
                    onCategoryChange={setSelectedCategory}
                    onPricingChange={setSelectedPricing}
                />
            </div>

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing <span className="font-semibold">{filteredAndSortedTools.length}</span> of{" "}
                    <span className="font-semibold">{allTools.length}</span> tools
                </p>
                {hasActiveFilters && (
                    <p className="text-xs text-blue-600 dark:text-blue-400">
                        Active filters applied
                    </p>
                )}
            </div>

            {/* Tools Grid */}
            {filteredAndSortedTools.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredAndSortedTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>
            ) : (
                /* Enhanced Empty State */
                <div className="rounded-3xl border border-gray-200 bg-white p-16 text-center dark:border-gray-800 dark:bg-gray-900">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <Search className="h-10 w-10 text-gray-400 dark:text-gray-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                        No tools found
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                        We couldn't find any tools matching your criteria.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
                        <p>Try:</p>
                        <ul className="space-y-1">
                            <li>• Using different keywords</li>
                            <li>• Removing some filters</li>
                            <li>• Checking your spelling</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
