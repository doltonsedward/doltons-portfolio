import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type CTASectionPropsType = {
  githubLink: string;
  linkToProject: string;
};

const CTASection = ({ githubLink, linkToProject }: CTASectionPropsType) => (
  <div className="flex gap-4 mb-8">
    {githubLink && (
      <Button variant="outline" asChild>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-2" />
          View Code
        </a>
      </Button>
    )}
    {linkToProject && (
      <Button asChild>
        <a href={linkToProject} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" />
          Live Demo
        </a>
      </Button>
    )}
  </div>
);

export default CTASection;
