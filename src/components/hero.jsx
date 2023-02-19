import looper from "../assets/Glooperbg.svg";
import hero from "../assets/hero-bg.svg";

const Hero = () => {
  return (
    <div className="relative z-[2]">
      <h1 className="text-[40px] md:text-[55px] lg:text-[80px] lg:leading-[100px] tracking-[.2rem] font-[500] text-center text-[white] capitalize">
        <span className="gradient block">the next gen</span> decentralized world
      </h1>

      <p className="text-center pt-[2.5rem] pb-[2rem] text-[white]  lg:text-[24px] lg:leading-[36px] capitalize">
        emerged from the deep sea roaming the web3 world
      </p>

      <div className="flex flex-col md:flex-row md:justify-center items-center   gap-[1rem] mt-[3rem] lg:mt-[0]">
        <button className="text-[white] rounded-[8px] w-[176px] h-[55px] capitalize z-[10]  btn hero-blue">
          <a href="#roadmap">get started</a>
        </button>
        <button className="text-[black] rounded-[8px] w-[176px] h-[55px] capitalize btn2 z-[10]">
          <a href="#swap">dex Aggregator</a>
        </button>
      </div>

      <img
        src={looper}
        alt=""
        className="h-[70vh] lg:h-[220vh] lg:mt-[-30%] ml-[-2rem] "
      />
    </div>
  );
};

export default Hero;
