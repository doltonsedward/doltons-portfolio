import React from 'react';
import { TalkDataTypes } from '@/app/talks/types';
import TalkBanner from './TalkBanner';
import TalkDescription from './TalkDescription';
import TalkTopics from './TalkTopics';
import TalkCTA from './TalkCTA';

type TalkMainContentPropsType = {
  talk: TalkDataTypes;
};

const TalkMainContent = ({ talk }: TalkMainContentPropsType) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <TalkBanner talk={talk} />
      <TalkDescription talk={talk} />
      <TalkTopics talk={talk} />
      <TalkCTA />
    </div>
  );
};

export default TalkMainContent;
