import { navItems } from "../../lib/db";
import { NavLink, Outlet  } from "react-router-dom";

export const NavItems = () => {
  return (
    <div className="hidden lg:flex justify-center items-center lg:gap-4 xl:gap-[35px]">
      {navItems.map(({ label, link }, i) => (
        <NavLink to={link} key={i}>
          <p className="text-secondary text-sm xl:text-base hover:text-primary transition-colors duration-150">
            {label}
          </p>
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};
