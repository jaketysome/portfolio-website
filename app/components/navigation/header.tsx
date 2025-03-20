"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import NavLinks from "./nav-links";
import SocialLinks from "./social-links";

const useScroll = () => {
  const [scrollYPos, setScrollYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollYPos;
};

function Header() {
  const scrollYPos = useScroll();

  return (
    <header
      className={clsx(
        scrollYPos > 32 &&
          "bg-darker border-secondary sticky top-0 border-b-4 pt-0",
        "z-50 mt-6 duration-200 ease-in-out",
      )}
    >
      <div className="container">
        <nav>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Jake Tysome Logo"
              width={40}
              height={40}
            />
          </Link>
          <NavLinks />
          <SocialLinks />
        </nav>
      </div>
    </header>
  );
}

export default Header;
