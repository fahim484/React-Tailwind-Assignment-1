import { navItems } from "../../lib/db";
import { NavLink  } from "react-router-dom";
import { cn } from "../../lib/utils/cn";

export const NavItems = ({ active, onClick }) => {
  return (
    <div className="hidden lg:flex justify-center items-center lg:gap-4 xl:gap-[35px]">
      {navItems.map(({ label, link }, i) => (
        <NavLink to={link} key={i}>
          <button onClick={onClick}>
            <p className={cn("text-secondary text-sm xl:text-base hover:text-primary transition-colors duration-150", active && 'text-accent')}>
              {label}
            </p>
          </button>
        </NavLink>
      ))}
    </div>
  );
};
