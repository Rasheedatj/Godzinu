import { Icons } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

const Token = ({ offset }) => {
  return (
    <ScrollAnimation animateIn="animate-slideRight" offset={offset}>
      <h1 className="text-[white] text-[55px] lg:text-[77.63px] lg:leading-[100px] font-[500]  capitalize mb-[1rem] lg:mb-[3rem] mt-[5rem] text-center">
        <span className="gradient  pb-[1rem]"> $godz </span>
        token links
      </h1>

      <div className="flex lg:justify-between flex-col lg:flex-row gap-[3rem]  items-center  gap-[8rem]">
        <img src={Icons.token} alt="" className="w-[100%] lg:w-[40%]" />

        {/* headings */}
        <div className=" flex-col justify-between w-[100%] lg:w-[60%]">
          <div>
            <h3
              className="gradient capitalize pt-[1rem] md:pt-[0] font-[500] text-[25px] md:text-[35.95px] leadi
          [53.93px] tracking-[2%] "
            >
              token contract address
            </h3>
            <p className="text-white pt-[.7rem] text-[10px] lg:text-[24px] flex gap-[1rem] items-center pb-[1.5rem]">
              0xd1d9Ad05238993A9C10c5b17c4EC6d03B9D35138
              <a href="https://poocoin.app/tokens/0xae7cf30e14e132e43689ebe4fab49706c59a0bf7">
                {" "}
                <img src={Icons.anchor} alt="" />
              </a>
            </p>
          </div>
          {/* heading 2 */}
          <div>
            <h3
              className="gradient text-[25px] capitalize pt-[1rem] md:pt-[0] font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%]"
            >
              PancakeSwap Pool
            </h3>
            <p className="text-white pt-[.7rem] text-[10px] lg:text-[24px] flex gap-[1rem] items-center pb-[1.5rem]">
              0xd1d9Ad05238993A9C10c5b17c4EC6d03B9D35138
              <a href="https://pancakeswap.finance/info/pairs/0xd1d9ad05238993a9c10c5b17c4ec6d03b9d35138">
                {" "}
                <img src={Icons.anchor} alt="" />
              </a>
            </p>
          </div>
          {/* heading 3 */}
          <div>
            <h3
              className="gradient text-[25px] capitalize pt-[1rem] md:pt-[0] font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%]"
            >
              Dextools
            </h3>
            <p className="text-white pt-[.7rem] text-[10px] lg:text-[24px] flex gap-[1rem] items-center">
              0xd1d9Ad05238993A9C10c5b17c4EC6d03B9D35138
              <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xd1d9ad05238993a9c10c5b17c4ec6d03b9d35138">
                {" "}
                <img src={Icons.anchor} alt="" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Token;
