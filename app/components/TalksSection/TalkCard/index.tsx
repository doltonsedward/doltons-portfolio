'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { FilteredTalkData } from '@/app/talks/types';
import React from 'react';
import CardImage from './CardImage';
import CardFooter from './CardFooter';
import CardContent from './CardContent';

type TalkCardPropsType = {
  talk: FilteredTalkData;
  showFullDescription?: boolean;
};

const TalkCard = ({ talk }: TalkCardPropsType) => (
  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
    <CardImage
      bannerImage={talk.bannerImage}
      bannerAlt={talk.bannerAlt}
      type={talk.type}
      status={talk.status}
    />

    <CardHeader className="pb-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2">
        {talk.title}
      </h3>
    </CardHeader>

    <CardContent
      description={talk.description}
      datetime={talk.datetime}
      duration={talk.duration}
      audience={talk.audience}
      attendees={talk.attendees}
      platform={talk.platform}
      topics={talk.topics}
      status={talk.status}
    />

    <CardFooter
      talkId={talk.id}
      status={talk.status}
      registrationUrl={talk.registrationUrl}
      recordingUrl={talk.recordingUrl}
    />
  </Card>
);

export const MemoizedTalkCard = React.memo(TalkCard);
export default MemoizedTalkCard;
