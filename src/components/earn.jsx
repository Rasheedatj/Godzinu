import { Icons } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

const Earn = ({ offset }) => {
  return (
    <div className="pb-[5rem]  pt-[5rem] ">
      <h1 className="text-[white]  text-[25px] lg:text-[60.46px]  font-[500]  capitalize text-center pb-[3rem]">
        token value
        <span className="gradient"> capture</span>
      </h1>
      {/* ------taxes--------- */}
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <div className="flex flex-col md:flex-row lg:justify-between items-center gap-[4rem]">
          {/* -------container 1------- */}

          <div>
            <h1 className="gradient text-[white] text-[35px] lg:text-[50.46px] lg:leading-[100px] font-[500]  capitalize text-center lg:text-start">
              taxes
            </h1>
            <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%]">
              A tax is deducted when you buy/sell/transfer. The taxes funds
              Operations, Liquidity Pools, Staking, Token Burns”
            </p>
            <button className="btn btn-hov text-[white] rounded-[8px] w-[176px] h-[55px] capitalize  mt-[1rem]">
              <a href="https://pancakeswap.finance/info/pairs/0xd1d9ad05238993a9c10c5b17c4ec6d03b9d35138">
                deposit
              </a>
            </button>
          </div>

          {/* --------container 2---------- */}
          <div>
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877991/dragon2_wieuvf.svg"
              alt=""
            />
          </div>
        </div>
      </ScrollAnimation>

      {/* -------staking reward----- */}
      <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
        <div className="flex flex-col md:flex-row-reverse lg:justify-between items-center gap-[4rem]  my-[5rem] ">
          {/* -------container 1------- */}

          <div className="flex  flex-col w-[100%] lg:w-[60%] value   container mx-auto">
            <h1 className="text-[white] text-center lg:text-start text-[25px] lg:text-[50.46px]  font-[500]  capitalize">
              <span className="gradient lg:block ">GODZinu</span> staking
              rewards
            </h1>
            <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px]  ">
              Stake your $GODZ tokens and earn Rewards funded by the Buy/Sell
              Tax.
            </p>
          </div>

          {/* --------container 2---------- */}
          <div>
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877963/accural_ef8v5w.jpg"
              alt=""
              className="lg:w-[80%]"
            />
          </div>
        </div>
      </ScrollAnimation>

      {/* ---------token burn--------- */}
      <div className="flex flex-col md:flex-row lg:justify-between items-center gap-[4rem]">
        {/* -------container 1------- */}

        <div>
          <h1 className="gradient text-[white] text-center lg:text-start text-[35px] lg:text-[50.46px] lg:leading-[100px] font-[500]  capitalize">
            token burn
          </h1>
          <p className="text-[white] leading-[35px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] lg:w-[60%]">
            Each token transfer leads to Token Burn, which makes the $GODZ token
            a hyper-deflationary token.
          </p>
        </div>

        {/* --------container 2---------- */}
        <div>
          <img
            src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877970/buy_huuuvb.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Earn;
