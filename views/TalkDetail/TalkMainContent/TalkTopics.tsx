"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
import { TalkDataTypes } from "@/app/talks/types";

interface TalkTopicsProps {
  talk: TalkDataTypes;
}

export default function TalkTopics({ talk }: TalkTopicsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Topics Covered
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {talk.topics.map((topic, index) => (
            <Badge key={index} variant="outline" className="text-sm">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
