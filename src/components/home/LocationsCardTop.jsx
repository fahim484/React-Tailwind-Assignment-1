import { cn } from "../../lib/utils/cn";

/* eslint-disable react/prop-types */
export const LocationsCardTop = ({ image, title, address, amount, className }) => (
  <div
    className={cn(
      "max-w-[428px] max-h-[39px] group flex justify-start items-center gap-[15px]",
      className
    )}
  >
    <img src={image} alt={title} className="cursor-pointer" />
    <div>
      <p className="text-[#6B7280] leading-[22px] text-sm">{title}</p>
      <h1 className="font-bold group-hover:text-gray-400 text-xs sm:text-[20px] sm:leading-[29px] text-[#09090B] cursor-pointer">
        {address || amount}
      </h1>
    </div>
  </div>
);
