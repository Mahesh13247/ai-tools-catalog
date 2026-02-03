import { Metadata } from "next";
import ToolsList from "@/components/ToolsList";

export const metadata: Metadata = {
    title: "Browse AI Tools - Find the Perfect AI Tool",
    description:
        "Search and filter through our comprehensive catalog of AI tools. Find tools for text generation, image creation, coding, and more.",
    openGraph: {
        title: "Browse AI Tools - Find the Perfect AI Tool",
        description:
            "Search and filter through our comprehensive catalog of AI tools. Find tools for text generation, image creation, coding, and more.",
        url: "/tools",
    },
    alternates: {
        canonical: "/tools",
    },
};

export default function ToolsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <ToolsList />
        </div>
    );
}
