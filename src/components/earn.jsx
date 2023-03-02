import { Icons } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

const Earn = ({ offset }) => {
  return (
    <div className="pb-[0] mb-[394px] pt-[5rem] lg:py-[5rem]">
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <div className="flex flex-col md:flex-row lg:justify-between items-center gap-[4rem]">
          {/* -------container 1------- */}

          <div>
            <h1 className="text-[white] text-[35px] lg:text-[80.46px] lg:leading-[100px] font-[500]  capitalize">
              <span className="gradient block">earn real yield</span> on your
              native assets
            </h1>
            <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%]">
              Provide Liquidity and Earn Yield on your Native Assets with
              Impermanent Loss Protection
            </p>
            <button className="btn btn-hov text-[white] rounded-[8px] w-[176px] h-[55px] capitalize  mt-[1rem]">
              <a href="https://pancakeswap.finance/info/pairs/0xd1d9ad05238993a9c10c5b17c4ec6d03b9d35138">
                deposit
              </a>
            </button>
          </div>

          {/* --------container 2---------- */}
          <div>
            <img src={Icons.dragon2} alt="" />
          </div>
        </div>
      </ScrollAnimation>

      {/* -------background----- */}
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <div className="flex flex-col w-[100%] lg:w-[60%] container mx-auto py-[2rem] value relative  my-[10rem]">
          <h1 className="text-[white] text-[35px] lg:text-[80.46px] lg:leading-[100px] font-[500]  capitalize">
            <span className="gradient block lg:leading-[150px]">GODZinu</span>{" "}
            staking rewards
          </h1>
          <p className="text-[white] leading-[40px] pt-[1rem] text-[20.23px] font-[400] items-center ">
            Stake your $GODZ tokens and earn Rewards funded by the Buy/Sell Tax.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Earn;
