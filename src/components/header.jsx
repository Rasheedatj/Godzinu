import { useState } from "react";
import { Icons } from "../assets";
import { motion } from "framer-motion";
import { slideInVariantAnimation, containerVariantAnimation } from "../util";

const Header = () => {
  const [openMenu, setCompanyOpen] = useState(false);

  const handleClick = () => {
    setCompanyOpen(!openMenu);
  };
  return (
    <div className="hero">
      <motion.header
        variants={slideInVariantAnimation}
        initial="hidden"
        animate="visible"
        className="flex justify-between  py-[2rem] items-center relative z-[2]"
      >
        <a href="#" className="w-[40%] lg:w-[20%]">
          <img src={Icons.logo} alt="godzilla logo" />
        </a>

        <nav className="hidden lg:flex gap-[2rem] ">
          <a
            href="#tokencapture"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            token overview
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

        <div className="hidden lg:flex gap-[1rem]">
          {" "}
          <a href="https://t.me/GODZinu" className="w-[10%]">
            <img src={Icons.telegram} alt="github icon" />
          </a>
          <a href="#">
            <img src={Icons.reddit} alt="reeddit icon" />
          </a>
          <a href="https://twitter.com/GODZinu_io">
            <img src={Icons.twitter} alt="twitter icon" />
          </a>{" "}
        </div>

        <div
          className="flex flex-col gap-[5px] lg:hidden"
          onClick={() => handleClick()}
        >
          <span className="team w-[25px] h-[2px]"></span>
          <span className="team w-[25px] h-[2px]"></span>
          <span className="team w-[25px] h-[2px]"></span>
        </div>
      </motion.header>
      {/* --------hamburger menu------------ */}
      <div
        className={`hidden menu justify-center bg-[#00000080] absolute inset-0 z-[10] overflow-hidden  ${
          openMenu ? "open" : ""
        }`}
      >
        <nav className="navv flex flex-col pt-[10rem]  items-center gap-[1.5rem] inset-0 bg-[#00000080] absolute left-[30%]">
          <a
            href="#swap"
            className="text-[white] font-[400] text-[16px] leading-[32.19px] capitalize"
          >
            token overview
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

      <motion.div
        variants={slideInVariantAnimation}
        initial="hidden"
        animate="visible"
        className="mt-[3rem] px-[2rem]"
        id="hero"
      >
        <div className="relative z-[10]">
          <h1 className="text-[40px] md:text-[55px] lg:text-[80px] lg:leading-[100px] tracking-[.2rem] font-[500] text-center text-[white] capitalize">
            <span className="gradient block">the next gen</span> decentralized
            world
          </h1>

          <p className="text-center pt-[2.5rem] pb-[2rem] text-[white]  lg:text-[24px] lg:leading-[36px] capitalize">
            emerged from the deep sea roaming the web3 world
          </p>

          <div className="flex flex-col md:flex-row md:justify-center items-center   gap-[1rem] mt-[3rem] lg:mt-[0]">
            <button className="text-[white] rounded-[8px] w-[176px] h-[55px] capitalize z-[10]  btn hero-blue text-[17px]">
              <a href="#chain">get started</a>
            </button>
            <button className="text-[black] rounded-[8px] w-[176px] h-[55px] capitalize btn2 z-[10] text-[17px]">
              <a href="#swap">dex Aggregator</a>
            </button>
          </div>

          <img
            src={Icons.looper}
            alt=""
            className="h-[40vh] lg:h-[220vh] lg:mt-[-30%] ml-[-4rem] md:ml-[-8rem] "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
