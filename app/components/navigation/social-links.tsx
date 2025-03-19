import { ReactElement } from "react";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import { socialLinks } from "@/app/lib/data/navigation";

const socialIcons: { [key: string]: ReactElement } = {
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedinIcon />,
};

function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {socialIcons[link.title]}
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
