import { useState } from "react";
import { closeIcon, hamburgerIcon, logo, patternMobileNav } from "../images";
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
    <header className="fixed z-50 w-full">
      <nav className="flex items-center justify-between p-6 bg-white xl:px-40 md:py-4 md:px-8">
        <a href="#">
          <img src={logo} alt="insurance logo" />
        </a>
          <ul className="flex items-center font-bold tracking-widest uppercase xl:text-base xl:gap-8 max-md:hidden font-plain text-dark-grayish-violet md:gap-6 md:text-sm">
            <li className="hover:text-black">
              <a href="#">how we work</a>
            </li>
            <li className="hover:text-black">
              <a href="#">blog</a>
            </li>
            <li className="hover:text-black">
              <a href="#">account</a>
            </li>
            <button className="py-2 tracking-widest text-black uppercase border-2 border-black px-7 hover:bg-black hover:text-white">
              view plans
            </button>
          </ul>
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
            className="z-20 w-full overflow-hidden text-white bg-very-dark-violet"
          >
            <ul className="relative flex flex-col items-center h-screen gap-5 py-8 text-base font-semibold tracking-widest text-white uppercase bg-very-dark-violet">
              <div className="absolute w-full bottom-20">
                <img className="w-full max-h-[200px]" src={patternMobileNav} alt="pattern" />
              </div>
              <li className="hover:underline">
                <a href="#">how we work</a>
              </li>
              <li className="hover:underline">
                <a href="#">blog</a>
              </li>
              <li className="hover:underline">
                <a href="#">account</a>
              </li>
              <button className="text-white uppercase border-2 border-white w-[80%] py-2 hover:bg-white hover:text-very-dark-violet">
                view plans
              </button>
            </ul>
          </motion.nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
