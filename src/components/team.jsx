import { Icons } from "../assets";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Team = () => {
  return (
    <>
      <div id="team">
        <h1 className="gradient my-[4rem] text-center text-[35px] md:text-[45px] lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[9rem]">
          our team
        </h1>
        <Swiper
          className="flex gap-[2rem]  lg:gap-[4rem]  mySwiper  pb-[5rem]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
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
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px] flex flex-col relative">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677915471/ayush_fvacpb.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem]  text-[25px]">
              ayush nurula
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              project lead
            </p>
          </SwiperSlide>
          {/* team member 2 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877986/opa_lff9cm.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              opa
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              growth Lead
            </p>
          </SwiperSlide>
          {/* team member 3 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677878010/team_pzylyy.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              tara arora
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              content writer and social media manager
            </p>
          </SwiperSlide>
          {/* team member 4 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877981/henry_fmze79.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              henry gray
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              Community Manager
            </p>
          </SwiperSlide>
          {/* team member 5 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877985/jimmy_xphi3p.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              jimmy hope
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              Community Manager
            </p>
          </SwiperSlide>
          {/* team member 6 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677878006/taiwo_fenbbf.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              taiwo
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              Graphics Designer
            </p>
          </SwiperSlide>

          {/* team member 8*/}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877974/good_kv0z3y.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              good chilla
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              Advisor
            </p>
          </SwiperSlide>
          {/* team member 9 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877969/cerberos_t0vd18.png"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              cerberos
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              Advisor
            </p>
          </SwiperSlide>

          {/* team member 10 */}
          <SwiperSlide className="team px-[1rem] py-[2rem] rounded-[18px]  flex flex-col">
            <img
              src="https://res.cloudinary.com/dn25ccoss/image/upload/v1677877969/bew_rto3fu.svg"
              alt=""
            />
            <h1 className="font-[700]  capitalize text-center mt-[1rem] text-[25px] ">
              bew
            </h1>
            <p className="pt-[1rem] text-[20px] capitalize text-center">
              Advisor
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Team;
