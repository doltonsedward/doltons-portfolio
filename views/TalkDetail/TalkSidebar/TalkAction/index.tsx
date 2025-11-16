'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@heroui/react';
import { ExternalLink, Video } from 'lucide-react';
import Link from 'next/link';
import { FilteredTalkData } from '@/app/talks/types';

type TalkActionsPropsType = {
  status: FilteredTalkData['status'];
  registrationUrl: FilteredTalkData['registrationUrl'];
  recordingUrl: FilteredTalkData['recordingUrl'];
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
          {status === 'upcoming' && registrationUrl && (
            <Button
              as="a"
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              className="w-full"
              startContent={<ExternalLink className="h-4 w-4" />}
            >
              Register Now
            </Button>
          )}

          {status === 'past' && recordingUrl && (
            <Button
              as="a"
              href={recordingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              className="w-full"
              startContent={<Video className="h-4 w-4" />}
            >
              Watch Recording
            </Button>
          )}

          {status === 'ongoing' && registrationUrl && (
            <Button
              as="a"
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              className="w-full"
              startContent={<ExternalLink className="h-4 w-4" />}
            >
              Join Session
            </Button>
          )}

          <Button as={Link} href="/#talks" color="primary" className="w-full">
            View All Talks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalkActions;
