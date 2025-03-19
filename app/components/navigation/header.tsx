import NavLinks from "./nav-links";
import SocialLinks from "./social-links";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">JT</div>
          <NavLinks />
          <SocialLinks />
        </nav>
      </div>
    </header>
  );
}

export default Header;
