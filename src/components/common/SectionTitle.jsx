import { cn } from "../../lib/utils/cn";

export const SectionTitle = ({ children, className, gradient }) => {
  return (
    <h1
      className={cn(
        "text-accent text-base md:text-xl lg:text-[26px] md:leading-[27.5px] lg:leading-[33.15px] font-bold text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};