"use client";

import { X } from "lucide-react";
import { Category, PricingModel } from "@/types/tool";

interface FilterBarProps {
    selectedCategory?: Category;
    selectedPricing?: PricingModel;
    onCategoryChange: (category?: Category) => void;
    onPricingChange: (pricing?: PricingModel) => void;
}

export default function FilterBar({
    selectedCategory,
    selectedPricing,
    onCategoryChange,
    onPricingChange,
}: FilterBarProps) {
    const categories = Object.values(Category);
    const pricingModels = Object.values(PricingModel);

    const hasFilters = selectedCategory || selectedPricing;

    const clearFilters = () => {
        onCategoryChange(undefined);
        onPricingChange(undefined);
    };

    return (
        <div className="space-y-6">
            {/* Category Filters */}
            <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Category
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onCategoryChange(undefined)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${!selectedCategory
                                ? "bg-gray-900 text-white shadow-lg ring-2 ring-gray-900 ring-offset-2 dark:bg-white dark:text-gray-900 dark:ring-white dark:ring-offset-gray-950"
                                : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                            }`}
                    >
                        All Categories
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                onCategoryChange(
                                    selectedCategory === category ? undefined : category
                                )
                            }
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-gray-950"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pricing Filters */}
            <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Pricing
                </h3>
                <div className="flex flex-wrap gap-2">
                    {pricingModels.map((pricing) => (
                        <button
                            key={pricing}
                            onClick={() =>
                                onPricingChange(
                                    selectedPricing === pricing ? undefined : pricing
                                )
                            }
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedPricing === pricing
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 ring-2 ring-purple-600 ring-offset-2 dark:ring-offset-gray-950"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-purple-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-purple-400"
                                }`}
                        >
                            {pricing}
                        </button>
                    ))}
                </div>
            </div>

            {/* Clear Filters */}
            {hasFilters && (
                <div className="pt-2">
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-red-600 transition-colors hover:text-red-700 hover:underline dark:text-red-400 dark:hover:text-red-300"
                    >
                        <X className="h-4 w-4" />
                        Clear Active Filters
                    </button>
                </div>
            )}
        </div>
    );
}
