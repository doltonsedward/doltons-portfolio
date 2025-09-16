export type TalkStatusType = 'upcoming' | 'ongoing' | 'past';

export type TalkType =
  | 'webinar'
  | 'workshop'
  | 'mentoring'
  | 'conference'
  | 'bootcamp';

export interface TalkDataTypes {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  type: TalkType;
  datetime: string;
  endDatetime?: string;
  duration: number;
  audience?: string;
  attendees?: number;
  platform?: string;
  registrationUrl?: string;
  recordingUrl?: string;
  topics: string[];
  bannerImage: string;
  cardImage?: string;
  bannerAlt: string;
}

export interface FilteredTalkData extends TalkDataTypes {
  status: TalkStatusType;
}
