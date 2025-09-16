import React from 'react';
import { CardContent as CoreCardContent } from '@/components/ui/card';
import { Calendar, Clock, Users, Video } from 'lucide-react';
import { formatDate } from '../utils';
import { formatDuration } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { FilteredTalkData } from '@/app/talks/types';

type CardContentPropsType = {
  description: FilteredTalkData['description'];
  datetime: FilteredTalkData['datetime'];
  duration: FilteredTalkData['duration'];
  audience: FilteredTalkData['audience'];
  attendees: FilteredTalkData['attendees'];
  platform: FilteredTalkData['platform'];
  topics: FilteredTalkData['topics'];
  status: FilteredTalkData['status'];
};

const CardContent = ({
  description,
  datetime,
  duration,
  audience,
  attendees,
  platform,
  topics,
  status,
}: CardContentPropsType) => {
  return (
    <CoreCardContent className="flex-1 pb-4">
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
        {description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{formatDate(datetime)}</span>
        </div>

        {duration && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{formatDuration(duration)}</span>
          </div>
        )}

        {audience && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{audience}</span>
          </div>
        )}

        {attendees && status === 'past' && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{attendees} attendees</span>
          </div>
        )}

        {platform && (
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Video className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{platform}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1">
        {topics.slice(0, 4).map((topic, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {topic}
          </Badge>
        ))}
        {topics.length > 4 && (
          <Badge variant="outline" className="text-xs">
            +{topics.length - 4} more
          </Badge>
        )}
      </div>
    </CoreCardContent>
  );
};

export default CardContent;
