import { Icons } from "../assets";
import VideoPlayer from "./videoplayer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";

const Chain = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideInVariantAnimation}
      className={`mt-[2rem] md:mt-[9rem] lg:mt-[-22%] ${
        inView ? "slide-in visible" : ""
      }`}
      id="chain"
    >
      <h1 className="text-[white] text-[35px] md:text-[45px] lg:text-[80px] lg:leading-[100px] font-[500] text-center capitalize">
        <span className="gradient">multiChain </span>- the future
      </h1>

      <div className="flex flex-col gap-[2rem] md:grid grid-cols-3 md:gap-[2rem] mt-[2rem] md:mt-[5rem]  items-center">
        {/* ----grid 1---- */}
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 flex flex-col justify-between w-[95%]">
          <h1 className="text-[white] text-[25px] lg:text-[47.46px] leading-[60px] font-[500]  capitalize pb-[2rem]">
            <span className="gradient  pb-[1rem]">$GODZINU </span>
            dex aggregrator v.0.5
          </h1>

          <ul className="lg:w-[70%]  pl-[1.5rem]">
            <li className="list-disc text-[18px] lg:text-[24.79px] pb-[1rem] text-white">
              supports top-rate 19 blockchains including BSC, ETH,Arbitrum,
              Polygon, AVAX,Fantom, etc.
            </li>
            <li className="list-disc text-[18px] lg:text-[24.79px] pb-[1rem] text-white">
              Non-EVM chains to be added(BTC, osmosis etc)
            </li>
            <li className="list-disc text-[18px] lg:text-[24.79px] pb-[1rem] text-white">
              An Aggregrator of Aggregrators(linch, paraswap etc).
            </li>
          </ul>

          <button className="text-[white] text-[24px] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] grad-border subscribe mt-[2rem] self-start">
            <a href="#swap">launch app</a>
          </button>
        </div>
        {/* ----grid 2---- */}

        <div className="col-start-3 col-end-4 relative">
          <VideoPlayer />
          {/* ---overlay----- */}
          <div className="absolute top-[15%] left-[3%]">
            <h1 className="capitalize text-[white] font-[500] text-[25px] tracking-[2%] lg:text-[44px] lg:leading-[66.1px] grid-grad">
              the godzinu aggregrator
            </h1>
          </div>
        </div>
        {/* ----grid 3---- */}

        <div className="col-start-3 col-end-4 relative ">
          <VideoPlayer />
          {/* ---overlay----- */}
          <div className="absolute top-[20%] left-[2%]">
            <h1 className="capitalize text-[white] font-[500] text-[25px] tracking-[2%] lg:text-[44px] lg:leading-[66.1px] grid-grad">
              the godzinu swap overview
            </h1>
          </div>
        </div>
      </div>

      {/* -----flex boxes */}
      <div className=" flex gap-[2rem]  flex-wrap md:flex-wrap lg:flex-row lg:flex-nowrap lg:gap-[.5rem] justify-center lg:justify-start  mt-[5rem]">
        {/* ----------box 1-------- */}
        <div className="bg-[#a92dbf4d]  w-[280px] lg:w-auto flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={Icons.cost} alt="" className="lg:w-[35%]" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[24.61px] leading-[44.42px] ">
              $0.00024
            </h1>
          </div>
        </div>
        {/* ----------box 2-------- */}
        <div className="bg-[#a92dbf4d]  w-[280px] lg:w-auto flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={Icons.bolt} alt="" className="lg:w-[35%]" />
          <div>
            <p className="text-[13.34px] leading-[30px]">max supply</p>
            <h1 className="font-[700] text-[24.61px] leading-[44.42px] ">
              100 Billion
            </h1>
          </div>
        </div>
        {/* ----------box 3-------- */}
        <div className="bg-[#a92dbf4d]  w-[280px] lg:w-auto flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={Icons.flash} alt="" className="lg:w-[35%]" />
          <div>
            <p className="text-[13.34px] leading-[30px]">Total supply</p>
            <h1 className="font-[700] text-[24.61px] leading-[44.42px] ">
              94.2 Billion
            </h1>
          </div>
        </div>
        {/* ----------box 4-------- */}
        <div className="bg-[#a92dbf4d]  w-[280px] lg:w-auto flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={Icons.rate} alt="" className="lg:w-[35%]" />
          <div>
            <p className="text-[13.34px] leading-[30px]">burned supply</p>
            <h1 className="font-[700] text-[24.61px] leading-[44.42px] ">
              5.8%
            </h1>
          </div>
        </div>
        {/* ----------box 5-------- */}
        <div className="bg-[#a92dbf4d]  w-[280px] lg:w-auto flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={Icons.cube} alt="" className="lg:w-[35%]" />
          <div>
            <p className="text-[13.34px] leading-[30px]">community members</p>
            <h1 className="font-[700] text-[24.61px] leading-[44.42px] ">
              5,700
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Chain;
