import ProjectsPageViews from "@/views/ProjectPage";

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store",
  });
  const projects = await res.json();

  return <ProjectsPageViews projects={projects} />;
};

export default ProjectPage;
