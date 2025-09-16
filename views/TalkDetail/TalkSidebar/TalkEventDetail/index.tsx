import { FilteredTalkData } from '@/app/talks/types';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import DetailContent from './DetailContent';

type TalkEventDetailsPropsType = {
  talk: FilteredTalkData;
};

const TalkEventDetail = ({ talk }: TalkEventDetailsPropsType) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Event Details</CardTitle>
      </CardHeader>
      <DetailContent
        datetime={talk.datetime}
        duration={talk.duration}
        audience={talk.audience}
        platform={talk.platform}
        attendees={talk.attendees}
        status={talk.status}
      />
    </Card>
  );
};

export default TalkEventDetail;
