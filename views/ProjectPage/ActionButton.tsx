import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useRouter } from '@/routes/navigation';

type ActionButtonPropsType = {
  githubLink: string;
  linkToProject: string;
  projectId?: number;
};

const ActionButton = ({
  githubLink,
  linkToProject,
  projectId,
}: ActionButtonPropsType) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-2">
        {githubLink && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push(githubLink)}
          >
            <Github className="h-4 w-4" />
          </Button>
        )}
        {linkToProject && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push(linkToProject)}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
      </div>
      {projectId && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push(`/project/${projectId}`)}
        >
          <Eye className="h-4 w-4 mr-2" />
          View Detail
        </Button>
      )}
    </div>
  );
};

export default ActionButton;
