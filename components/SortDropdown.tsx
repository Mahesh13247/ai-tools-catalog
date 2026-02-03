"use client";

import { ChevronDown } from "lucide-react";
import { SortOption } from "@/types/tool";

interface SortDropdownProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
    const options: { value: SortOption; label: string }[] = [
        { value: "name", label: "Name (A-Z)" },
        { value: "name-desc", label: "Name (Z-A)" },
        { value: "rating", label: "Highest Rated" },
        { value: "newest", label: "Newest First" },
    ];

    return (
        <div className="relative">
            <label
                htmlFor="sort"
                className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
            >
                Sort By
            </label>
            <div className="relative">
                <select
                    id="sort"
                    value={value}
                    onChange={(e) => onChange(e.target.value as SortOption)}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-medium transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:border-blue-400"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
        </div>
    );
}
