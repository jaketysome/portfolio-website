import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
        LinkedIn
      </a>
    </div>
  );
}

export default SocialLinks;
