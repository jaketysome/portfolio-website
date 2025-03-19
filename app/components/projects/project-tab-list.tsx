import { projectCategories } from "@/app/lib/data/projects";

function ProjectTabList() {
  return (
    <div className="project-tabs">
      {projectCategories.map((category, index) => (
        <div key={index} className="tab active" data-tab="all">
          {category}
        </div>
      ))}
    </div>
  );
}

export default ProjectTabList;
