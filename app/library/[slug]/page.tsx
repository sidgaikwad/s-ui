import React from "react";
import { notFound } from "next/navigation";
import { libraries } from "@/data/libraries";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Star,
  Download,
  ExternalLink,
  Github,
  BookOpen,
  Package,
  Copy,
  Check,
} from "lucide-react";
import { formatNumber } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

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
    openGraph: {
      title: library.name,
      description: library.description,
      type: "website",
    },
  };
}

// Copy to clipboard component
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-300" />
      )}
    </button>
  );
}

export default function LibraryPage({ params }: { params: { slug: string } }) {
  const library = libraries.find((lib) => lib.slug === params.slug);

  if (!library) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-gray-900">
            Libraries
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{library.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            {/* Logo */}
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-3xl font-bold text-gray-600">
                {library.name.charAt(0)}
              </span>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{library.name}</h1>
              <p className="text-xl text-gray-600 mb-4">
                {library.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">
                    {formatNumber(library.githubStars)}
                  </span>
                  <span className="text-sm">stars</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold text-gray-900">
                    {library.npmDownloads}
                  </span>
                  <span className="text-sm">downloads/week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success">{library.license}</Badge>
                  <Badge
                    variant={library.pricing === "free" ? "success" : "primary"}
                  >
                    {library.pricing}
                  </Badge>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">{library.framework}</Badge>
                {library.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
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
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Documentation
              </Button>
            </a>
            <a href={library.npm} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Package className="w-4 h-4 mr-2" />
                npm
              </Button>
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
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                  <code>{library.installCommand}</code>
                </pre>
                <CopyButton text={library.installCommand} />
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Quick Start Example</h2>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{library.exampleCode}</code>
                </pre>
                <CopyButton text={library.exampleCode} />
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {library.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
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
                  <dt className="text-gray-600 mb-1">Framework</dt>
                  <dd className="font-medium capitalize">
                    {library.framework}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">License</dt>
                  <dd className="font-medium">{library.license}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">Pricing</dt>
                  <dd className="font-medium capitalize">{library.pricing}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">GitHub Stars</dt>
                  <dd className="font-medium">
                    {formatNumber(library.githubStars)}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">Weekly Downloads</dt>
                  <dd className="font-medium">{library.npmDownloads}</dd>
                </div>
              </dl>
            </Card>

            <Card>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {library.category
                  .filter((cat) => cat !== "All")
                  .map((cat) => (
                    <Badge key={cat}>{cat}</Badge>
                  ))}
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-3">
                <a
                  href={library.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </a>
                <a
                  href={library.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
                <a
                  href={library.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <Package className="w-4 h-4" />
                  npm Package
                </a>
                <a
                  href={library.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </a>
              </div>
            </Card>

            {library.demoUrl && (
              <Card>
                <h3 className="font-semibold mb-4">Live Demo</h3>
                <a
                  href={library.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="w-full">
                    View Demo
                  </Button>
                </a>
              </Card>
            )}
          </div>
        </div>

        {/* Back to Libraries */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline">← Back to All Libraries</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
