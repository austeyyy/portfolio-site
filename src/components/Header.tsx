"use client";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-green-900/15 rounded-full bg-white/75 backdrop-blur">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/main" label="About" />
        <TransitionLink href="/main#projects" label="Projects" />
        <TransitionLink href="/main#contact" label="Contact" />
        {/*<Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="/main" className="nav-item">
          About
        </Link>
        <Link href="/main#projects" className="nav-item">
          Projects
        </Link>
        <Link href="/main#contact" className="nav-item">
          Contact
        </Link> */}
      </nav>
    </div>
  );
};

export default Header;
