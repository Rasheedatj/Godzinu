import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";
import { Icons } from "../assets";

const SuperPower = () => {
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
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInVariantAnimation}
        className="flex flex-col  items-center gap-[3rem] lg:gap-[7rem] mt-[4rem]"
      >
        <h1 className="text-[white] text-[35px] text-center lg:text-[72.39px] lg:leading-[60px] font-[500]  capitalize">
          Giving you defi <span className="gradient">super powers</span>
        </h1>

        {/* -------sub boxes------ */}

        <div className="flex flex-col lg:flex-row  md:gap-[3rem] lg:gap-0 items-center ">
          {/* --box 1--- */}
          <section className=" text-[white] w-[100%]   items-center lg:w-[50%]">
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

              <img src={Icons.wallets} alt="" className="md:w-[40%]" />
            </div>

            <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] subscribe grad-border mt-[2rem]">
              <a href="#">coming soon</a>
            </button>
          </section>

          {/* ------box 2------ */}

          <section className=" text-[white]    w-[100%]  lg:w-[50%]">
            <div className="flex flex-col md:flex-row-reverse items-center lg:flex-row p-[1rem] gap-[1rem] defi ">
              <div className="lg:w-[65%]">
                <h1 className="lg:text-[57.66px] font-[700]  text-[30px] md:mb-[1rem] lg:mb-[0]">
                  GODZINUSafe{" "}
                </h1>
                <p className="text-[white] font-[400] lg:text-[24px] leading-[30px]">
                  Create and manage THORChain multi-sig wallets for enhanced
                  self-custody and governance.
                </p>
              </div>

              <img src={Icons.safe} alt="" className="md:w-[40%]" />
            </div>

            <button className="text-[white] px-[2rem] py-[.7rem] rounded-[10px] capitalize border-[2px] subscribe grad-border  mt-[2rem]">
              <a href="#">coming soon</a>
            </button>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default SuperPower;
