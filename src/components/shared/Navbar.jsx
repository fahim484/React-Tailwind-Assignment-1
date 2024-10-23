import { Container } from "../common/Container";
import { MobileMenu } from "./MobileMenu";
import { useEffect, useState } from "react";
import { NavItems } from "../common/NavItems";
import { Bell } from "../Icon";
import { Outlet, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils/cn";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // navigation items indicator
  const location = useLocation(); // Get the current route location
  const [active, setActive] = useState(0); // Manage active state for nav items

  // Update active state based on the current path
  useEffect(() => {
    const pathToIndexMap = {
      "/": 0,
      "/dashboard": 1,
      "/incidents": 2,
      "/locations": 3,
    };
    const currentPath = location.pathname;
    setActive(pathToIndexMap[currentPath] ?? 0); // Set to 0 if path not found
  }, [location.pathname]);

  useEffect(() => {
    // Add or remove the 'no-scroll' class to the body to prevent background scrolling
    const bodyClass = document.body.classList;

    isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");

    // Cleanup when the component is unmounted or menu is closed
    return () => bodyClass.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <nav className="py-2 sm:py-4 xl:py-[23px] relative bg-[#E4E4E780]">
      <Container className="max-w-screen-2xl">
        <div className="flex justify-between items-center lg:gap-5 xl:gap-[30px] px-5 lg:px-14 xl:px-[85.5px]">
          <a href="/">
            <img src="Img/Navbar-Main-Logo.png" alt="" />
          </a>

          {/* Navigation items for large screens */}
          <div>
            <NavItems active={active} setActive={setActive} />
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
              <div className="text-secondary hidden sm:block">
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

        {/* navigation items indicator */}
        <div className="text-[#E4E4E7] border-b-[1px] mt-2 md:mt-3 lg:mt-[15px]">
          <div className="hidden lg:flex justify-center items-center lg:gap-4 xl:gap-[35px]">
            {Array.from(Array(6).keys()).map((el, index) => (
              <div
                key={el}
                className={cn(
                  "h-[3px] w-[95px] bg-accent rounded-[10px]",
                  active !== index && "bg-transparent"
                )}
              />
            ))}
          </div>
        </div>

        

        {/* Scrollable Mobile Menu */}
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </Container>
      <Outlet />
    </nav>
  );
};
