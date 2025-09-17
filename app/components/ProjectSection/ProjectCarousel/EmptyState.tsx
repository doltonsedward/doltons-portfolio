import { FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProjectsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FolderOpen className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Projects Yet
      </h3>
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Projects will appear here once they're available. Check back later to
        see the latest work and innovations.
      </p>
      <Button variant="outline" asChild>
        <Link href="/project">Browse All Projects</Link>
      </Button>
    </div>
  );
}
