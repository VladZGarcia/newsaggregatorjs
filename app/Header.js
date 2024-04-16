'use client'

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import SideBar from "./SideBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // 768px is the medium breakpoint
    };
    handleResize(); // Initialize the state on component mount
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (isMenuOpen && !event.target.closest('.header-menu')) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [isMenuOpen]);

  return (
    <header>
        <div className="grid grid-cols-3  p-10 items-center">
        <div>
        {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8 cursor-pointer md:hidden" onClick={toggleMenu} />
            ) : (
              <Bars3Icon className="h-8 w-8 cursor-pointer md:hidden" onClick={toggleMenu} />
            )}
        </div>
            
            <Link href='/'>
              <div className="justify-end">
                <h1 className="font-serif text-4xl text-center">El{" "}
                  <span className="underline decoration-6 decoration-orange-400">
                    Mensajero
                  </span>
                </h1>
              </div>
            </Link>
            <div className="flex items-center justify-end space-x-2">
                <DarkModeButton/>
                {/* <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                    Subscrivete
                </button> */}
            </div>
        </div>
        {isMenuOpen || isMediumScreen ? (
          <>
            <NavLinks />
          </>
        ) : null}
        <SearchBox />
    </header>
  );
}

export default Header;

