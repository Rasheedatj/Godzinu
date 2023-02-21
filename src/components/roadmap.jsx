import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { slideInVariantAnimation } from "../util";
import { useEffect } from "react";

const Roadmap = () => {
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
    <div className="py-[5rem]" id="roadmap">
      <h1 className="gradient text-[35px] mb-[5rem] md:mb-[15rem] lg:text-[60.39px] lg:leading-[60px] font-[500]  capitalize mt-[4rem] text-center">
        roadmap
      </h1>

      {/* --------stages------ */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInVariantAnimation}
        className="roadmap  flex flex-col  gap-[4rem] lg:gap-[4rem] text-[white] items-center w-[100%] relative"
      >
        {/* ---stage1-- */}
        <div className="lg:w-[35%] w-[100%]">
          <div className="stage-1 w-[100%]  pl-[2rem]  py-[2rem]  lg:pl-[8rem] ">
            <li className="capitalize md:text-[28.35px] md:leading-[42.52px] list-disc lg:list-none list-outside ">
              project launch
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside ">
              whitepaper IV
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside ">
              tokenmonics
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside ">
              branding
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside ">
              website creation
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside ">
              strategy planning
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside ">
              team expansion
            </li>
          </div>
        </div>

        {/* ---stage2-- */}
        <div className="lg:w-[35%] lg:ml-[20rem] w-[100%]">
          <div className="stage-2 w-[100%]  pl-[2rem]  py-[2rem]  lg:pl-[8rem]">
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              smart contract creation
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              token creation
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              marketing
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              token lauch on
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              pancakeSwap
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              buy/sell tax activation
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              team expansion
            </li>
          </div>
        </div>

        {/* ---stage3-- */}
        <div className="lg:w-[35%] w-[100%]">
          <div className="stage-3 w-[100%]  pl-[2rem]  py-[2rem]  lg:pl-[8rem]">
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              native GODZ staking
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              token bridge & <br /> uniswap pool
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              web swap interface
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              godzinu nft
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              godzinu mobile wallet
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              strategy planning
            </li>
            <li className="capitalize md:text-[28.35px] md:leading-[35.52px] list-disc lg:list-none list-outside">
              team expansion
            </li>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;
