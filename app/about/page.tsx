import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About - sidgaikwad/ui",
  description: "Learn more about sidgaikwad/ui",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About sidgaikwad/ui</h1>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            sidgaikwad/ui is a curated collection of the best UI component
            libraries for modern web development. We help developers discover,
            compare, and choose the right tools for their projects.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">Why We Built This</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As developers, we spend countless hours researching and comparing
            different UI libraries. We created this platform to save time and
            make better decisions by providing all the information you need in
            one place.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you&apos;re starting a new project or looking to migrate,
            sidgaikwad/ui helps you make informed decisions with detailed
            comparisons, live previews, and community insights.
          </p>
        </Card>
      </div>
    </div>
  );
}
