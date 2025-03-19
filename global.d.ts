type ProjectCategory = "professional" | "portfolio";

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink: string;
    githubLink: string;
    category: ProjectCategory;
}