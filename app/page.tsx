"use client";

import { useState, useMemo } from "react";
import { libraries } from "@/data/libraries";
import { LibraryGrid } from "@/components/library/LibraryGrid";
import { SearchBar } from "@/components/filters/SearchBar";
import { FilterChips } from "@/components/filters/FilterChips";
import { Sparkles, Zap, Shield } from "lucide-react";

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
        lib.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lib.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesFramework =
        selectedFramework === "All" || lib.framework === selectedFramework;
      const matchesCategory =
        selectedCategory === "All" || lib.category.includes(selectedCategory);

      return matchesSearch && matchesFramework && matchesCategory;
    });
  }, [searchQuery, selectedFramework, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Discover the best UI libraries</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Find Your Perfect
            <br />
            UI Component Library
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A curated collection of the best UI component libraries for modern
            web development. Compare features, explore demos, and build faster.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>10+ Libraries</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span>All Open Source</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span>Regularly Updated</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name, description, or tags..."
            />

            <div className="mt-6 space-y-6">
              <FilterChips
                label="Framework"
                options={frameworks}
                selected={selectedFramework}
                onChange={setSelectedFramework}
              />

              <FilterChips
                label="Category"
                options={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredLibraries.length}
              </span>{" "}
              {filteredLibraries.length === 1 ? "library" : "libraries"}
            </p>

            {(searchQuery ||
              selectedFramework !== "All" ||
              selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFramework("All");
                  setSelectedCategory("All");
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Library Grid */}
        <LibraryGrid libraries={filteredLibraries} />

        {/* CTA Section */}
        {filteredLibraries.length > 0 && (
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100">
              <h2 className="text-3xl font-bold mb-4">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Help us grow this collection by submitting your favorite UI
                library. We&apos;re always looking to add more great tools!
              </p>
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Submit a Library
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
