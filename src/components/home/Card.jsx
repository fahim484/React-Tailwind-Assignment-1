/* eslint-disable react/prop-types */
export const Card = ({ image, title, address, money }) => (
  <div className=" w-[306px] h-[337px] pt-5 group">
    <img src={image} alt={title} className="cursor-pointer" />
    <h1 className="font-bold group-hover:text-gray-400 text-base leading-[30px] text-[#09090B] cursor-pointer">
      {title}
    </h1>

    <p className="text-secondary leading-[30px] text-sm">{address}</p>
    <h1 className="font-bold text-base leading-[30px] text-[#09090B]">
      {money}
    </h1>
  </div>
);
