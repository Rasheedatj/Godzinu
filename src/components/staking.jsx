import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";
import { Icons } from "../assets";

const Staking = () => {
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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideInVariantAnimation}
    >
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[3rem]  mt-[8rem]">
        {/* program 1 */}
        <div className="flex flex-col justify-between lg:gap-[15rem] lg:w-[48%] ">
          <h1 className="text-[white] text-[35px] lg:text-[50.46px] leading-[60px] font-[500]  capitalize">
            <span className="gradient uppercase lg:block pb-[1rem]">
              {" "}
              $godz &nbsp;
            </span>
            stacking program
          </h1>

          <div className="">
            <h3
              className="gradient capitalize pb-[1rem]  font-[500] text-[25px] md:text-[35.95px] leadi
          [53.93px] tracking-[2%] pt-[4rem]"
            >
              $GODZ token stacking
            </h3>

            <h3
              className="text-white capitalize font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%] text-[25px]"
            >
              maturity:16:22 UTC, 15th March
            </h3>
            <h3
              className="text-white capitalize font-[500] md:text-[35.95px] leadi
          [53.93px] tracking-[2%] text-[15px] lg:text-[25px]"
            >
              contract:{" "}
              <span className="font-[300] text-[10px] md:text-[17px] text-white tracking-[2%]">
                0xae7cf30e14e132e43689ebe4fab49706c59a0bf7
              </span>
            </h3>
          </div>
        </div>

        {/* program 2 */}
        <div className="flex flex-col items-end gap-[2rem] lg:w-[50%] ">
          <img src={Icons.program} alt="" />
          <div>
            <h3 className="gradient  capitalize font-[500] md:text-[35.95px] md:leading:[53.93px] tracking-[2%] text-[25px]">
              $GODZ/$BNB LP token stacking
            </h3>

            <h3 className="text-white capitalize font-[500] text-[25px] md:text-[35.95px] md:leading-[53.93px] tracking-[2%]b">
              maturity:15:56 UTC, 16th March
            </h3>
            <h3 className="text-white capitalize font-[500] md:text-[34.95px] md:leading-[53.93px] tracking-[2%] text-[15px] lg:text-[25px]">
              contract:{" "}
              <span className="font-[300] text-[10px] md:text-[16px] text-white tracking-[2%]">
                0xd1d9Ad05238993A9C10c5b17c4EC6d03B9D35138
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* -program button */}
      <div className="flex flex-col gap-[2rem] md:gap-[0] md:flex-row bg-[#ff1cf72b] px-[2rem] py-[1rem] rounded-[5px] mt-[3rem] border-[1px] border-[#ffffff4d] items-center">
        <h1 className="text-[white] w-[100%]  md:w-[80%] text-[22px] md:text-[25px]  lg:text-[40.46px] lg:leading-[60px] font-[500]  capitalize">
          read more about
          <span className="gradient uppercase "> $GODZ</span> stacking program
        </h1>

        <button className="capitalize text-[white] h-[70.77px] w-[200px] md:w-[263.5px] rounded-[8.09px] subscribe text-[23px]">
          <a href="https://staking.godzillaproject.io/">start staking</a>
        </button>
      </div>
    </motion.div>
  );
};

export default Staking;
