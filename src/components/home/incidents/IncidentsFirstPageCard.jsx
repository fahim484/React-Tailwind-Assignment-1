import { cn } from "../../../lib/utils/cn";


export const IncidentsFirstPageCard = ({
  image,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-[235px] h-[269px] bg-[#F4F4F5] border border-[#E4E4E7] rounded-[10px] flex flex-col justify-between px-5 py-[25px] group",
        className
      )}
    >
      <div>
        <img src={image} alt={title}/>
      </div>
      <div>
          <h1 className="font-bold group-hover:text-gray-400 text-[20px] leading-[29px] text-[#09090B] cursor-pointer">
            {title}
          </h1>
    
          <p className="text-secondary leading-[22px] text-sm">{description}</p>
      </div>
    </div>
  );
};
