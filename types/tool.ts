export enum Category {
    TEXT_GENERATION = "Text Generation",
    IMAGE_GENERATION = "Image Generation",
    CODE_ASSISTANT = "Code Assistant",
    VIDEO_GENERATION = "Video Generation",
    AUDIO_GENERATION = "Audio Generation",
    PRODUCTIVITY = "Productivity",
    RESEARCH = "Research",
    DESIGN = "Design",
}

export enum PricingModel {
    FREE = "Free",
    FREEMIUM = "Freemium",
    PAID = "Paid",
    SUBSCRIPTION = "Subscription",
}

export interface AITool {
    id: string;
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    category: Category;
    pricingModel: PricingModel;
    features: string[];
    website: string;
    logo: string;
    rating: number;
    reviewCount: number;
    tags: string[];
    launchDate: string;
}

export type SortOption = "name" | "name-desc" | "rating" | "newest";

export interface FilterOptions {
    category?: Category;
    pricingModel?: PricingModel;
    searchQuery?: string;
}
