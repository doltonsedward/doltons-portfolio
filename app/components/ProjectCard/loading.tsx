import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCardLoading() {
  return (
    <Card className="h-full animate-pulse">
      <div className="relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
        <div className="absolute top-3 right-3 h-6 w-20 bg-gray-300 rounded-full" />
        <div className="flex items-center justify-center h-full">
          <div className="h-12 w-12 bg-gray-300 rounded-full" />
        </div>
      </div>
      <CardContent className="p-6">
        <div className="h-6 w-2/3 bg-gray-300 rounded mb-2" />
        <div className="h-4 w-full bg-gray-200 rounded mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
        </div>
        <div className="flex gap-4">
          <div className="h-6 w-6 bg-gray-200 rounded" />
          <div className="h-6 w-6 bg-gray-200 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
