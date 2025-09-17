import { Card, CardContent } from '@/components/ui/card';

export default function ProjectCardLoading() {
  return (
    <Card className="h-full animate-pulse">
      <div className="relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
        <div className="absolute top-3 right-3 z-10 h-6 w-20 bg-gray-300 rounded-full" />
        <div className="w-full h-full bg-gray-200" />
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="h-6 w-2/3 bg-gray-300 rounded" />
        </div>

        <div className="mb-4 space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-4/5 bg-gray-200 rounded" />
          <div className="h-4 w-3/5 bg-gray-200 rounded" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
          <div className="h-6 w-20 bg-gray-200 rounded-full" />
          <div className="h-6 w-18 bg-gray-200 rounded-full" />
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded" />
            <div className="h-8 w-8 bg-gray-200 rounded" />
          </div>
          <div className="h-8 w-24 bg-gray-200 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
