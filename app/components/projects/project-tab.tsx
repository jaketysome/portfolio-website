"use client";

import clsx from "clsx";
import { useProject } from "@/app/context/project-context";

function ProjectTab({ category }: { category: ProjectCategory }) {
  const { currentCategory, setCurrentCategory } = useProject();

  return (
    <button
      className={clsx(
        currentCategory === category && "active",
        "tab capitalize",
      )}
      onClick={() => setCurrentCategory(category)}
    >
      {category}
    </button>
  );
}

export default ProjectTab;
