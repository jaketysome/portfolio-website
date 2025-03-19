import GithubIcon from "../icons/github-icon";

interface ProjectLinksProps {
  liveLink: string;
  githubLink: string;
}

function ProjectLinks({ liveLink, githubLink }: ProjectLinksProps) {
  return (
    <div className="project-links">
      <a href={liveLink} target="_blank" className="btn btn-outline">
        Live Demo
      </a>
      <a href={githubLink} target="_blank">
        <GithubIcon />
        GitHub
      </a>
    </div>
  );
}

export default ProjectLinks;
