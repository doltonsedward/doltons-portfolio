'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
  getStatusColor,
  getTypeColor,
} from '@/views/TalkDetail/utils/talkHelpers';
import { FilteredTalkData } from '@/app/talks/types';

interface TalkHeaderProps {
  talk: FilteredTalkData;
}

export default function TalkHeader({ talk }: TalkHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#talks" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Talks
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={getTypeColor(talk.type)} variant="secondary">
            {talk.type}
          </Badge>
          <Badge className={getStatusColor(talk.status)} variant="secondary">
            {talk.status}
          </Badge>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {talk.title}
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {talk.shortDesc}
        </p>
      </div>
    </div>
  );
}
