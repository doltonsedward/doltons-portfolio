'use client';

export default function TalkLoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-96 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-80 mx-auto"></div>
      </div>
    </div>
  );
}
