import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import TalkCard from '../TalkCard';
import { Calendar, ChevronDown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilteredTalkData } from '@/app/talks/types';

interface TabSectionProps {
  stats: {
    totalTalks: number;
    upcomingCount: number;
    pastCount: number;
    ongoingCount: number;
  };
  activeTab: string;
  handleTabChange: (tab: string) => void;
  displayTalks: FilteredTalkData[];
  hasMore: boolean;
  handleShowMore: () => void;
}

const TabSection: React.FC<TabSectionProps> = ({
  stats,
  activeTab,
  handleTabChange,
  displayTalks,
  hasMore,
  handleShowMore,
}) => {
  const getTabCount = (status: string) => {
    switch (status) {
      case 'upcoming':
        return stats.upcomingCount;
      case 'past':
        return stats.pastCount;
      case 'ongoing':
        return stats.ongoingCount;
      default:
        return stats.totalTalks;
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="all" className="flex items-center gap-2">
          All
          <Badge variant="secondary" className="ml-1">
            {getTabCount('all')}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="upcoming" className="flex items-center gap-2">
          Upcoming
          <Badge variant="secondary" className="ml-1">
            {getTabCount('upcoming')}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="ongoing" className="flex items-center gap-2">
          Ongoing
          <Badge variant="secondary" className="ml-1">
            {getTabCount('ongoing')}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="past" className="flex items-center gap-2">
          Past
          <Badge variant="secondary" className="ml-1">
            {getTabCount('past')}
          </Badge>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTalks.map((talk) => (
            <TalkCard key={talk.id} talk={talk} />
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-8">
            <Button onClick={handleShowMore} variant="outline" size="lg">
              <ChevronDown className="h-4 w-4 mr-2" />
              Show More Talks
            </Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="upcoming" className="mt-8">
        {stats.upcomingCount > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTalks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <Button onClick={handleShowMore} variant="outline" size="lg">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Talks
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Upcoming Events
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for new talks and mentoring sessions!
            </p>
          </div>
        )}
      </TabsContent>

      <TabsContent value="ongoing" className="mt-8">
        {stats.ongoingCount > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTalks.map((talk) => (
                <TalkCard key={talk.id} talk={talk} />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <Button onClick={handleShowMore} variant="outline" size="lg">
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show More Talks
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Ongoing Sessions
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Regular mentoring sessions will be listed here when active.
            </p>
          </div>
        )}
      </TabsContent>

      <TabsContent value="past" className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTalks.map((talk) => (
            <TalkCard key={talk.id} talk={talk} />
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-8">
            <Button onClick={handleShowMore} variant="outline" size="lg">
              <ChevronDown className="h-4 w-4 mr-2" />
              Show More Talks
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default TabSection;
