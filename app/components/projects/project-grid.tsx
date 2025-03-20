"use client";

import { useProject } from "@/app/context/project-context";
import ProjectCard from "./project-card";
import { useEffect, useState } from "react";

function ProjectGrid({ projects }: { projects: Project[] }) {
  const { currentCategory } = useProject();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const filterProjectsByCategory = (projects: Project[]) => {
      if (projects.length < 1 || currentCategory === "all projects")
        return projects;

      return projects.filter((project) => project.category === currentCategory);
    };

    setFilteredProjects(filterProjectsByCategory(projects));
  }, [currentCategory, projects]);

  return (
    <div className="project-grid">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;
