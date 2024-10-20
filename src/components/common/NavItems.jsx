import { navItems } from "../../lib/db";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils/cn";

export const NavItems = ({ active, setActive }) => {
  return (
    <div className="hidden lg:flex justify-center items-center lg:gap-4 xl:gap-[35px]">
      {navItems.map(({ label, link }, i) => (
        <NavLink to={link} key={i} onClick={() => setActive(i)}>
          <p
            className={cn(
              "text-secondary text-sm xl:text-base hover:text-primary transition-colors duration-150",
              active === i && "text-accent"
            )}
          >
            {label}
          </p>
        </NavLink>
      ))}
    </div>
  );
};
