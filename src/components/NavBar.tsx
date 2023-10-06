import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {  Baggy, HamburgIcon } from "./Icons";
import { useState, useEffect, useCallback } from "react";
import {GrUser} from 'react-icons/gr'
import { HashLink } from "react-router-hash-link";

const HeaderAnimations = {
  show: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

const mobileListAnimations = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0.4,
  },
};

const mobileItemsAnimations = {
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
  },
  hidden: {
    scale: 0.3,
    opacity: 0.4,
    filter: "blur(20px)",
  },
};

const overlayAnimations = {
  show: {
    opacity: 0.15,
  },
  hidden: {
    opacity: 0,
  },
};

function Header() {

  const location = useLocation();

  const headerTabs = [
    {
    id: 1,
    name: "Tutorials",
    link: "Tutorials" },
    { 
        id: 2,
        name: "Tips", link: "Tips" },
    { 
        id: 3,
        name: "Articles", link: "Articles" },
  ];

  const [focused, setFocused] = useState<string | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 640) {
      setMenuOpen(false);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

  return (
    <>
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={overlayAnimations}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-slate-950 z-40"
        ></motion.div>
      )}
      <motion.header
        onMouseLeave={() => setFocused(null)}
        transition={{
          duration: 1,
          type: "spring",
        }}
        variants={HeaderAnimations}
        initial={"hidden"}
        animate={"show"}
        className="w-full px-2 sm:px-0 z-50 fixed top-6 sm:top-12 left-0 right-0"
      >
        <motion.div
          className={` ${
            isMenuOpen ? "shadow-lg" : "bg-slate-50/90"
          } flex flex-col w-full sm:w-fit mx-auto items-center rounded-xl border border-slate-200 hover:border-slate-300/90 dark:border-slate-800 dark:hover:border-slate-700/90  dark:bg-slate-900/90 transition duration-500 backdrop-blur-sm overflow-hidden`}
        >
          <div
            className={`flex flex-row px-1 py-[0.125rem] justify-between w-full sm:justify-normal ${
              isMenuOpen
                ? "border-b border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                : ""
            }`}
          >
            <div
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="flex sm:hidden px-2 py-2 rounded-lg"
            >
              <HamburgIcon
                className={`w-6 h-6 stroke-slate-800 hover:stroke-slate-700 dark:stroke-slate-200 dark:hover:stroke-slate-300 ${
                  isMenuOpen ? "rotate-45 scale-75" : "rotate-0"
                } transition duration-300 ease-in-out origin-center`}
              />
            </div>
            <div className="hidden sm:flex sm:flex-row items-center gap-2">
              <div className="flex">
                {headerTabs.map((headerTab) => (
                  <HashLink
                    smooth
                    key={headerTab.link}
                    onFocus={() => setFocused(headerTab.link)}
                    onMouseEnter={() => setFocused(headerTab.link)}
                    className="text-sm px-4 sm:px-3 py-2 text-slate-900 hover:text-slate-800 dark:text-slate-100 dark:hover:text-slate-200 transition duration-500 relative"
                    to={
                      location.pathname === "/"
                        ? "#" + headerTab.link
                        : "/#" + headerTab.link
                    }
                  >
                    {headerTab.name}
                    {focused === headerTab.link ? (
                      <motion.div
                        transition={{
                          layout: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                        className="hidden sm:block absolute top-0 left-0 right-0 w-full h-full bg-slate-200/75 dark:bg-slate-700/50 rounded-lg -z-10"
                        layoutId="highlight"
                      />
                    ) : null}
                  </HashLink>
                ))}
              </div>
              <div className="border-l h-3 w-[1px] border-slate-300 dark:border-slate-500 self-center hidden sm:block"></div>
              <div className="hidden sm:flex">
                <a
                  onFocus={() => setFocused("Github")}
                  onMouseEnter={() => setFocused("Github")}
                  className="group ml-1 w-9 h-9 flex justify-center items-center transition duration-500 relative"
                  href="https://github.com/yikZero/Roominess4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Baggy className="w-auto h-[1.125rem] fill-slate-900 group-hover:fill-slate-700 dark:fill-slate-100 dark:group-hover:fill-slate-300 transition duration-500" />
                  {focused === "Github" ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="hidden sm:block absolute top-0 left-0 right-0 w-full h-full bg-slate-200/75 dark:bg-slate-700/50 rounded-lg -z-10"
                      layoutId="highlight"
                    />
                  ) : null}
                </a>
                <a
                  onFocus={() => setFocused("dribble")}
                  onMouseEnter={() => setFocused("dribble")}
                  className="group w-9 h-9 flex justify-center items-center transition duration-500 relative"
                  href="https://www.dribble.com/file/igfCAMPleumYb92q6bZ9ZU/Roominess-4?type=design&node-id=0%3A1&mode=design&t=FWFYWMCibmIDcJoh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrUser className="w-auto h-[1.125rem] fill-slate-900 group-hover:fill-slate-700 dark:fill-slate-100 dark:group-hover:fill-slate-300" />
                  {focused === "dribble" ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="hidden sm:block  absolute top-0 left-0 right-0 w-full h-full bg-slate-200/75 dark:bg-slate-700/50 rounded-lg -z-10"
                      layoutId="highlight"
                    />
                  ) : null}
                </a>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={mobileListAnimations}
              className="w-full flex flex-col justify-center items-center py-4 px-4 origin-top bg-slate-50 dark:bg-slate-950"
            >
              {headerTabs.map((headerTab) => (
                <HashLink
                  smooth
                  key={headerTab.link}
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="text-base w-full font-medium text-slate-800 dark:text-slate-200"
                  to={
                    location.pathname === "/"
                      ? "#" + headerTab.link
                      : "/#" + headerTab.link
                  }
                >
                  <motion.div
                    variants={mobileItemsAnimations}
                    transition={{
                      duration: 0.1,
                    }}
                    className="py-3 text-right origin-right"
                  >
                    {" "}
                    {headerTab.name}
                  </motion.div>
                </HashLink>
              ))}
              <div className="flex flex-col w-full">
                <motion.a
                  variants={mobileItemsAnimations}
                  transition={{
                    duration: 0.1,
                  }}
                  className="flex justify-end items-center relative py-3 w-full origin-right"
                  href="https://github.com/yikZero/Roominess4"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  <GithubLogo className="w-[1.125rem] h-[1.125rem] fill-slate-900 group-hover:fill-slate-700 dark:fill-slate-100 dark:group-hover:fill-slate-300 transition duration-500" />
                </motion.a>
                <motion.a
                  variants={mobileItemsAnimations}
                  transition={{
                    duration: 0.1,
                  }}
                  className="flex justify-end items-center relative py-3 w-full origin-right"
                  href="https://www.dribble.com/file/igfCAMPleumYb92q6bZ9ZU/Roominess-4?type=design&node-id=0%3A1&mode=design&t=FWFYWMCibmIDcJoh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  <GrDribbble className="w-[1.125rem] h-[1.125rem] fill-slate-900 group-hover:fill-slate-700 dark:fill-slate-100 dark:group-hover:fill-slate-300" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.header>
    </>
  );
}

export default Header;
