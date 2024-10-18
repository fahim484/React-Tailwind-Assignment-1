import { cn } from "../../lib/utils/cn";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-3 sm:py-[17px] px-3.5 sm:px-[25px] bg-primary opacity-90 transition-all delay-150 hover:opacity-100 text-[#FAFAFA] rounded-md text-xs md:text-base",
        className
      )}
    >
      {children}
    </button>
  );
};
