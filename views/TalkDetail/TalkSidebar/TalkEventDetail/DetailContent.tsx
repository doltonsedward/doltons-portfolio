import { FilteredTalkData } from "@/app/talks/types";
import { formatTalkDate } from "@/views/TalkDetail/utils/talkHelpers";
import { CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, Video, Star } from "lucide-react";

type DetailContentPropsType = {
  datetime: FilteredTalkData["datetime"];
  duration: FilteredTalkData["duration"];
  audience: FilteredTalkData["audience"];
  platform: FilteredTalkData["platform"];
  attendees: FilteredTalkData["attendees"];
  status: FilteredTalkData["status"];
};

const DetailContent = ({
  datetime,
  duration,
  audience,
  platform,
  attendees,
  status,
}: DetailContentPropsType) => {
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

      {attendees && status === "past" && (
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
    </CardContent>
  );
};

export default DetailContent;
