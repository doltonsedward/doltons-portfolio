import { Calendar, Mic, Users } from 'lucide-react';
import React from 'react';

type TalkStatsPropsType = {
  totalTalks: number;
  totalAttendees: number;
  upcomingCount: number;
};

const TalkStats = ({
  totalTalks,
  totalAttendees,
  upcomingCount,
}: TalkStatsPropsType) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center mb-2">
        <Mic className="h-6 w-6 text-blue-600 mr-2" />
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {totalTalks}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Total Talks</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center mb-2">
        <Users className="h-6 w-6 text-green-600 mr-2" />
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {totalAttendees}+
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">People Reached</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center mb-2">
        <Calendar className="h-6 w-6 text-purple-600 mr-2" />
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {upcomingCount}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Upcoming Events</p>
    </div>
  </div>
);

export default React.memo(TalkStats);
