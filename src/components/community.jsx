import ScrollAnimation from "react-animate-on-scroll";
import { Icons } from "../assets";

const Community = ({ offset }) => {
  return (
    <div id="community">
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <h1 className="text-[white] text-[35px] text-center lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem] mb-[4rem]">
          join our community of{" "}
          <span className="gradient">GODZinu hunters</span>
        </h1>
        <section className="flex flex-col gap-[4rem] lg:gap-[0] md:flex-row items-center">
          <img
            src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877980/hunters_wzwh6p.svg"
            alt=""
            className="w-[100%] md:w-[50%] gap-[5rem]"
          />
          <div className="flex flex-wrap  w-[100%] lg:w-[50%] lg:ml-[5rem] pl-[5rem] lg:pl-[0]">
            <a
              href="https://godzillaproject.io/GodzillaWhitepaper.pdf"
              className="w-[50%]"
            >
              <img
                src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877977/comreddit_bzk2lb.png"
                alt=""
                className="lg:w-[40 %]  w-[40%]"
              />
            </a>
            <a href="https://twitter.com/GODZinu_io" className="w-[50%]">
              <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877979/comtwitter_rfq1dd.png" alt="" className="w-[50%]" />
            </a>
            <a
              href="https://medium.com/@GODZinu_io"
              className="w-[50%] mt-[5rem]"
            >
              <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877974/commedium_rl9atl.png" alt="" className="w-[50%]" />
            </a>
            <a href="https://t.me/GODZinu" className="w-[50%] mt-[5rem]">
              <img src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877979/comtelegram_qrty08.png" alt="" className="w-[50%]" />
            </a>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Community;
