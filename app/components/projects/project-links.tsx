import GithubIcon from "../icons/github-icon";

interface ProjectLinksProps {
  liveLink?: string;
  githubLink?: string;
}

function ProjectLinks({ liveLink, githubLink }: ProjectLinksProps) {
  return (
    <div className="project-links">
      {liveLink && (
        <a href={liveLink} target="_blank" className="btn btn-outline">
          Live Project
        </a>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" className="btn link flex gap-2">
          <GithubIcon />
          GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
