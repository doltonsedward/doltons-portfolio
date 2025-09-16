'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type TalkSharePropsType = {
  title: string;
  shortDesc: string;
};

const TalkShare = ({ title, shortDesc }: TalkSharePropsType) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shortDesc,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard if share fails
        await navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback for browsers without Web Share API
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Share This Talk</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Found this interesting? Share it with your network!
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handleCopyLink}>
            Copy Link
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalkShare;
