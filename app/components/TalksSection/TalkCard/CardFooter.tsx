import React from 'react';
import { CardFooter as CoreCardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FilteredTalkData } from '@/app/talks/types';
import { useRouter } from '@/routes/navigation';
import { ExternalLink, Video } from 'lucide-react';

type CardFooterPropsType = {
  talkId: string;
  status: FilteredTalkData['status'];
  registrationUrl?: FilteredTalkData['registrationUrl'];
  recordingUrl?: FilteredTalkData['recordingUrl'];
};

const CardFooter = ({
  talkId,
  status,
  registrationUrl,
  recordingUrl,
}: CardFooterPropsType) => {
  const router = useRouter();

  const redirectToTalkDetail = () => router.push(`/talks/${talkId}`);

  return (
    <CoreCardFooter className="pt-4">
      <div className="flex gap-2 w-full">
        <Button
          variant="outline"
          className="flex-1"
          onClick={redirectToTalkDetail}
        >
          {/* <Link href={`/talks/${talkId}`}>View Details</Link> */}
          View Details
        </Button>

        {status === 'upcoming' && registrationUrl && (
          <Button asChild className="flex-1">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Register
            </a>
          </Button>
        )}

        {status === 'past' && recordingUrl && (
          <Button variant="outline" asChild className="flex-1">
            <a
              href={recordingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <Video className="h-4 w-4 mr-2" />
              Watch Recording
            </a>
          </Button>
        )}

        {status === 'ongoing' && (
          <Button disabled className="flex-1">
            In Progress
          </Button>
        )}
      </div>
    </CoreCardFooter>
  );
};

export default CardFooter;
