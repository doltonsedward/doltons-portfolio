"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Users, ExternalLink, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Talk {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  type: "webinar" | "workshop" | "mentoring" | "conference";
  status: "upcoming" | "past" | "ongoing";
  date: string;
  duration?: string;
  audience?: string;
  attendees?: number;
  platform?: string;
  registrationUrl?: string;
  recordingUrl?: string;
  topics: string[];
  bannerImage: string;
  bannerAlt: string;
}

interface TalkCardProps {
  talk: Talk;
  showFullDescription?: boolean;
}

export default function TalkCard({ talk, showFullDescription = false }: TalkCardProps) {
  const getTypeColor = (type: Talk["type"]) => {
    switch (type) {
      case "webinar":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "workshop":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "mentoring":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "conference":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getStatusColor = (status: Talk["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200";
      case "ongoing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "past":
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const description = showFullDescription ? talk.description : talk.shortDesc;

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      {/* Banner Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={talk.bannerImage}
          alt={talk.bannerAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Status and Type Badges on Image */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          <Badge className={getTypeColor(talk.type)} variant="secondary">
            {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
          </Badge>
          <Badge className={getStatusColor(talk.status)} variant="secondary">
            {talk.status.charAt(0).toUpperCase() + talk.status.slice(1)}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2">
          {talk.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{formatDate(talk.date)}</span>
          </div>

          {talk.duration && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.duration}</span>
            </div>
          )}

          {talk.audience && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.audience}</span>
            </div>
          )}

          {talk.attendees && talk.status === "past" && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.attendees} attendees</span>
            </div>
          )}

          {talk.platform && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Video className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.platform}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {talk.topics.slice(0, 4).map((topic, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
          {talk.topics.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{talk.topics.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          {!showFullDescription && (
            <Button variant="outline" asChild className="flex-1">
              <Link href={`/talks/${talk.id}`}>
                View Details
              </Link>
            </Button>
          )}

          {talk.status === "upcoming" && talk.registrationUrl && (
            <Button asChild className={showFullDescription ? "flex-1" : "flex-1"}>
              <a
                href={talk.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Register
              </a>
            </Button>
          )}

          {talk.status === "past" && talk.recordingUrl && (
            <Button variant="outline" asChild className={showFullDescription ? "flex-1" : "flex-1"}>
              <a
                href={talk.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <Video className="h-4 w-4 mr-2" />
                Watch Recording
              </a>
            </Button>
          )}

          {talk.status === "ongoing" && (
            <Button disabled className="flex-1">
              In Progress
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}