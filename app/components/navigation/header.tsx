import Image from "next/image";
import NavLinks from "./nav-links";
import SocialLinks from "./social-links";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Image
            src="/images/logo.png"
            alt="Jake Tysome Logo"
            width={40}
            height={40}
          />
          <NavLinks />
          <SocialLinks />
        </nav>
      </div>
    </header>
  );
}

export default Header;
