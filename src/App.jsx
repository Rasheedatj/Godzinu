import React, { useRef, useState } from "react";

import { useInView } from "react-intersection-observer";
import logo from "./assets/logo.png";
import telegram from "./assets/Telegram.svg";

import discord from "./assets/discord.svg";
import reddit from "./assets/reddit.svg";
import twitter from "./assets/twitter.svg";
import Hero from "./components/hero";
import Chain from "./components/chain";
import About from "./components/about";
import Swap from "./components/swap";
import Custody from "./components/custody";
import Earn from "./components/earn";
import Hexagon from "./components/hexagon";
import Footer from "./components/footer";
import close from "./assets/close.png";
import "./App.css";

function App() {
  const [openMenu, setCompanyOpen] = useState(false);

  const handleClick = () => {
    setCompanyOpen(!openMenu);
  };

  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const slideClass = inView ? "slide-in" : "";

  const sectionRef2 = useRef(null);
  const { ref2, inView2 } = useInView({
    threshold: 0.5,
  });

  const slideClass2 = inView2 ? "slide-in" : "";

  return (
    <div className="bg-[black]  ">
      <header className="flex justify-between px-[1.5rem] py-[2rem] items-center relative z-[2]">
        <a href="#" className="w-[40%] lg:w-[20%]">
          <img src={logo} alt="godzilla logo" />
        </a>

        <nav className="hidden lg:flex gap-[2rem] ">
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

        <div className="hidden lg:flex gap-[1rem]">
          {" "}
          <a href="https://t.me/GODZinu" className="w-[10%]">
            <img src={telegram} alt="github icon" />
          </a>
          <a href="#">
            <img src={discord} alt="discord icon" />
          </a>
          <a href="#">
            <img src={reddit} alt="reeddit icon" />
          </a>
          <a href="https://twitter.com/GODZinu_io">
            <img src={twitter} alt="twitter icon" />
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
      </header>
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
          src={close}
          alt=""
          className="absolute top-[2rem] right-[2rem] team"
          onClick={() => handleClick()}
        />
      </div>
      {/* component */}
      <div className="mt-[3rem] hero px-[2rem]">
        <Hero />
      </div>
      {/* component */}
      <Chain />
      {/* component */}
      <div ref={ref} className="trigger" />
      <div
        className={`section  px-[2rem] lg:px-[4rem] py-[5rem]  ${slideClass}`}
        ref={sectionRef}
        id="about "
      >
        <About />
      </div>
      {/* component */}
      <div ref={ref2} className="trigger" />
      <div
        className={`secti  px-[2rem] lg:px-[4rem] py-[5rem]  ${slideClass2}`}
        ref={sectionRef2}
        id="swap"
      >
        <Swap />
      </div>
      {/* component */}
      {/* <div ref={ref} className="trigger" /> */}
      <div className="  px-[2rem] lg:px-[4rem] py-[5rem]">
        <Custody />
      </div>
      {/* component */}
      {/* <div ref={ref} className="trigger" /> */}
      <div className=" px-[2rem] lg:px-[4rem] pb-[0] pt-[5rem] lg:py-[5rem] ">
        <Earn />
      </div>{" "}
      {/* component */}
      {/* <div ref={ref} className="trigger" /> */}
      <div className="px-[2rem] lg:px-[4rem] pb-[5rem] pt-[0] lg:py-[5rem]  ">
        <Hexagon />
      </div>
      {/* component */}
      <div className="px-[2rem] lg:px-[4rem] pt-[5rem] pb-[2rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
