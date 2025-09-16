'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Share2, Copy, Check } from 'lucide-react';
import { useState } from 'react';

type TalkSharePropsType = {
  title: string;
  shortDesc: string;
};

const TalkShare = ({ title, shortDesc }: TalkSharePropsType) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
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
      setCopied(true);
      toast({
        title: 'Link copied!',
        description: 'Talk link has been copied to your clipboard.',
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
      toast({
        title: 'Failed to copy',
        description: 'Unable to copy link to clipboard.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-card to-muted/20 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Share2 className="h-4 w-4 text-primary" />
          Share This Talk
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Found this interesting? Share it with your network!
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Share2 className="h-3.5 w-3.5" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="flex-1 gap-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy Link
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalkShare;
