import { MetadataRoute } from "next";
import { getAllTools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
    const tools = getAllTools();
    const baseUrl = "https://ai-tools-catalog-demo.vercel.app";

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    // Dynamic tool pages
    const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool.slug}`,
        lastModified: new Date(tool.launchDate),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...toolPages];
}
