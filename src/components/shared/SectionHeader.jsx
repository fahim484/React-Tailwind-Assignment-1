import React from "react";
import { Input, Sort } from "../common/Input";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Plus } from "../Icon";
import { useNavigate } from "react-router-dom";

export const SectionHeader = ({ progressTitle, title, btn }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Incidents") {
      navigate("/new-incident"); // Redirect to the target page
    }
  };

  return (
    <Container className="max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-5 xl:gap-[30px] px-5 lg:px-14 xl:px-[85.5px] pt-8">
        <div>
          <p className="text-secondary text-xs leading-[15.3px] text-center lg:text-start">
            {progressTitle}
          </p>
          <h1 className="text-[#09090B] font-bold text-[26px] leading-[33.15px] pb-5 cursor-pointer">
            {title}
          </h1>
        </div>
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-2 lg:gap-3 xl:gap-[14px]
           sm:px-0"
        >
          <Input />
          <Sort />
          <Button onClick={handleClick}>
            {title === "Incidents" && <Plus />}
            {btn}
          </Button>
        </div>
      </div>
    </Container>
  );
};
