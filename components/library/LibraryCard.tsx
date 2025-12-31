import Link from "next/link";
import { Library } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Star, Download, ExternalLink } from "lucide-react";
import { formatNumber } from "@/lib/utils";

interface LibraryCardProps {
  library: Library;
}

export function LibraryCard({ library }: LibraryCardProps) {
  return (
    <Link href={`/library/${library.slug}`}>
      <Card className="h-full cursor-pointer hover:border-primary transition-all duration-200 group">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <span className="text-xl font-bold text-gray-600">
              {library.name.charAt(0)}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            {/* Title & Description */}
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {library.name}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-sm text-gray-600 line-clamp-2 mb-3">
              {library.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">
                  {formatNumber(library.githubStars)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span className="font-medium">{library.npmDownloads}</span>
              </div>
              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                {library.license}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">{library.framework}</Badge>
              {library.tags.slice(0, 2).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              {library.tags.length > 2 && (
                <Badge>+{library.tags.length - 2}</Badge>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
