"use client";

import { TalkDataTypes } from "@/app/talks/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface TalkDescriptionProps {
  talk: TalkDataTypes;
}

export default function TalkDescription({ talk }: TalkDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          About This {talk.type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {talk.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
