"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Video } from "lucide-react";
import Link from "next/link";
import { FilteredTalkData } from "@/app/talks/types";

type TalkActionsPropsType = {
  status: FilteredTalkData["status"];
  registrationUrl: FilteredTalkData["registrationUrl"];
  recordingUrl: FilteredTalkData["recordingUrl"];
};

const TalkActions = ({
  status,
  registrationUrl,
  recordingUrl,
}: TalkActionsPropsType) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {status === "upcoming" && registrationUrl && (
            <Button asChild className="w-full">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Register Now
              </a>
            </Button>
          )}

          {status === "past" && recordingUrl && (
            <Button variant="outline" asChild className="w-full">
              <a
                href={recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Video className="h-4 w-4" />
                Watch Recording
              </a>
            </Button>
          )}

          {status === "ongoing" && registrationUrl && (
            <Button asChild className="w-full">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Join Session
              </a>
            </Button>
          )}

          <Button variant="outline" asChild className="w-full">
            <Link href="/#talks">View All Talks</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalkActions;
