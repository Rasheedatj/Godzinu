import easy from "../assets/easy.svg";
import vector from "../assets/vector.svg";
import cost from "../assets/Costdollar.svg";
import bold from "../assets/bolt.svg";
import flash from "../assets/flash.svg";
import rate from "../assets/rate.svg";
import cube from "../assets/cube.svg";
import grid3 from "../assets/grid3.svg";
import VideoPlayer from "./vid1";

const Chain = () => {
  return (
    <div className="px-[2rem] lg:px-[4rem] mt-[2rem] md:mt-[9rem] lg:mt-[-22%]">
      <h1 className="text-[white] text-[35px] md:text-[45px] lg:text-[80px] lg:leading-[100px] font-[500] text-center capitalize">
        <span className="gradient">multiChain </span>- the future
      </h1>

      <div className="flex flex-col gap-[2rem] md:grid grid-cols-3 md:gap-[0rem] mt-[2rem] md:mt-[5rem]  items-center">
        {/* ----grid 1---- */}
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 flex flex-col justify-between w-[95%]">
          <h1 className="text-[white] text-[25px] lg:text-[47.46px] leading-[60px] font-[500]  capitalize pb-[2rem]">
            <span className="gradient  pb-[1rem]">$GODZINU </span>
            dex aggregrator v.0.5
          </h1>

          <ul className="lg:w-[70%]  pl-[1.5rem]">
            <li className="list-disc text-[18px] lg:text-[27.79px] pb-[1rem] text-white">
              supports top-rate 19 blockchains including BSC, ETH,Arbitrum,
              Polygon, AVAX,Fantom, etc.
            </li>
            <li className="list-disc text-[18px] lg:text-[27.79px] pb-[1rem] text-white">
              supports top-rate 19 blockchains including BSC, ETH,Arbitrum,
              Polygon, AVAX,Fantom, etc.
            </li>
            <li className="list-disc text-[18px] lg:text-[27.79px] pb-[1rem] text-white">
              supports top-rate 19 blockchains including BSC, ETH,Arbitrum,
              Polygon, AVAX,Fantom, etc.
            </li>
          </ul>

          <button className="text-[white] text-[24px] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] grad-border subscribe mt-[2rem] self-start">
            <a href="#">launch app</a>
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
      <div className=" flex gap-[2rem]  flex-wrap md:flex-wrap lg:flex-row lg:gap-[.5rem] justify-center lg:justify-start  mt-[5rem]">
        {/* ----------box 1-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={cost} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              $0.00024
            </h1>
          </div>
        </div>
        {/* ----------box 2-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={bold} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">max supply</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              100 Billion
            </h1>
          </div>
        </div>
        {/* ----------box 3-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={flash} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">Total supply</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              94.2 Billion
            </h1>
          </div>
        </div>
        {/* ----------box 4-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={rate} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">burned supply</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              5,8%
            </h1>
          </div>
        </div>
        {/* ----------box 5-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  px-[10px] h-[120.85px] justify-center lg:justify-start">
          <img src={cube} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">unique users</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">566</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chain;
