import ProjectCard from "./project-card";

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
}

export default ProjectGrid;
