import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} />
        </a>
        <ul className="flex-1 flex justify-center gap-20">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-sans leading-normal text-lg text-gray-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img src={hamburger} alt="hamburger" width={25} height={25}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
