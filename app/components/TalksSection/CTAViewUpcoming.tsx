import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import React from 'react';

type CTAViewUpcomingPropsType = {
  upcomingCount: number;
  onViewUpcoming: () => void;
};

const CTAViewUpcoming = ({
  upcomingCount,
  onViewUpcoming,
}: CTAViewUpcomingPropsType) => {
  if (!upcomingCount) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-12 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">
            Join My Upcoming Sessions
          </h3>
          <p className="text-blue-100">
            Don't miss out on the latest talks and mentoring opportunities.
            Register now to secure your spot!
          </p>
        </div>
        <Button
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-gray-100"
          onClick={onViewUpcoming}
        >
          <Calendar className="h-4 w-4 mr-2" />
          View Upcoming
        </Button>
      </div>
    </div>
  );
};

export default CTAViewUpcoming;
