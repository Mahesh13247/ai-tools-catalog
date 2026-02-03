import { AITool, FilterOptions, SortOption, Category, PricingModel } from "@/types/tool";
import toolsData from "@/data/tools.json";

// Type assertion for the imported JSON
const tools = toolsData as AITool[];

/**
 * Get all AI tools
 */
export function getAllTools(): AITool[] {
    return tools;
}

/**
 * Get a single tool by slug
 */
export function getToolBySlug(slug: string): AITool | undefined {
    return tools.find((tool) => tool.slug === slug);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): Category[] {
    return Object.values(Category);
}

/**
 * Get all unique pricing models
 */
export function getAllPricingModels(): PricingModel[] {
    return Object.values(PricingModel);
}

/**
 * Filter and search tools
 */
export function filterTools(
    tools: AITool[],
    filters: FilterOptions
): AITool[] {
    let filtered = [...tools];

    // Filter by category
    if (filters.category) {
        filtered = filtered.filter((tool) => tool.category === filters.category);
    }

    // Filter by pricing model
    if (filters.pricingModel) {
        filtered = filtered.filter(
            (tool) => tool.pricingModel === filters.pricingModel
        );
    }

    // Filter by search query
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
        const query = filters.searchQuery.toLowerCase();
        filtered = filtered.filter(
            (tool) =>
                tool.name.toLowerCase().includes(query) ||
                tool.description.toLowerCase().includes(query) ||
                tool.tags.some((tag) => tag.toLowerCase().includes(query))
        );
    }

    return filtered;
}

/**
 * Sort tools
 */
export function sortTools(tools: AITool[], sortBy: SortOption): AITool[] {
    const sorted = [...tools];

    switch (sortBy) {
        case "name":
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case "name-desc":
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case "rating":
            return sorted.sort((a, b) => b.rating - a.rating);
        case "newest":
            return sorted.sort(
                (a, b) =>
                    new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
            );
        default:
            return sorted;
    }
}

/**
 * Get tool statistics
 */
export function getToolStats() {
    const totalTools = tools.length;
    const avgRating =
        tools.reduce((sum, tool) => sum + tool.rating, 0) / totalTools;
    const totalReviews = tools.reduce((sum, tool) => sum + tool.reviewCount, 0);
    const categoryCounts = tools.reduce(
        (acc, tool) => {
            acc[tool.category] = (acc[tool.category] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );

    return {
        totalTools,
        avgRating: Math.round(avgRating * 10) / 10,
        totalReviews,
        categoryCounts,
    };
}
