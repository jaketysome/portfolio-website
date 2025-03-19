import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import NavLinks from "./nav-links";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">JT</div>
          <NavLinks />
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
