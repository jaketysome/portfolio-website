import { navLinks } from "@/app/lib/data/navigation";

function NavLinks() {
  return (
    <div className="nav-links">
      {navLinks.map((link, index) => (
        <a key={index} href={link.href} className="link">
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
