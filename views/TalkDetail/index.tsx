'use client';

import { notFound, useParams } from 'next/navigation';
import TalkMainContent from './TalkMainContent';
import TalkSidebar from './TalkSidebar';
import TalkHeader from './TalkHeader';
import { TALKS_DATA } from '@/app/data/talks';
import dayjs from 'dayjs';
import { FilteredTalkData } from '@/app/talks/types';

const TalkDetail = () => {
  const params = useParams<{ id: string }>();
  const talk = TALKS_DATA.find((talk) => talk.id === params.id);

  if (!talk) {
    notFound();
  }

  const now = dayjs();
  const start = dayjs(talk!.datetime);
  const end = start.add(talk!.duration, 'second');

  let status: 'upcoming' | 'ongoing' | 'past' = 'past';
  if (start.isAfter(now)) {
    status = 'upcoming';
  } else if (end.isAfter(now)) {
    status = 'ongoing';
  }

  const shownTalk: FilteredTalkData = { ...talk!, status };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TalkHeader talk={shownTalk} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TalkMainContent talk={shownTalk} />
          <TalkSidebar talk={shownTalk} />
        </div>
      </div>
    </div>
  );
};

export default TalkDetail;
