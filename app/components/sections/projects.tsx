import ProjectGrid from "../projects/project-grid";
import projects from "@/app/lib/data/projects";
import ProjectTabs from "../projects/project-tabs";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <ProjectTabs />
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}

export default Projects;
