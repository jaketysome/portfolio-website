import ProjectGrid from "../projects/project-grid";
import projects from "@/app/lib/data/projects";
import ProjectTabList from "../projects/project-tab-list";
import { ProjectContextProvider } from "@/app/context/project-context";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <ProjectContextProvider>
          <ProjectTabList />
          <ProjectGrid projects={projects} />
        </ProjectContextProvider>
      </div>
    </section>
  );
}

export default Projects;
