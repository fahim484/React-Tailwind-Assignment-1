import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";
import { useEffect, useState } from "react";
import { NavItems } from "../common/NavItems";
import { Bell } from "../Icon";
import { Input, Sort } from "../common/Input";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // [0] useState
  // const toggleMenus = () => setIsMenusOpen(!isMenusOpen);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    // Add or remove the 'no-scroll' class to the body to prevent background scrolling
    const bodyClass = document.body.classList;

    isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");

    // Cleanup when the component is unmounted or menu is closed
    return () => bodyClass.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <nav className="py-2 sm:py-4 xl:py-[23px] relative bg-[#E4E4E780]">
      <Container className="w-full max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center lg:gap-5 xl:gap-[30px] px-5 lg:px-14 xl:px-[85.5px]">
          <a href="/">
            <img src="Img/Navbar-Main-Logo.png" alt="" />
          </a>

          {/* Navigation items for large screens */}
          <div>
            <NavItems />
          </div>
          <div className="flex justify-center items-center gap-2.5">
            {/* Hamburger button for mobile */}
            <button
              className="block lg:hidden text-accent"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
              </div>
            </button>

            <div className="flex justify-center items-center gap-[9px] ">
              <Bell className="cursor-pointer" />
              <img
                src="Img/Navbar-Profile.png"
                alt="Profile Avatar"
                className="cursor-pointer"
              />
              <div className="text-secondary">
                <h2 className="font-semibold text-base leading-[20.4px]">
                  Usman Zafar
                </h2>
                <p className="text-sm leading-[17.85px]">
                  usmanzafar@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* horizontal line and navigation items indicator */}
        <div className="text-[#E4E4E7] border-t-[1px] mt-2 md:mt-3 lg:mt-[15px]"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-5 xl:gap-[30px] px-5 lg:px-14 xl:px-[85.5px] pt-8">
          <div>
            <p className="text-secondary text-xs leading-[15.3px] text-center lg:text-start">Welcome back</p>
            <h1 className="text-[#09090B] font-bold text-[26px] leading-[33.15px] pb-5 cursor-pointer">Dashboard</h1>
          </div>
          <div className="flex justify-center items-center gap-2 lg:gap-3 xl:gap-[14px]">
            <Input />
            <Sort />
            <Button>Cypher AI</Button>
          </div>
        </div>

        {/* Scrollable Mobile Menu */}
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </Container>
      <Outlet />
    </nav>
  );
};
