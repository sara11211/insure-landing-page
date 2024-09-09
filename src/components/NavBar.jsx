import { useState } from "react";
import { closeIcon, hamburgerIcon, logo, patternMobileNav } from "../images";
import Button from "./Button";
import { motion } from "framer-motion";

const menuVariants = {
  open: {
    height: "100vh",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-30 w-full">
      <nav className="flex items-center justify-between px-5 py-6 bg-white">
        <a href="#">
          <img src={logo} alt="insurance logo" />
        </a>
        <div className="max-md:hidden">
          <ul>
            <li>
              <a href="#">how we work</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">account</a>
            </li>
          </ul>
          <Button />
        </div>
        <button href="#" className="md:hidden" onClick={() => onMenuClick()}>
          <img
            src={`${isMenuOpen ? closeIcon : hamburgerIcon}`}
            alt="hamburger menu icon"
          />
        </button>
      </nav>
      {isMenuOpen && (
        <div>
          <motion.nav
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            className="z-20 w-full overflow-hidden bg-very-dark-violet text-very-light-gray"
          >
            <ul className="relative flex flex-col items-center h-screen gap-5 py-8 text-sm font-semibold tracking-widest uppercase bg-very-dark-violet text-very-light-gray">
              <div className="absolute bottom-20">
                <img src={patternMobileNav} alt="pattern" />
              </div>
              <li>
                <a href="#">how we work</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">account</a>
              </li>
              <Button text="view plans" full={true} />
            </ul>
          </motion.nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
