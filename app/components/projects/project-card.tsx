import Image from "next/image";
import ProjectLinks from "./project-links";
import ProjectTechList from "./project-tech-list";

function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    description,
    image,
    technologies,
    liveLink,
    githubLink,
    category,
  } = project;

  return (
    <div className="project-card" data-category={category}>
      <Image
        src={image}
        alt={title}
        className="project-img"
        width={480}
        height={200}
      />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ProjectTechList technologies={technologies} />
        <ProjectLinks {...{ liveLink, githubLink }} />
      </div>
    </div>
  );
}

export default ProjectCard;
