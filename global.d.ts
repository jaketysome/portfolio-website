interface Link {
    title: string;
    href: string;
}

type ProjectCategory = "professional" | "portfolio" | "all projects";

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    category: ProjectCategory;
}