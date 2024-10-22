import { locationsInfo, locationsInfoCardActivities, locationsInfoCardAddress, locationsInfoCardDocuments } from "../../lib/db";
import { Container } from "../common/Container";
import { Card } from "./Card";
import { LocationsCardBottom } from "./LocationsCardBottom";
import { LocationsCardTop } from "./LocationsCardTop";

export const Locations = () => {
  return (
    <section className="absolute top-[100%] left-0 right-0 pt-10">
      <Container className="flex gap-5 lg:gap-5 justify-center md:justify-between items-center flex-col-reverse lg:flex-row lg:p-[20px] xl:p-2">
        <div className="max-w-[677px] w-[80%] md:w-[550px] xl:w-auto mx-auto">
          <div className="space-y-[15px]">
            {locationsInfoCardAddress.map((card, i) => (
              <LocationsCardTop {...card} key={i} />
            ))}
          </div>

          <div className="text-[#E4E4E7] border-b-[1px] my-3 md:my-5 lg:my-10"></div>

          <div>
            <h2 className="text-[#000000] font-bold text-sm leading-[22px]">
              Description
            </h2>
            <p className="text-secondary text-base leading-[22px] text-fluid">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>

          <div className="text-[#E4E4E7] border-b-[1px] my-3 md:my-5 lg:my-10"></div>

          <div className="flex justify-between items-center pb-[15px]">
            <h2 className="text-[#000000] font-bold text-sm leading-[22px]">
              Locations
            </h2>
            <p className="text-[#A1A1AA]  text-sm leading-[22px]">See all</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-2 md:gap-5 lg:gap-y-[68px] pb-16">
            {locationsInfo.map((card, i) => (
              <Card
                key={i}
                {...card}
                className="w-[214.2px] h-[241.5px] pt-0"
              />
            ))}
          </div>

          <div className="text-[#E4E4E7] border-b-[1px] my-3 md:my-5 lg:my-10"></div>

            {/* Activities Card Area */}
          <div className="space-y-[15px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[#000000] font-bold text-sm leading-[22px]">
                Locations
              </h2>
              <p className="text-[#A1A1AA]  text-sm leading-[22px]">See all</p>
            </div>
            {locationsInfoCardActivities.map((card, i) => (
              <LocationsCardBottom {...card} key={i} />
            ))}
          </div>


          <div className="text-[#E4E4E7] border-b-[1px] my-3 md:my-5 lg:my-10"></div>

            {/* Documents Card Area */}
          <div className="space-y-[15px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[#000000] font-bold text-sm leading-[22px]">
              Documents
              </h2>
              <p className="text-[#A1A1AA]  text-sm leading-[22px]">See all</p>
            </div>
            {locationsInfoCardDocuments.map((card, i) => (
              <LocationsCardBottom {...card} key={i} />
            ))}
          </div>



        </div>

        <div className="pb-10 lg:pb-80">
          <img
            src="Img/location-map-img.png"
            className="w-[80%] md:w-[550px] xl:w-auto mx-auto"
            alt="GoverningDocs Home Hero Image"
          />
        </div>
      </Container>
    </section>
  );
};
