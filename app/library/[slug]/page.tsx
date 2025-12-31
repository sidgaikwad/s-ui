import { notFound } from "next/navigation";
import { libraries } from "@/data/libraries";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Star, Download, ExternalLink, Github } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import type { Metadata } from "next";

// Generate static params for all library pages
export async function generateStaticParams() {
  return libraries.map((library) => ({
    slug: library.slug,
  }));
}

// Generate metadata for each library page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const library = libraries.find((lib) => lib.slug === params.slug);

  if (!library) {
    return {
      title: "Library Not Found",
    };
  }

  return {
    title: `${library.name} - sidgaikwad/ui`,
    description: library.description,
  };
}

export default function LibraryPage({ params }: { params: { slug: string } }) {
  const library = libraries.find((lib) => lib.slug === params.slug);

  if (!library) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold text-gray-600">
              {library.name.charAt(0)}
            </span>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{library.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{library.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-5 h-5" />
                <span className="font-semibold">
                  {formatNumber(library.githubStars)}
                </span>
                <span className="text-sm">stars</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Download className="w-5 h-5" />
                <span className="font-semibold">{library.npmDownloads}</span>
                <span className="text-sm">downloads</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">{library.framework}</Badge>
              <Badge variant="success">{library.pricing}</Badge>
              {library.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a href={library.website} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Website
            </Button>
          </a>
          <a href={library.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
          <a href={library.docs} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Documentation</Button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">
              {library.longDescription}
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              {library.installCommand}
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">Example Usage</h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{library.exampleCode}</code>
            </pre>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {library.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <h3 className="font-semibold mb-4">Details</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-600">Framework</dt>
                <dd className="font-medium mt-1 capitalize">
                  {library.framework}
                </dd>
              </div>
              <div>
                <dt className="text-gray-600">License</dt>
                <dd className="font-medium mt-1">{library.license}</dd>
              </div>
              <div>
                <dt className="text-gray-600">Pricing</dt>
                <dd className="font-medium mt-1 capitalize">
                  {library.pricing}
                </dd>
              </div>
            </dl>
          </Card>

          <Card>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {library.category.map((cat) => (
                <Badge key={cat}>{cat}</Badge>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <a
                href={library.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                Website
              </a>
              <a
                href={library.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                GitHub Repository
              </a>
              <a
                href={library.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                npm Package
              </a>
              <a
                href={library.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                Documentation
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
