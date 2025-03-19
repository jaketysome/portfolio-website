import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ProjectContext {
  currentCategory: ProjectCategory;
  setCurrentCategory: Dispatch<SetStateAction<ProjectCategory>>;
}

const ProjectContext = createContext<ProjectContext>({
  currentCategory: "all",
  setCurrentCategory: () => {},
});

export const ProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentCategory, setCurrentCategory] =
    useState<ProjectCategory>("all");

  return (
    <ProjectContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (!context)
    throw new Error("useProject must be used within a ProjectContextProvider!");

  return context;
};
