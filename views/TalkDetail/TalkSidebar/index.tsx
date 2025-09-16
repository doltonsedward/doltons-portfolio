import { FilteredTalkData } from '@/app/talks/types';
import TalkEventDetail from './TalkEventDetail';
import TalkAction from './TalkAction';
import TalkShare from './TalkShare';

type TalkSidebarPropsType = {
  talk: FilteredTalkData;
};

export default function TalkSidebar({ talk }: TalkSidebarPropsType) {
  return (
    <div className="space-y-6">
      <TalkEventDetail talk={talk} />
      <TalkAction
        status={talk.status}
        registrationUrl={talk.registrationUrl}
        recordingUrl={talk.recordingUrl}
      />
      <TalkShare title={talk.title} shortDesc={talk.shortDesc} />
    </div>
  );
}
