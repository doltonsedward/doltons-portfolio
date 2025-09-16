import { FilteredTalkData } from '@/app/talks/types';
import TalkEventDetail from './TalkEventDetail';
import TalkAction from './TalkAction';

type TalkSidebarPropsType = {
  talk: FilteredTalkData;
};

const TalkSidebar = ({ talk }: TalkSidebarPropsType) => {
  return (
    <div className="space-y-6">
      <TalkEventDetail talk={talk} />
      <TalkAction
        status={talk.status}
        registrationUrl={talk.registrationUrl}
        recordingUrl={talk.recordingUrl}
      />
    </div>
  );
};

export default TalkSidebar;
