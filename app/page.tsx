"use client";

import { useState, useMemo } from "react";
import { libraries } from "@/data/libraries";
import { LibraryGrid } from "@/components/library/LibraryGrid";
import { SearchBar } from "@/components/filters/SearchBar";
import { FilterChips } from "@/components/filters/FilterChips";

const frameworks = [
  "All",
  "react",
  "vue",
  "svelte",
  "angular",
  "web-components",
];
const categories = [
  "All",
  "Layout",
  "Forms",
  "Navigation",
  "Data Display",
  "Overlay",
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredLibraries = useMemo(() => {
    return libraries.filter((lib) => {
      const matchesSearch =
        lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lib.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFramework =
        selectedFramework === "All" || lib.framework === selectedFramework;
      const matchesCategory =
        selectedCategory === "All" || lib.category.includes(selectedCategory);

      return matchesSearch && matchesFramework && matchesCategory;
    });
  }, [searchQuery, selectedFramework, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Perfect UI Library
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A curated collection of component libraries to help you build
          beautiful, accessible interfaces faster
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Framework
            </h3>
            <FilterChips
              options={frameworks}
              selected={selectedFramework}
              onChange={setSelectedFramework}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
            <FilterChips
              options={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">{filteredLibraries.length}</span>{" "}
          libraries
        </p>
      </div>

      {/* Library Grid */}
      <LibraryGrid libraries={filteredLibraries} />
    </div>
  );
}
