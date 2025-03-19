function ProjectTechList({ technologies }: { technologies: string[] }) {
  return (
    <div className="project-tech">
      {technologies.map((technology, index) => (
        <span key={index} className="tech-tag">
          {technology}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechList;
