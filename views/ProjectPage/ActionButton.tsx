import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ActionButtonPropsType = {
  githubLink: string;
  linkToProject: string;
};

const ActionButton = ({ githubLink, linkToProject }: ActionButtonPropsType) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-2">
      {githubLink && (
        <Button
          variant="ghost"
          size="sm"
          asChild
          onClick={(e) => e.stopPropagation()}
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
          </a>
        </Button>
      )}
      {linkToProject && (
        <Button
          variant="ghost"
          size="sm"
          asChild
          onClick={(e) => e.stopPropagation()}
        >
          <a href={linkToProject} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  </div>
);

export default ActionButton;
