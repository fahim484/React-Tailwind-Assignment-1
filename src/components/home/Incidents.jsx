import { Container } from "../common/Container";
import { disastersLocationsInfo } from "../../lib/db";
import { Card } from "./Card";

export const Incidents = () => {
  return (
    <section className="absolute top-[100%] left-0 right-0">
      <Container>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2 md:gap-5 lg:gap-[50px]">
          {disastersLocationsInfo.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
