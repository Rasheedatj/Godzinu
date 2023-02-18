import easy from "../assets/easy.svg";
import vector from "../assets/vector.svg";
import cost from "../assets/Costdollar.svg";
import bold from "../assets/bolt.svg";
import flash from "../assets/flash.svg";
import rate from "../assets/rate.svg";
import cube from "../assets/cube.svg";
import grid1 from "../assets/grid1.svg";
import grid2 from "../assets/grid2.svg";
import grid3 from "../assets/grid3.svg";

const Chain = () => {
  return (
    <div className="px-[2rem] lg:px-[4rem] mt-[2rem] md:mt-[9rem] lg:mt-[-22%]">
      <h1 className="text-[white] text-[35px] md:text-[45px] lg:text-[80px] lg:leading-[100px] font-[500] text-center capitalize">
        <span className="gradient">cross.chain </span>
        made easy
      </h1>

      <div className="flex flex-col gap-[2rem] md:grid grid-cols-3 md:gap-[5rem] mt-[2rem] md:mt-[5rem] video">
        {/* ----grid 1---- */}
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 relative">
          <img src={grid1} alt="" />

          {/* ---overlay----- */}
          <div className="absolute top-[30%] left-[2%]">
            <h1 className="capitalize text-[white] font-[600] text-[25px] md:text-[45px] lg:text-[71.23px] lg:leading-[100px]">
              what is{" "}
              <span className="gradient  block">the godzinu project</span>
            </h1>
          </div>
        </div>
        {/* ----grid 2---- */}

        <div className="col-start-3 col-end-4  relative small">
          <img src={grid2} alt="" />
          {/* ---overlay----- */}
          <div className="absolute top-[15%] left-[3%]">
            <h1 className="capitalize text-[white] font-[500] text-[25px] tracking-[2%] lg:text-[44px] lg:leading-[66.1px] grid-grad">
              the godzinu aggregrator
            </h1>
          </div>
        </div>
        {/* ----grid 3---- */}

        <div className="col-start-3 col-end-4 relative small">
          <img src={grid3} alt="" />
          {/* ---overlay----- */}
          <div className="absolute top-[30%] left-[2%]">
            <h1 className="capitalize text-[white] font-[500] text-[25px] tracking-[2%] lg:text-[44px] lg:leading-[66.1px] grid-grad">
              the godzinu swap overview
            </h1>
          </div>
        </div>
      </div>

      {/* -----flex boxes */}
      <div className=" flex gap-[2rem]  flex-wrap md:flex-wrap lg:flex-row lg:gap-[1.5rem] justify-center lg:justify-start  mt-[5rem]">
        {/* ----------box 1-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  w-[230.99px] h-[140.85px] justify-center">
          <img src={cost} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              $0.27
            </h1>
          </div>
        </div>
        {/* ----------box 2-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  w-[230.99px] h-[140.85px] justify-center">
          <img src={bold} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              $0.27
            </h1>
          </div>
        </div>
        {/* ----------box 3-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  w-[230.99px] h-[140.85px] justify-center">
          <img src={flash} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              $0.27
            </h1>
          </div>
        </div>
        {/* ----------box 4-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  w-[230.99px] h-[140.85px] justify-center">
          <img src={rate} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              $0.27
            </h1>
          </div>
        </div>
        {/* ----------box 5-------- */}
        <div className="bg-[#a92dbf4d] flex items-center  py-[1rem] text-[white] rounded-[15px] gap-[1rem]  w-[230.99px] h-[140.85px] justify-center">
          <img src={cube} alt="" />
          <div>
            <p className="text-[13.34px] leading-[30px]">$Godzinu price</p>
            <h1 className="font-[700] text-[29.61px] leading-[44.42px]">
              $0.27
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chain;
