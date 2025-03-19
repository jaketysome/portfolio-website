import { ReactElement } from "react";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import { socialLinks } from "@/app/lib/data/navigation";

const socialIcons: { [key: string]: ReactElement } = {
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedinIcon />,
};

function SocialLink({ link }: { link: Link }) {
  const { href, title } = link;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {socialIcons[title]}
      {title}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} link={link} />
      ))}
    </div>
  );
}

export default SocialLinks;
