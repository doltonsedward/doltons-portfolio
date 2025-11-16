import { FilteredTalkData } from '@/app/talks/types';
import { formatTalkDate } from '@/views/TalkDetail/utils/talkHelpers';
import { CardContent } from '@/components/ui/card';
import { Button } from '@heroui/react';
import { addToast } from '@heroui/toast';
import {
  Calendar,
  Clock,
  Users,
  Video,
  Star,
  Share2,
  Copy,
  Check,
} from 'lucide-react';
import { useState } from 'react';

type DetailContentPropsType = {
  datetime: FilteredTalkData['datetime'];
  duration: FilteredTalkData['duration'];
  audience: FilteredTalkData['audience'];
  platform: FilteredTalkData['platform'];
  attendees: FilteredTalkData['attendees'];
  status: FilteredTalkData['status'];
  title: string;
  shortDesc: string;
};

const DetailContent = ({
  datetime,
  duration,
  audience,
  platform,
  attendees,
  status,
  title,
  shortDesc,
}: DetailContentPropsType) => {
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
      addToast({
        title: 'Link copied!',
        description: 'Talk link has been copied to your clipboard.',
        timeout: 3000,
        color: 'success',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
      addToast({
        title: 'Failed to copy',
        description: 'Unable to copy link to clipboard.',
        timeout: 3000,
        color: 'danger',
      });
    }
  };
  return (
    <CardContent className="space-y-4">
      <div className="flex items-start gap-3">
        <Calendar className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">Date</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {formatTalkDate(datetime)}
          </p>
        </div>
      </div>

      {duration && (
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              Duration
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {duration}
            </p>
          </div>
        </div>
      )}

      {audience && (
        <div className="flex items-start gap-3">
          <Users className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              Target Audience
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {audience}
            </p>
          </div>
        </div>
      )}

      {platform && (
        <div className="flex items-start gap-3">
          <Video className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              Platform
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {platform}
            </p>
          </div>
        </div>
      )}

      {attendees && status === 'past' && (
        <div className="flex items-start gap-3">
          <Star className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              Attendees
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {attendees} people
            </p>
          </div>
        </div>
      )}

      {/* Share Section */}
      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
          Found this interesting? Share it with your network!
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="bordered"
            size="sm"
            onClick={handleShare}
            className="flex-1"
            startContent={<Share2 className="h-3.5 w-3.5" />}
          >
            Share
          </Button>
          <Button
            variant="bordered"
            size="sm"
            onClick={handleCopyLink}
            className="flex-1"
            startContent={
              copied ? (
                <Check className="h-3.5 w-3.5 text-green-600" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )
            }
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </Button>
        </div>
      </div>
    </CardContent>
  );
};

export default DetailContent;
