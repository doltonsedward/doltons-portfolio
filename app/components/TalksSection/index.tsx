'use client';

import { useState } from 'react';
import {
  TALKS_DATA,
  upcomingTalks,
  ongoingTalks,
  pastTalks,
  getTalksWithStatus,
} from '@/app/data/talks';
import TalkHeader from './TalkHeader';
import TalkStats from './TalkStats';
import ContactMe from './ContactMe';
import CTAViewUpcoming from './CTAViewUpcoming';
import TabSection from './Tab';

// const ITEMS_PER_PAGE_DESKTOP = 6;
// const ITEMS_PER_PAGE_MOBILE = 3;

const getStats = () => {
  const upcomingCount = upcomingTalks.length;
  const pastCount = pastTalks.length;
  const ongoingCount = ongoingTalks.length;
  const totalAttendees = pastTalks.reduce(
    (sum, talk) => sum + (talk.attendees || 0),
    0
  );

  return {
    totalTalks: TALKS_DATA.length,
    upcomingCount,
    pastCount,
    ongoingCount,
    totalAttendees,
  };
};

export default function TalksSection() {
  const talks = getTalksWithStatus();
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeTab, setActiveTab] = useState('all');

  const stats = getStats();

  const handleShowMore = () => setVisibleCount((prev) => prev + 6);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  const filteredTalks = talks.filter((talk) => {
    if (activeTab === 'all') return true;
    return talk.status === activeTab;
  });

  const visibleTalks = filteredTalks.slice(0, visibleCount);

  return (
    <section
      id="talks"
      className="px-6 py-16 lg:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <TalkHeader />

        <TalkStats
          totalAttendees={stats.totalAttendees}
          totalTalks={stats.totalTalks}
          upcomingCount={stats.upcomingCount}
        />

        <CTAViewUpcoming
          upcomingCount={stats.upcomingCount}
          onViewUpcoming={() => handleTabChange('upcoming')}
        />

        <TabSection
          stats={stats}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          displayTalks={visibleTalks}
          hasMore={visibleCount < filteredTalks.length}
          handleShowMore={handleShowMore}
        />

        <ContactMe />
      </div>
    </section>
  );
}
