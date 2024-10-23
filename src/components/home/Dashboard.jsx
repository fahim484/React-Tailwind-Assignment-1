import { Container } from "../common/Container";
import { disastersLocationsInfo } from "../../lib/db";
import { Card } from "./Card";
import { Chatbot } from "../shared/Chatbot";
import { SectionHeader } from "../shared/SectionHeader";

export const Dashboard = () => {
  return (
    <section>
      <SectionHeader progressTitle="Welcome back" title="Dashboard" btn="Cypher AI" />
      <Container className="lg:px-5">
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2 md:gap-5 lg:gap-[50px]">
          {disastersLocationsInfo.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
        <Chatbot />
      </Container>
    </section>
  );
};
