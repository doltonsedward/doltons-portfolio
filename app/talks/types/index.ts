export type TalkStatusType = "upcoming" | "ongoing" | "past";

export interface TalkDataTypes {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  type: "webinar" | "workshop" | "mentoring" | "conference";
  datetime: string;
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
