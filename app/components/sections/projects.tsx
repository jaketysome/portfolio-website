import ProjectGrid from "../projects/project-grid";
import projects from "@/app/lib/data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-tabs">
          <div className="tab active" data-tab="all">
            All Projects
          </div>
          <div className="tab" data-tab="professional">
            Professional
          </div>
          <div className="tab" data-tab="portfolio">
            Portfolio
          </div>
        </div>
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}

export default Projects;
