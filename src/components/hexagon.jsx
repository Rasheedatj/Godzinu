import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import hexagon from "../assets/hexagon.svg";
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

      {/* ------team-------- */}
      <h1 className="gradient my-[4rem] text-center text-[35px] md:text-[45px] lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem]">
        our team
      </h1>
      <Swiper
        className="flex flex-wrap gap-[2rem]  lg:gap-[4rem] justify-center mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        // slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          350: {
            slidesPerView: 1,
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
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col ">
          <img src={team1} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            tara arora
          </h1>
          <p className="pt-[2rem] capitalize text-center">
            digital marketing specialist
          </p>
        </SwiperSlide>
        {/* team member 2 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={jimmy} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            jimmy hope
          </h1>
          <p className="pt-[2rem] capitalize text-center">
            social media specialist
          </p>
        </SwiperSlide>
        {/* team member 3 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={ayush} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            ayush nurula
          </h1>
          <p className="pt-[2rem] capitalize text-center">UI/UX specialist</p>
        </SwiperSlide>
        {/* team member 4 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={opa} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">opa</h1>
          <p className="pt-[2rem] capitalize text-center">
            digital marketing specialist
          </p>
        </SwiperSlide>
        {/* team member 5 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={cerberos} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            cerberos
          </h1>
          <p className="pt-[2rem] capitalize text-center">
            Social Media Specialist .
          </p>
        </SwiperSlide>
        {/* team member 6 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={good} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            good chilla
          </h1>
          <p className="pt-[2rem] capitalize text-center">UI/UX Specialist</p>
        </SwiperSlide>
        {/* team member 7 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={taiwo} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            taiwo
          </h1>
          <p className="pt-[2rem] capitalize text-center">UI/UX Specialist</p>
        </SwiperSlide>
        {/* team member 8 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={henry} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            henry
          </h1>
          <p className="pt-[2rem] capitalize text-center">
            Social Media Specialist
          </p>
        </SwiperSlide>

        {/* team member 9 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={bew} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">bew</h1>
          <p className="pt-[2rem] capitalize text-center">UI/UX Specialist</p>
        </SwiperSlide>
        {/* team member 10 */}
        <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] w-[%] flex flex-col">
          <img src={don} alt="" />
          <h1 className="font-[700]  capitalize text-center mt-[1rem] ">
            don zhilla
          </h1>
          <p className="pt-[2rem] capitalize text-center">UI/UX Specialist</p>
        </SwiperSlide>
      </Swiper>

      {/* -------roadmap-------- */}
      <div className="py-[5rem]">
        <h1 className="gradient text-[35px] mb-[2rem] lg:mb-[0] lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[4rem] text-center">
          roadmap
        </h1>

        {/* --------stages------ */}
        <section className="roadmap relative flex flex-col lg:flex-row gap-[2rem] text-[white] justify-between ">
          {/* ---stage1-- */}
          <div className="w-[100%]">
            <h1 className="text-[white]  lg:text-[60.39px] lg:leading-[60px] font-[500] text-[center]  capitalize mb-[2rem]">
              stage 1
            </h1>
            <div>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                project launch
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                whitepaper IV
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                tokenmonics
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                branding
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                website creation
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                strategy planning
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                team expansion
              </li>
            </div>
          </div>

          {/* ---stage2-- */}
          <div className="pt-[6rem]  w-[100%]">
            <div>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                smart contract creation
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                token creation
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                marketing
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                token lauch on
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                pancakeSwap
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                buy/sell tax activation
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                team expansion
              </li>
            </div>

            <h1 className="text-[white]  lg:text-[60.39px] lg:leading-[60px] font-[500] text-[center]  capitalize mt-[5rem] ">
              stage 2
            </h1>
          </div>

          {/* ---stage3-- */}
          <div className="w-[100%]">
            <h1 className=" mb-[2rem] text-[white]  lg:text-[60.39px] lg:leading-[60px] font-[500] text-[center]  capitalize ">
              stage 3
            </h1>
            <div>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                native GODZ stacking
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                token bridge & <br /> uniswap pool
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                web swap interface
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                godzinu nft
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                godzinu mobile wallet
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
                strategy planning
              </li>
              <li className="capitalize text-[28.35px] leading-[42.52px]">
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
          <section className=" text-[white] w-[100%]  lg:w-[50%]">
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
              <a href="#">deposit</a>
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
              <a href="#">launch</a>
            </button>
          </section>
        </div>
      </div>

      {/* --------join our community------------ */}
      <h1 className="text-[white] text-[35px] text-center lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem] mb-[4rem]">
        join our community of <span className="gradient">godzinu hunters</span>
      </h1>
      <section className="flex flex-col gap-[4rem] lg:gap-[0] md:flex-row items-center">
        <img src={godzilla} alt="" className="w-[100%] md:w-[50%]" />
        <div className="flex justify-center w-[100%] lg:w-[50%]">
          <img src={icons} alt="" className="w-[70%]" />
        </div>
      </section>
    </>
  );
};

export default Hexagon;
