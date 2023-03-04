import { useState } from "react";
import { Icons } from "../assets";

const Header = () => {
  const [openMenu, setCompanyOpen] = useState(false);

  const handleClick = () => {
    setCompanyOpen(!openMenu);
  };
  return (
    <div className="hero">
      <header className="flex justify-between  py-[2rem] items-center relative z-[2]">
        <a href="#" className="w-[40%] lg:w-[20%]">
          <img
            src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877988/logo_cbzwfv.svg"
            alt="godzilla logo"
          />
        </a>

        <nav className="hidden lg:flex gap-[2rem] ">
          <a
            href="https://docs.google.com/document/d/13AvWQIBLk0UxCW6HqfE2gHAkr-SsWnF_8Z5eVuXOVgU/edit?usp=sharing"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            whitepaper
          </a>
          <a
            href="#team"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            team
          </a>
          <a
            href="#community"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            community
          </a>
          <a
            href="#roadmap"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            roadmap
          </a>
          <a
            href="#about"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            about us
          </a>
        </nav>

        <div className="hidden lg:flex gap-[1rem] items-center">
          {" "}
          <a href="https://medium.com/@GODZinu_io">
            <img src={Icons.reddit} alt="medium icon" />
          </a>
          <a href="https://t.me/GODZinu" className="w-[10%]">
            <img src={Icons.telegram} alt="github icon" />
          </a>
          <a href="https://twitter.com/GODZinu_io">
            <img src={Icons.twitter} alt="twitter icon" />
          </a>{" "}
        </div>

        <div
          className="flex flex-col gap-[5px] lg:hidden"
          onClick={() => handleClick()}
        >
          <span className=" w-[25px] h-[2px] ham"></span>
          <span className=" w-[25px] h-[2px] ham"></span>
          <span className="ham w-[25px] h-[2px]"></span>
        </div>
      </header>
      {/* --------hamburger menu------------ */}
      <div
        className={`hidden menu justify-center bg-[#00000080] absolute inset-0 z-[100] overflow-hidden  ${
          openMenu ? "open" : ""
        }`}
      >
        <nav className="navv flex flex-col pt-[10rem]  items-center gap-[1.5rem] inset-0 bg-[#00000080] absolute left-[30%]">
          <a
            href="https://docs.google.com/document/d/13AvWQIBLk0UxCW6HqfE2gHAkr-SsWnF_8Z5eVuXOVgU/edit?usp=sharing"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            whitepaper
          </a>
          <a
            href="#team"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            team
          </a>
          <a
            href="#community"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            community
          </a>
          <a
            href="#roadmap"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            roadmap
          </a>
          <a
            href="#about"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            about us
          </a>
        </nav>

        <img
          src={Icons.close}
          alt=""
          className="absolute top-[2rem] right-[2rem] team"
          onClick={() => handleClick()}
        />
      </div>

      <div className="mt-[3rem] px-[2rem]" id="hero">
        <div className="relative z-[10]">
          <h1 className="text-[40px] md:text-[55px] lg:text-[80px] lg:leading-[100px] tracking-[.2rem] font-[500] text-center text-[white] capitalize">
            <span className="gradient block">the next gen</span> decentralized
            world
          </h1>

          <p className="text-center pt-[2.5rem] pb-[2rem] text-[white]  lg:text-[24px] lg:leading-[36px] capitalize">
            emerged from the deep sea roaming the web3 world
          </p>

          <div className="flex flex-col md:flex-row md:justify-center items-center   gap-[1rem] mt-[3rem] lg:mt-[0]">
            <a
              href="#chain"
              className="text-[white] rounded-[8px] w-[176px] h-[55px] capitalize z-[10] flex justify-center items-center btn hero-blue text-[17px]"
            >
              get started
            </a>
            <a
              href="#swap"
              className="text-[black] rounded-[8px] w-[176px] h-[55px] capitalize btn2 z-[10] flex justify-center items-center text-[17px]"
            >
              dex Aggregator
            </a>
          </div>

          <img
            src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877969/Glooperbg_spsytr.svg"
            alt=""
            className="h-[40vh] lg:h-[220vh]  lg:mt-[-30%] ml-[-4rem] md:ml-[-8rem] looper"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
