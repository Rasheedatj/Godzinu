import box from "../assets/swap.svg";

const Swap = () => {
  return (
    <>
      {/* ---EARN----- */}
      <div className="flex flex-col gap-[4rem] md:flex-row md:items-center justify-between  lg:gap-[0]">
        {/* --------container 1----- */}
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[2rem]">
          <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize">
            <span className="gradient uppercase block pb-[1rem]"> swap</span>
            Any token, <br />
            any chain
          </h1>

          <p className="text-[white] leading-[30px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] w-[100%]">
            The Godzinu DEX Aggregator connects liquidity across 9 blockchains
            and compares pricing from numerous Aggregators (1inch, Matcha) &
            DEXs (Uniswap, Sushiswap, Pangolin) to give you the best cross-chain
            swap in one click.
          </p>

          <button className="btn btn-hov text-[white] rounded-[8px] w-[176px] h-[55px] capitalize  mt-[1rem] md:mt-[2rem]">
            <a href="#">start swapping</a>
          </button>
        </div>

        {/* --------container 2----------- */}
        <div className="w-[100%] md:w-[80%] lg:w-[50%] flex justify-center">
          <img src={box} alt="" className="w-[100%] lg:w-[70%]" />
        </div>
      </div>

      {/* ---------- token --------- */}
      <section className="pt-[5rem]">
        <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize text-center">
          token value
          <span className="gradient"> capture</span>
        </h1>

        {/* -------flex boxes------- */}
        <div className="flex flex-col lg:flex-row items-center gap-[2rem] mt-[4rem]">
          {/* box1 */}
          <div
            className="flex flex-col gap-[2rem] items-center
           h-[60vh] pt-[3rem] rounded-[19.5px] glass"
          >
            <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize gradient">
              taxes
            </h1>

            <p className="text-[white] leading-[30px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] w-[100%] text-center px-[3rem]">
              A tax is deducted when you buy/sell/transfer. The taxes funds
              Operations, Liquidity Pools, Staking, Token Burns
            </p>
          </div>

          {/* -----box 2---- */}
          <div
            className="flex flex-col gap-[2rem] items-center
           h-[60vh] pt-[3rem] rounded-[19.5px] glass"
          >
            <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize gradient">
              Staking Rewards
            </h1>

            <p className="text-[white] leading-[30px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] w-[100%] text-center px-[3rem]">
              Stake your $GODZ tokens and earn Rewards funded by the Buy/Sell
              Tax
            </p>
          </div>

          {/* -----box 3---- */}

          <div
            className="flex flex-col gap-[2rem] items-center
            h-[60vh] pt-[3rem] rounded-[19.5px] glass"
          >
            <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize gradient">
              Token Burns
            </h1>

            <p className="text-[white] leading-[30px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] w-[100%] text-center px-[3rem]">
              Each token transfer leads to Token Burn, which makes the $GODZ
              token a hyper-deflationary token.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Swap;
