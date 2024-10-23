import { incidentsFirstPageCard } from "../../../lib/db";
import { Button } from "../../common/Button";
import { Container } from "../../common/Container";
import { IncidentsFirstPageCard } from "./IncidentsFirstPageCard";

export const IncidentsFirstPage = () => {
  return (
    <section className="mt-[85px]">
      <Container className="px-0px md:px-36">
        <div class="text-center">
          <h1 class="text-[32px] font-bold leading-10">Let’s get started</h1>
          <p class="text-[16px] text-[#71717A] pt-1">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br />{" "}
            dolar sit general sac mascho werhoLorem ipsum dolar sit gene
          </p>
        </div>

        <div class="relative">
          <div class="w-full sm:max-w-[548px] xl:max-w-[658px] h-[3px] mt-3 bg-[#E4E4E7] absolute left-[50%] top-[10.3%] translate-x-[-50%] translate-y-[-33.3%]"></div>
          <div class=" w-full grid grid-cols-3 place-items-center mt-3">
            <div class="w-[29px] h-[29px] rounded-full bg-[#E4E4E7]"></div>
            <div class="w-[29px] h-[29px] rounded-full bg-[#E4E4E7]"></div>
            <div class="w-[29px] h-[29px] rounded-full bg-[#E4E4E7]"></div>
          </div>
        </div>

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-2 md:gap-5 lg:gap-[50px]">
          {incidentsFirstPageCard.map((card, i) => (
            <IncidentsFirstPageCard key={i} {...card} />
          ))}
        </div>
        <div className="text-center">
          <Button className="mt-[85px]">Get started</Button>
        </div>
      </Container>
    </section>
  );
};
