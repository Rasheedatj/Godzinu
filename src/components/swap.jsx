import box from "../assets/swap.svg";

const Swap = () => {
  return (
    <div className="flex flex-col gap-[4rem] md:flex-row md:items-start justify-between  lg:gap-[0]">
      {/* --------container 1----- */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-[2rem]">
        <h1 className="text-[white]  text-[40.46px] leading-[60px] font-[500]  capitalize">
          <span className="gradient uppercase block pb-[1rem]"> swap</span>
          Any token, <br />
          any chain
        </h1>

        <p className="text-[white] leading-[30px] lg:leading-[40px] pt-[1rem] lg:text-[20.23px] font-[400] w-[100%]">
          The Godzinu DEX Aggregator connects liquidity across 9 blockchains and
          compares pricing from numerous Aggregators (1inch, Matcha) & DEXs
          (Uniswap, Sushiswap, Pangolin) to give you the best cross-chain swap
          in one click.
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
  );
};

export default Swap;
