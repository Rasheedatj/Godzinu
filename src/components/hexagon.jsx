import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import hexagon from "../assets/hexagon.svg";
import program from "../assets/program.svg";
import wallets from "../assets/wallets-bg.svg";
import safe from "../assets/safe.svg";
import godzilla from "../assets/hunters.svg";
import icons from "../assets/icons.svg";
import team1 from "../assets/team.svg";
import jimmy from "../assets/jimmy.svg";
import ayush from "../assets/ayush.svg";
import opa from "../assets/opa.svg";
import cerberos from "../assets/cerbrone.svg";
import good from "../assets/good.svg";
import taiwo from "../assets/taiwo.svg";
import henry from "../assets/henry.svg";
import bew from "../assets/bew.svg";
import don from "../assets/don.svg";

const Hexagon = () => {
  return (
    <>
      {/* --------hexagon-------- */}
      <div className="flex flex-col items-center gap-[3rem] lg:gap-[7rem]">
        <h1 className="text-[white] text-[35px] text-center lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize">
          Godzinu <span className="gradient">tokenomics</span>
        </h1>

        <div>
          <img src={hexagon} alt="" />
        </div>
      </div>

      {/* -----staking program-------- */}
      <div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[3rem] lg:gap-[0] justify-between mt-[8rem]">
          {/* program 1 */}
          <div className="flex flex-col justify-between">
            <h1 className="text-[white]  text-[50.46px] leading-[60px] font-[500]  capitalize">
              <span className="gradient uppercase block pb-[1rem]"> $godz</span>
              stacking program
            </h1>

            <div className="">
              <h3
                className="gradient capitalize pt-[1rem] md:pt-[0] font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%]"
              >
                $GODZ token stacking
              </h3>

              <h3
                className="text-white capitalize font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%]"
              >
                maturity:16:22 UTC, 15th March
              </h3>
              <h3
                className="text-white capitalize font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%]"
              >
                contract:{" "}
                <span className="font-[300] text-[10px] md:text-[17px] text-white tracking-[2%]">
                  0xae7cf30e14e132e43689ebe4fab49706c59a0bf7
                </span>
              </h3>
            </div>
          </div>

          {/* program 2 */}
          <div className="flex flex-col lg:items-end gap-[2rem] ">
            <img src={program} alt="" />
            <div>
              <h3 className="gradient  capitalize font-[500] md:text-[35.95px] md:leading:[53.93px] tracking-[2%]">
                $GODZ/$BNB LP token stacking
              </h3>

              <h3 className="text-white capitalize font-[500] md:text-[35.95px] md:leading-[53.93px] tracking-[2%]">
                maturity:15:56 UTC, 16th March
              </h3>
              <h3 className="text-white capitalize font-[500] md:text-[35.95px] md:leading-[53.93px] tracking-[2%]">
                contract:{" "}
                <span className="font-[300] text-[10px] md:text-[17px] text-white tracking-[2%]">
                  0xd1d9Ad05238993A9C10c5b17c4EC6d03B9D35138
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* -program button */}
        <div className="flex flex-col gap-[2rem] md:gap-[0] md:flex-row bg-[#ff1cf72b] px-[2rem] py-[1rem] rounded-[5px] mt-[3rem] border-[1px] border-[#ffffff4d]">
          <h1 className="text-[white] w-[100%]  md:w-[80%] text-[22px] md:text-[25px]  lg:text-[40.46px] lg:leading-[60px] font-[500]  capitalize">
            read more about
            <span className="gradient uppercase "> $GODZ</span> stacking program
          </h1>

          <button className="capitalize text-[white] h-[70.77px] md:w-[263.5px] rounded-[8.09px] subscribe text-[23px]">
            <a href="#">start staking</a>
          </button>
        </div>
      </div>

      {/* ------team-------- */}
      <div id="team">
        <h1 className="gradient my-[4rem] text-center text-[35px] md:text-[45px] lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem]">
          our team
        </h1>
        <Swiper
          className="flex flex-wrap gap-[2rem]  lg:gap-[4rem]  mySwiper "
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            350: {
              slidesPerView: 1.3,
            },
            500: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3.5,
            },
          }}
        >
          {/* team member 1 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] flex flex-col">
            <img src={ayush} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              ayush nurula
            </h1>
            <p className="pt-[2rem] capitalize text-center">project lead</p>
          </SwiperSlide>
          {/* team member 2 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={opa} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              opa
            </h1>
            <p className="pt-[2rem] capitalize text-center">growth Lead</p>
          </SwiperSlide>
          {/* team member 3 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col ">
            <img src={team1} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              tara arora
            </h1>
            <p className="pt-[2rem] capitalize text-center">
              content writer and socil media manager
            </p>
          </SwiperSlide>
          {/* team member 4 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={henry} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              henry gray
            </h1>
            <p className="pt-[2rem] capitalize text-center">
              Community Manager
            </p>
          </SwiperSlide>
          {/* team member 5 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={jimmy} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              jimmy hope
            </h1>
            <p className="pt-[2rem] capitalize text-center">
              Community Manager
            </p>
          </SwiperSlide>
          {/* team member 6 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={taiwo} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              taiwo
            </h1>
            <p className="pt-[2rem] capitalize text-center">
              Graphics Designer
            </p>
          </SwiperSlide>
          {/* team member 7 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={don} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              don zhilla
            </h1>
            <p className="pt-[2rem] capitalize text-center">Advisor</p>
          </SwiperSlide>
          {/* team member 8*/}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={good} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              good chilla
            </h1>
            <p className="pt-[2rem] capitalize text-center">Advisor</p>
          </SwiperSlide>
          {/* team member 9 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={cerberos} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              cerberos
            </h1>
            <p className="pt-[2rem] capitalize text-center">Advisor</p>
          </SwiperSlide>

          {/* team member 10 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img src={bew} alt="" />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
              bew
            </h1>
            <p className="pt-[2rem] capitalize text-center">Advisor</p>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* -------roadmap-------- */}
      <div className="py-[5rem]" id="roadmap">
        <h1 className="gradient text-[35px] mb-[5rem] md:mb-[10rem] lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[4rem] text-center">
          roadmap
        </h1>

        {/* --------stages------ */}
        <section className="roadmap  flex flex-col  gap-[4rem] lg:gap-[8rem] text-[white] items-center w-[100%] relative">
          {/* ---stage1-- */}
          <div className="w-[100%] md:w-[70%]  lg:w-[45%] md:pl-[5rem] lg:pl-[6rem]">
            <div className="stage-1 w-[100%] md:w-[100%] pl-[2rem] lg:pl-[6rem] pt-[1rem] md:pt-[4rem] pb-[2rem] lg:w-[100%] ">
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                project launch
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                whitepaper IV
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                tokenmonics
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                branding
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                website creation
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                strategy planning
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
                team expansion
              </li>
            </div>
          </div>

          {/* ---stage2-- */}
          <div className="pt-[0rem]  w-[100%] lg:ml-[15rem] md:w-[70%]  md:pl-[5rem] lg:w-[45%]">
            <div className="stage-2 w-[100%] md:w-[100%] pl-[2rem]  py-[2rem] lg:w-[100%] lg:pl-[4rem]">
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                smart contract creation
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                token creation
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                marketing
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                token lauch on
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                pancakeSwap
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                buy/sell tax activation
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                team expansion
              </li>
            </div>
          </div>

          {/* ---stage3-- */}
          <div className="w-[100%] md:w-[70%]  lg:w-[45%] md:pl-[5rem] lg:pl-[6rem]">
            <div className="stage-3 w-[100%] md:w-[100%] lg:w-[100%] pt-[1rem] md:2t-[4rem] pl-[2rem] lg:pl-[6rem] pb-[2rem]">
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                native GODZ stacking
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                token bridge & <br /> uniswap pool
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                web swap interface
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                godzinu nft
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                godzinu mobile wallet
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                strategy planning
              </li>
              <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside">
                team expansion
              </li>
            </div>
          </div>
        </section>
      </div>

      {/* --------super powers-------- */}
      <div className="flex flex-col items-center gap-[3rem] lg:gap-[7rem] mt-[4rem]">
        <h1 className="text-[white] text-[35px] text-center lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize">
          Giving you defi <span className="gradient">super powers</span>
        </h1>

        {/* -------sub boxes------ */}

        <div className="flex flex-col lg:flex-row md:gap-[3rem] lg:gap-0 items-center">
          {/* --box 1--- */}
          <section className=" text-[white] w-[100%]  lg:w-[50%] items-center">
            <div className="flex flex-col md:flex-row p-[1rem] gap-[1rem] defi items-center">
              <div>
                <h1 className="text-[30px] lg:text-[57.66px] font-[700] md:mb-[1rem] lg:mb-[0]">
                  wallets+
                </h1>
                <p className="text-[white] font-[400]  lg:text-[24px] leading-[30px]">
                  Robust multi-chain wallet support: Trade directly from your
                  own wallet. Be your own bank
                </p>
              </div>

              <img src={wallets} alt="" />
            </div>

            <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] subscribe grad-border mt-[2rem]">
              <a href="https://swap.godzillaproject.io/">deposit</a>
            </button>
          </section>

          {/* ------box 2------ */}

          <section className=" text-[white]    w-[100%]  lg:w-[50%]">
            <div className="flex flex-col md:flex-row-reverse items-center lg:flex-row p-[1rem] gap-[1rem] defi">
              <div>
                <h1 className="lg:text-[57.66px] font-[700]  text-[30px] md:mb-[1rem] lg:mb-[0]">
                  GODZINUSafe{" "}
                </h1>
                <p className="text-[white] font-[400] lg:text-[24px] leading-[30px]">
                  Create and manage THORChain multi-sig wallets for enhanced
                  self-custody and governance.
                </p>
              </div>

              <img src={safe} alt="" />
            </div>

            <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] subscribe grad-border  mt-[2rem]">
              <a href="https://swap.godzillaproject.io/">launch</a>
            </button>
          </section>
        </div>
      </div>

      {/* --------join our community------------ */}
      <div id="community">
        <h1 className="text-[white] text-[35px] text-center lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem] mb-[4rem]">
          join our community of{" "}
          <span className="gradient">godzinu hunters</span>
        </h1>
        <section className="flex flex-col gap-[4rem] lg:gap-[0] md:flex-row items-center">
          <img src={godzilla} alt="" className="w-[100%] md:w-[50%]" />
          <div className="flex justify-center w-[100%] lg:w-[50%]">
            <img src={icons} alt="" className="w-[70%]" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hexagon;
