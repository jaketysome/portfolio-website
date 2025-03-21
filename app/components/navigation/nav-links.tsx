import { navLinks } from "@/app/lib/data/navigation";

function NavLinks() {
  const isJumpLink = (href: string) => {
    return href.slice(0, 1) === "#";
  };

  return (
    <div className="nav-links">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="link"
          target={isJumpLink(link.href) ? "" : "_blank"}
          rel="noopener noreferrer"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
