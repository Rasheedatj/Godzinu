import { Icons } from "../assets";
import Team from "./team";
import Staking from "./staking";
import Token from "./token";
import Buy from "./buy";
import Faq from "./faq";
import Roadmap from "./roadmap";
import SuperPower from "./superpowers";
import Partner from "./partner";
import Community from "./community";
import TwitterTimeline from "./tweets";

const Hexagon = ({ offset }) => {
  return (
    <div className="pb-[5rem] pt-[0] lg:py-[5rem]">
      {/* --------hexagon-------- */}
      <div className="flex flex-col items-center gap-[3rem] lg:gap-[7rem]">
        <h1 className="text-[white] text-[35px] text-center lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize">
          GODZinu <span className="gradient">tokenomics</span>
        </h1>

        <div>
          <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877977/hexagon_teqaom.svg" alt="" />
        </div>
      </div>
      {/* buy */}
      <Buy offset={offset} />
      {/* -----staking program-------- */}
      <Staking offset={offset} />
      {/*------------ token links-------- */}
      <Token offset={offset} />
      {/* ------team-------- */}
      <Team />
      {/* -----Partner */}
      <Partner offset={offset} />
      {/* -------roadmap-------- */}
      <Roadmap offset={offset} />
      {/* -------roadmap-------- */}
      <TwitterTimeline offset={offset} />

      {/* --------super powers-------- */}
      <SuperPower offset={offset} />

      {/* ---faq----- */}
      <Faq />
      {/* --------join our community------------ */}
      <Community offset={offset} />
    </div>
  );
};

export default Hexagon;
