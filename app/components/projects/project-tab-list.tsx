import ProjectTab from "./project-tab";
import { projectCategories } from "@/app/lib/data/projects";

function ProjectTabList() {
  return (
    <div className="project-tabs">
      {projectCategories.map((category, index) => (
        <ProjectTab key={index} category={category} />
      ))}
    </div>
  );
}

export default ProjectTabList;
