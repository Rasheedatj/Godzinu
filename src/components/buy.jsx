import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion';
import { slideInVariantAnimation } from '../util';
import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icons } from "../assets";

const Buy = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideInVariantAnimation}
      className="my-[5rem] mt-[10rem] hidden lg:block" id="buy">
      <h1 className="pb-[2rem] lg:pb-[3rem]  text-[20px] lg:text-[50.46px] leading-[60px] font-[500]  capitalize gradient px-[4rem]">
        buy/Sell taxes
      </h1>
      <div className=" lg:flex   lg:flex-row lg:justify-between lg:gap-[0] gap-[2rem] items-center">
        <Swiper
          className="flex flex-wrap gap-[2rem]  lg:gap-[4rem]  mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {/* ------slide 1--- */}

          <SwiperSlide className="px-[4rem] w-[200px] ">
            <h1 className="pb-[1rem] text-[white]  text-[20px] lg:text-[50.46px] leading-[60px] font-[500]  capitalize">
              taxes
            </h1>
            <p className="text-white font-[300] text-[18px] lg:text-[26.96px]">
              A Tax is deducted when you buy/sell /transfer. Taxes funds
              Operations, Liquidity Pools, Staking set by Smart Contract and can
              be changed dynamically overtime as the project develops
            </p>
          </SwiperSlide>
          {/* ------slide 2--- */}
          <SwiperSlide className="px-[4rem] w-[200px]">
            <h1 className="pb-[1rem] text-[white]  text-[20px] lg:text-[50.46px] leading-[60px] font-[500]  capitalize">
              operations and maerketing
            </h1>
            <p className="text-white font-[300] text-[18px] lg:text-[26.96px]">
              Parts of the funds received from the Buy/Sell tax will fund
              operations and marketing. The exact rate is dynamic and is set by
              Smart Contract, and can be adjusted at any time.
            </p>
          </SwiperSlide>
          {/* ------slide 3--- */}
          <SwiperSlide className="px-[4rem] w-[200px]">
            <h1 className="pb-[1rem] text-[white]  text-[50.46px] leading-[60px] font-[500]  capitalize">
              liquidity pool
            </h1>
            <p className="text-white font-[300] text-[18px] lg:text-[26.96px]">
              Parts of the funds received from the Buy/Sell t taxes will go
              towards $GODZ token burns, creating a deflationary and scarce
              $GODZ token. The exact rate is dynamic and is set by Smart
              Contract, and can be adjusted at any time.
            </p>
          </SwiperSlide>
          {/* ------slide 4--- */}
          <SwiperSlide className="px-[4rem] w-[200px]">
            <h1 className="pb-[1rem] text-[white]  text-[20px] lg:text-[50.46px] leading-[60px] font-[500]  capitalize">
              staking reward
            </h1>
            <p className="text-white font-[300] text-[18px] lg:text-[26.96px]">
              A Tax is deducted when you buy/sell /transfer. Taxes funds
              Operations, Liquidity Pools, Staking set by Smart Contract and can
              be changed dynamically overtime as the project develops
            </p>
          </SwiperSlide>
          {/* ------slide 5--- */}
          <SwiperSlide className="px-[4rem] w-[200px]">
            <h1 className="pb-[1rem] text-[white]  text-[20px] lg:text-[50.46px] leading-[60px] font-[500]  capitalize">
              token burns
            </h1>
            <p className="text-white font-[300] text-[18px] lg:text-[26.96px]">
              Parts of the funds received from the Buy/Sell transfer taxes will
              go towards $GODZ token burns, creating a deflationary and scarce
              $GODZ token. The exact rate is dynamic and is set by Smart
              Contract, and can be adjusted at any time.
            </p>
          </SwiperSlide>
        </Swiper>

        <img src={Icons.buy} alt="" className="lg:w-[40%]" />
      </div>
    </motion.div>
  );
};

export default Buy;
