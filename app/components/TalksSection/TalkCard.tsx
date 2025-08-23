"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Users, ExternalLink, Video } from "lucide-react";

export interface Talk {
  id: string;
  title: string;
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
}

interface TalkCardProps {
  talk: Talk;
}

export default function TalkCard({ talk }: TalkCardProps) {
  const getTypeColor = (type: Talk["type"]) => {
    switch (type) {
      case "webinar":
        return "bg-blue-100 text-blue-800";
      case "workshop":
        return "bg-green-100 text-green-800";
      case "mentoring":
        return "bg-purple-100 text-purple-800";
      case "conference":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: Talk["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-emerald-100 text-emerald-800";
      case "ongoing":
        return "bg-yellow-100 text-yellow-800";
      case "past":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-800";
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

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge className={getTypeColor(talk.type)} variant="secondary">
            {talk.type.charAt(0).toUpperCase() + talk.type.slice(1)}
          </Badge>
          <Badge className={getStatusColor(talk.status)} variant="secondary">
            {talk.status.charAt(0).toUpperCase() + talk.status.slice(1)}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 leading-tight">
          {talk.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-gray-700 mb-4 leading-relaxed">{talk.description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{formatDate(talk.date)}</span>
          </div>

          {talk.duration && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.duration}</span>
            </div>
          )}

          {talk.audience && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.audience}</span>
            </div>
          )}

          {talk.attendees && talk.status === "past" && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.attendees} attendees</span>
            </div>
          )}

          {talk.platform && (
            <div className="flex items-center text-sm text-gray-600">
              <Video className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{talk.platform}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {talk.topics.map((topic, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          {talk.status === "upcoming" && talk.registrationUrl && (
            <Button asChild className="flex-1">
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
            <Button variant="outline" asChild className="flex-1">
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