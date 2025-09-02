import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { getStatusColor, getTypeColor } from "../utils";
import { FilteredTalkData } from "@/app/talks/types";

type CardImagePropsType = {
  bannerImage: string;
  bannerAlt: string;
  type: FilteredTalkData["type"];
  status: FilteredTalkData["status"];
};

const CardImage = ({
  bannerImage,
  bannerAlt,
  type,
  status,
}: CardImagePropsType) => {
  return (
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        loading="lazy"
        src={bannerImage}
        alt={bannerAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Status and Type Badges on Image */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
        <Badge className={getTypeColor(type)} variant="secondary">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
        <Badge className={getStatusColor(status)} variant="secondary">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
    </div>
  );
};

export default CardImage;
