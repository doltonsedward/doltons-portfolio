"use client";

import Image from "next/image";
import { TalkDataTypes } from "../../../app/talks/types";

interface TalkBannerProps {
  talk: TalkDataTypes;
}

export default function TalkBanner({ talk }: TalkBannerProps) {
  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg group">
      <Image
        src={talk.bannerImage}
        alt={talk.bannerAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 66vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
